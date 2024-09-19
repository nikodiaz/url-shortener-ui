import Cookies from "js-cookie"

const API = import.meta.env.VITE_API_URL
const token = Cookies.get("UserToken")

export const shortenUrl = async (originalUrl: string) => {
  try {
    const response = await fetch(`${API}/api/shorten`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
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

export const totalVisitsByUser = async () => {
  try {
    const response = await fetch(`${API}/user/visits/total`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    return data

  } catch (error) {
    console.error("No se pudo obtener las visitas del usuario", error)
  }
}

export const totalLinksByUser = async () => {
  try {
    const response = await fetch(`${API}/user/links`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const data = await response.json()
    return data

  } catch (error) {
    console.error("No se pudo obtener las visitas del usuario", error)
  }
}
