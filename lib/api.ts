import Constants from 'expo-constants';
import { Platform } from 'react-native';

export type Academia = {
  id: string;
  nome: string;
  endereco: string;
  cidade: string;
  cep: string;
  descricao?: string;
  imagemUrl?: string;
  infos?: string[];
};

export type Usuario = {
  id: string;
  nome: string;
  username: string;
  nivelAcesso?: string;
  statusUsuario?: string;
};

type LoginResponse = {
  message?: string;
};

function removerBarraFinal(url: string) {
  return url.replace(/\/$/, '');
}

function buscarApiUrl() {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return removerBarraFinal(process.env.EXPO_PUBLIC_API_URL);
  }

  if (Platform.OS === 'web') {
    return 'http://localhost:8080';
  }

  const hostUri =
    Constants.expoConfig?.hostUri ||
    (Constants as { manifest?: { debuggerHost?: string } }).manifest?.debuggerHost ||
    (Constants as { manifest2?: { extra?: { expoClient?: { hostUri?: string } } } }).manifest2?.extra?.expoClient?.hostUri;

  const host = hostUri?.split(':')[0];

  if (host && host !== 'localhost' && host !== '127.0.0.1') {
    return `http://${host}:8080`;
  }

  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:8080';
  }

  return 'http://localhost:8080';
}

const API_URL = buscarApiUrl();

export const apiConfigurada = Boolean(API_URL);

async function request<T>(rota: string, options: RequestInit = {}): Promise<T> {
  const resposta = await fetch(`${API_URL}${rota}`, {
    credentials: 'include',
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!resposta.ok) {
    const mensagem = await resposta.text();
    throw new Error(mensagem || 'Erro na comunicacao com o backend.');
  }

  const texto = await resposta.text();

  if (!texto) {
    return undefined as T;
  }

  try {
    return JSON.parse(texto) as T;
  } catch {
    return texto as T;
  }
}

export async function listarAcademias() {
  return request<Academia[]>('/academias');
}

export async function buscarAcademia(id: string) {
  return request<Academia>(`/academias/${id}`);
}

export async function login(username: string, password: string) {
  const params = new URLSearchParams();
  const usuario = username.trim();

  params.append('username', usuario);
  params.append('email', usuario);
  params.append('password', password);
  params.append('senha', password);

  return request<LoginResponse>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });
}

export async function buscarUsuarioLogado() {
  return request<Usuario>('/usuarios/me');
}

export async function listarFavoritos(usuarioId: string) {
  return request<string[]>(`/usuarios/${usuarioId}/favoritos`);
}

export async function adicionarFavorito(usuarioId: string, academiaId: string) {
  return request<void>(`/usuarios/${usuarioId}/favoritos`, {
    method: 'POST',
    body: JSON.stringify({ academiaId }),
  });
}

export async function removerFavorito(usuarioId: string, academiaId: string) {
  return request<void>(`/usuarios/${usuarioId}/favoritos/${academiaId}`, {
    method: 'DELETE',
  });
}
