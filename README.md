# URL Shortener

Este es el frontend del acortador de URLs, que permite a los usuarios ingresar
una URL larga y obtener una URl corta que se puede compartir fácilmente.

## Descripción

Este proyecto es una interfaz simple creada con React que interactúa con el backend
para acortar URLs. El usuario puede ingresar una URL larga en el formulario y obtener
una versión corta generada por la API.

## Tecnologías usadas

- React
- TypeScript
- TailwindCSS

## Instalación

Sigue los pasos a continuación para ejecutar el frontend localmente:

1. Clona el repositorio

```bash
git clone https://github.com/nikodiaz/url-shortener-ui.git
```

2. Navega al directorio del proyecto:

```bash

cd url-shortener-frontend
```

3. Instala las dependencias

```bash

npm install
```

4. Inicia la aplicación

```bash

npm run dev
```

5. La aplicación estará disponible en `http://localhost:5173`.

## Uso

1. **Ingresar la URL larga:** En la página principal, encontrarás un formulario
   donde puedes ingresar la URL que deseas acortar.
   ![Formulario de ingreso de url](https://github.com/user-attachments/assets/fd9510a6-2ab4-480b-8a33-23ce04862e3c)
2. **Obtener la URL corta:** Al enviar el formulario, la URL se acortará y el enlace
   corto aparecerá en pantalla.
   ![URL corta generada](https://github.com/user-attachments/assets/052869c2-30ba-4be8-8fd0-7974a7fed162)

## Interacción con la API

Este frontend interactúa con un backend que expone una API para acortar URLs.
Puedes consultar el código del backend en el siguiente repositorio:

[Repositorio del backend](https://github.com/nikodiaz/url-shortener-api)

