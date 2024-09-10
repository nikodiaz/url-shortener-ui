export const shortenUrl = async (originalUrl: string) => {
  try {
    console.log('Enviando URL:', originalUrl);
    const response = await fetch('http://localhost:3000/api/shorten', {
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
