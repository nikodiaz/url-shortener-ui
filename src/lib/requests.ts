const API = import.meta.env.VITE_API_URL

export const shortenUrl = async (originalUrl: string) => {
  try {
    const response = await fetch(`${API}/api/shorten`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ originalUrl })
    })
    const data = await response.json()

    return data

  } catch (e) {
    console.error('No se pudo acortar la URL:', e)
  }
}

export const signup = async (username: string, email: string, password: string) => {
  try {
    const response = await fetch(`${API}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    })
    const data = await response.json()
    return data

  } catch (error) {
    console.error("No se pudo registrar la cuenta:", error)
  }
}

export const signin = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API}/api/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
    const data = await response.json()
    return data

  } catch (error) {
    console.error("No se pudo iniciar sesión", error)
  }
}
