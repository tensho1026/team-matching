export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export async function readApiErrorMessage(response: Response) {
  const data: unknown = await response.json().catch(() => null)

  if (isRecord(data)) {
    if (typeof data.message === 'string') {
      return data.message
    }

    if (
      Array.isArray(data.message) &&
      data.message.every((message) => typeof message === 'string')
    ) {
      return data.message.join('\n')
    }
  }

  return '通信に失敗しました'
}
