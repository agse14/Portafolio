# Portfolio Elegante con SvelteKit

Un portafolio moderno y elegante construido con SvelteKit y TailwindCSS.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Responsive**: Adaptado para dispositivos móviles, tablets y escritorio
- **Dark Mode Ready**: Preparado para tema oscuro
- **Secciones Completas**:
  - Hero con presentación y enlaces sociales
  - Sobre mí con experiencia
  - Proyectos destacados con imágenes y enlaces
  - Habilidades con barras de progreso
  - Formulario de contacto funcional
  - Footer con información adicional

## 🛠️ Tecnologías

- **Framework**: SvelteKit
- **Estilos**: TailwindCSS
- **TypeScript**: Para type safety
- **Iconos**: SVG integrados

## 📦 Instalación

Las dependencias ya están instaladas. Si necesitas reinstalar:

```bash
npm install
```

## 🏃‍♂️ Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev

# o abre automáticamente en el navegador
npm run dev -- --open
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🏗️ Build

Para crear una versión de producción:

```bash
npm run build
```

Previsualiza la build de producción:

```bash
npm run preview
```

## 📝 Personalización

### 1. Información Personal

Edita los siguientes archivos para personalizar tu información:

- **Hero Section** (`src/lib/components/Hero.svelte`): Tu nombre y descripción
- **About Section** (`src/lib/components/About.svelte`): Biografía y experiencia
- **Footer** (`src/lib/components/Footer.svelte`): Copyright y año

### 2. Proyectos

Modifica el array `projects` en `src/lib/components/Projects.svelte`:

```typescript
const projects = [
  {
    title: "Nombre del Proyecto",
    description: "Descripción breve",
    image: "URL de la imagen",
    tags: ["Tech1", "Tech2"],
    github: "URL del repositorio",
    demo: "URL de la demo"
  }
];
```

### 3. Habilidades

Edita el array `skills` en `src/lib/components/Skills.svelte`:

```typescript
const skills = [
  {
    category: "Categoría",
    items: [
      { name: "Habilidad", level: 90 }
    ]
  }
];
```

### 4. Enlaces Sociales

Actualiza los enlaces en:
- `src/lib/components/Hero.svelte` (sección de iconos sociales)
- `src/lib/components/Footer.svelte` (iconos del footer)

### 5. Colores y Estilos

Modifica `tailwind.config.js` para cambiar la paleta de colores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores personalizados
      }
    }
  }
}
```

### 6. Formulario de Contacto

El formulario en `src/lib/components/Contact.svelte` está configurado con una simulación. Para implementar un backend real:

1. Crea un endpoint en `src/routes/api/contact/+server.ts`
2. Integra con servicios como SendGrid, Resend, o EmailJS
3. Actualiza la función `handleSubmit` en el componente

## 🌐 Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### Otros Adaptadores

Consulta la [documentación de SvelteKit](https://kit.svelte.dev/docs/adapters) para otros proveedores.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

¡Personaliza este portafolio y hazlo tuyo! 🎨

