# portafolio-personal-astro

Proyecto Astro orientado a migrar la plantilla **Twenty** de **HTML5 UP** a una implementación modular, mantenible y escalable.

## Objetivo

Reconstruir la plantilla original dentro de Astro manteniendo:

- fidelidad visual,
- comportamiento responsive,
- navegación y scripts originales cuando sea necesario,
- separación clara entre layouts, componentes, estilos y datos.

## Estado actual

El repositorio ya incluye:

- arquitectura modular en `src/`,
- home migrada por secciones,
- refactor del CSS original hacia módulos reutilizables,
- colección de contenido en `src/content/posts/`,
- páginas internas en proceso de migración progresiva.

## Estructura principal

```text
.
├── docs/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── sections/
│   ├── content/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── vendor/
└── package.json
```

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia el entorno local de desarrollo |
| `npm run build` | Genera la build estática en `dist/` |
| `npm run preview` | Sirve la build generada localmente |

## Documentación

La documentación técnica principal se encuentra en:

- `docs/documentacion-migracion-twenty-astro.md`

Incluye:

- arquitectura definida,
- clasificación de componentes,
- decisiones técnicas,
- troubleshooting notes,
- registro de prompts utilizados.

## Referencia del template original

La fuente de migración se conserva en:

- `vendor/twenty/`

Este directorio se utiliza como referencia visual, estructural y funcional durante el proceso de adaptación a Astro.
