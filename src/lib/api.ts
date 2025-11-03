export interface QueryRequest {
  question: string;
}

export interface QuerySource {
  title: string;
  url: string | null;
  source: string;
}

export interface QueryResponse {
  answer: string;
  answer_html: string;
  answer_md: string;
  sources: QuerySource[];
  k: number;
}

export const API_BASE: string =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_API_BASE) ||
  "http://localhost:8000";

export async function queryRag(request: QueryRequest): Promise<QueryResponse> {
  const response = await fetch(`${API_BASE}/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: request.question,
    }),
  });

  if (!response.ok) {
    const error = new Error(`Request failed: ${response.status}`);
    throw error;
  }

  const data = (await response.json()) as QueryResponse;
  return data;
}


