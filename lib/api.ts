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

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8080';

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

  return resposta.json();
}

export async function listarAcademias() {
  return request<Academia[]>('/academias');
}

export async function buscarAcademia(id: string) {
  return request<Academia>(`/academias/${id}`);
}

export async function login(username: string, password: string) {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);

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
