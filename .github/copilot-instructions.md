<!-- Portfolio Project Setup Instructions -->

## ✅ Proyecto Completado

Tu portafolio elegante con SvelteKit está listo y corriendo en http://localhost:5173

## 📦 Estructura del Proyecto

```
src/
├── lib/
│   └── components/
│       ├── Navbar.svelte      # Navegación con scroll
│       ├── Hero.svelte         # Sección principal con presentación
│       ├── About.svelte        # Sobre mí y experiencia
│       ├── Projects.svelte     # Proyectos destacados
│       ├── Skills.svelte       # Habilidades con barras de progreso
│       ├── Contact.svelte      # Formulario de contacto
│       └── Footer.svelte       # Pie de página
├── routes/
│   ├── +layout.svelte          # Layout principal con TailwindCSS
│   └── +page.svelte            # Página de inicio
└── app.css                     # Estilos globales de TailwindCSS
```

## 🎨 Personaliza Tu Portafolio

### 1. Información Personal
- **Nombre y descripción**: Edita `src/lib/components/Hero.svelte`
- **Biografía**: Modifica `src/lib/components/About.svelte`
- **Contacto**: Actualiza enlaces en todos los componentes

### 2. Proyectos
Edita el array en `src/lib/components/Projects.svelte`:
```typescript
const projects = [
  {
    title: "Tu Proyecto",
    description: "Descripción",
    image: "URL",
    tags: ["Tech1", "Tech2"],
    github: "https://github.com/...",
    demo: "https://..."
  }
];
```

### 3. Habilidades
Modifica `src/lib/components/Skills.svelte` para agregar tus tecnologías

### 4. Colores
Personaliza `tailwind.config.js` para cambiar la paleta de colores

## 🚀 Comandos Disponibles

```bash
npm run dev         # Servidor de desarrollo
npm run build       # Compilar para producción
npm run preview     # Previsualizar build
```

## 📝 Próximos Pasos

- [ ] Personaliza tu información personal
- [ ] Agrega tus proyectos reales
- [ ] Actualiza las habilidades según tu experiencia
- [ ] Conecta el formulario de contacto (opcional)
- [ ] Deploy a Vercel/Netlify

¡Tu portafolio está listo para personalizar! 🎉
