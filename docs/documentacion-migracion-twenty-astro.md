# Documentación Técnica de Proyecto: Migración de Plantilla HTML a Astro

## 1. Introducción

El presente documento describe el proceso técnico de migración de la plantilla **Twenty** de **HTML5 UP** hacia un proyecto implementado con **Astro**. El propósito principal del repositorio fue transformar una base originalmente estática, compuesta por archivos HTML, CSS y JavaScript, en una solución funcional, escalable y mantenible dentro de una arquitectura moderna orientada a componentes.

La migración no se limitó a una conversión directa de archivos, sino que implicó la reorganización estructural del proyecto, la separación de responsabilidades entre capas, la normalización de estilos y la preparación del contenido para futuros flujos de crecimiento.

## 2. Objetivo

El objetivo de esta documentación es registrar de forma técnica y estructurada:

- la arquitectura definida para el proyecto,
- la clasificación de componentes y estilos,
- las decisiones técnicas tomadas durante la migración,
- las notas de troubleshooting derivadas del proceso,
- y la secuencia general de pasos aplicada para adaptar la plantilla Twenty a Astro.

## 3. Desarrollo Técnico

### 3.1 Arquitectura Definida

La arquitectura adoptada prioriza simplicidad, fidelidad visual con la plantilla original y escalabilidad progresiva.

La estructura principal del proyecto se organizó de la siguiente forma:

```text
src/
├─ components/
│  ├─ common/
│  ├─ layout/
│  └─ sections/
├─ content/
├─ data/
├─ layouts/
├─ pages/
└─ styles/
   ├─ common/
   ├─ layout/
   ├─ sections/
   └─ responsive.css
```

#### Responsabilidad por capa

- `layouts/`: estructura global del documento, carga de estilos y scripts compartidos.
- `pages/`: definición de rutas públicas del sitio.
- `components/layout/`: elementos estructurales globales como `Header`, `Nav` y `Footer`.
- `components/sections/`: secciones principales de la home y bloques visuales equivalentes a la plantilla original.
- `components/common/`: piezas reutilizables como botones, iconos y títulos de sección.
- `data/`: contenido estructurado de la home y configuración simple del sitio.
- `data/`: además de la home, se amplió para soportar páginas internas desacopladas como `contact`, `left-sidebar`, `right-sidebar` y `no-sidebar`.
- `content/`: colección de contenido preparada para usar Astro Content Collections.
- `styles/common/`: estilos reutilizables transversales.
- `styles/layout/`: sistema de grid, wrappers y estructuras generales.
- `styles/sections/`: estilos específicos por sección visual.
- `styles/responsive.css`: overrides transversales no acoplados a un único módulo.

### 3.2 Clasificación de Componentes

La migración distinguió tres niveles de componentes.

#### Componentes comunes

Se utilizan para encapsular elementos reutilizables y desacoplados de una sección concreta.

Ejemplos:

- `Button.astro`
- `Icon.astro`
- `SectionTitle.astro`

#### Componentes de layout

Representan elementos persistentes y compartidos en varias páginas.

Ejemplos:

- `Header.astro`
- `Nav.astro`
- `Footer.astro`
- `BaseLayout.astro`
- `PageLayout.astro`

#### Componentes de sección

Modelan bloques completos equivalentes a la home de la plantilla Twenty.

Ejemplos:

- `Banner.astro`
- `Intro.astro`
- `One.astro`
- `Features.astro`
- `PortfolioGrid.astro`
- `Cta.astro`
- `LeftSidebarHeader.astro`
- `LeftSidebarMain.astro`
- `SidebarContent.astro`
- `RelatedCards.astro`

Esta clasificación permitió migrar la home de forma progresiva, manteniendo una estructura cercana al vendor y evitando una fragmentación excesiva del HTML.

### 3.3 Organización de Estilos

Uno de los trabajos principales de la migración consistió en separar el `main.css` monolítico de la plantilla original en módulos más pequeños.

#### Capa común

- `common/button.css`: botones y listas de botones.
- `common/forms.css`: inputs, textarea, focus y placeholders del formulario de la plantilla.
- `common/icons.css`: iconos sociales, destacados y listas de iconos.
- `common/image.css`: comportamiento base de imágenes (`.image`, `.image.featured`, `.image.fit`).

#### Capa de layout

- `layout/grid.css`: contenedores, filas, gutters, columnas y variantes responsive.
- `layout/wrapper.css`: wrappers base y variantes visuales (`style1`, `style2`, `style3`, `special-alt`).
- `layout/section-article.css`: encabezados especiales, estructura editorial y variantes responsive de `header.major` y `header.special`.

#### Capa de secciones

- `sections/header.css`: header global, navegación desktop, submenu `dropotron`, nav móvil (`#navButton`, `#navPanel`).
- `sections/banner.css`: hero principal y sus ajustes responsive.
- `sections/main.css`: fondo, espaciado y sidebar del bloque principal.
- `sections/cta.css`: bloque CTA y sus breakpoints.
- `sections/footer.css`: footer, iconos sociales y copyright.

#### Capa de tema

- `theme.css`: centralización de la paleta de colores mediante variables CSS.

### 3.4 Gestión de Contenido

Durante la migración se preparó una colección de contenido para desacoplar parte de la información del marcado estático.

Se definió una colección `posts` mediante `content.config.ts`, con dos usos principales:

- contenido de tarjetas derivado de la sección `Three` del `index` original,
- contenido editorial basado en páginas derivadas del vendor (`left-sidebar`, `right-sidebar`, `no-sidebar`, `contact`).

Este enfoque permitió unificar el contenido en una sola fuente estructurada sin mezclar archivos sueltos fuera de la colección.

## 4. Pasos del Proceso de Migración

### 4.1 Levantamiento de estructura base

El proyecto inició con una base mínima de Astro. A partir de ello se construyó una arquitectura de carpetas coherente con el tamaño del repositorio y con la necesidad de migración incremental.

### 4.2 Creación de layouts y componentes iniciales

Se definieron layouts globales y una primera clasificación de componentes para separar estructura, secciones y piezas comunes. Esto permitió reemplazar la página inicial estática por una home compuesta desde Astro.

### 4.3 Migración progresiva de la home

La home fue descompuesta en bloques equivalentes a la plantilla original:

- banner,
- intro,
- sección `One`,
- sección `Two`,
- sección `Three`,
- CTA,
- footer.

El contenido de `homePage.js` fue ajustado posteriormente para mantener fidelidad textual con el `index.html` del vendor.

### 4.4 Refactor de estilos

Se extrajeron responsabilidades desde el CSS original a módulos especializados. Este paso incluyó:

- separación del grid,
- separación de wrappers,
- incorporación de media queries por módulo,
- recuperación de estilos faltantes del vendor,
- y centralización de la carga global de estilos en `BaseLayout`.

### 4.5 Incorporación de tema visual

Se introdujo `theme.css` como punto central de definición cromática, reemplazando colores hardcodeados en distintos módulos por variables CSS compartidas.

### 4.6 Unificación de contenido en colección

Los contenidos que se encontraban fuera de una colección fueron absorbidos dentro de `src/content/posts/`, con un esquema que distingue entre elementos usados en la home y contenido derivado de páginas del vendor.

### 4.7 Migración de páginas internas

Una vez estabilizada la arquitectura de la home, el proyecto avanzó hacia la migración de páginas internas derivadas del vendor.

#### Página Contact

La página `contact` fue refactorizada mediante una fuente de datos estructurada (`data/contact.js`) y una composición basada en Astro que conserva la estructura original del template:

- `article#main`
- `header.special.container`
- `wrapper style4 special container medium`
- `row gtr-50`

Asimismo, se restauró la variante `.wrapper.style4` y se extrajeron los estilos propios del formulario a `common/forms.css`.

#### Página Left Sidebar

La página `left-sidebar` comenzó a migrarse con una estrategia modular orientada a reutilización. Para ello se definieron componentes específicos para:

- encabezado de la página,
- tarjetas del sidebar,
- contenido principal,
- ensamblado del bloque lateral,
- y tarjetas relacionadas.

Esta decisión establece una base técnica reutilizable para páginas equivalentes como `right-sidebar`.

## 5. Consideraciones Importantes

### 5.1 Fidelidad visual frente a simplificación

Una parte sustancial del proceso consistió en decidir cuándo mantener la semántica y clases de la plantilla original y cuándo adaptar la estructura a un enfoque más modular. La decisión general fue preservar las clases originales siempre que ayudaran a conservar fidelidad y compatibilidad visual.

### 5.2 Carga de assets

Los recursos estáticos deben servirse desde `public/` y referenciarse mediante rutas absolutas del tipo `/assets/...`. Esto evitó advertencias del entorno de build y simplificó la carga de fuentes, overlays, imágenes decorativas y scripts del vendor.

### 5.3 Integración de scripts legacy

Aunque la estructura CSS del header, submenu y navegación móvil fue migrada correctamente, parte del comportamiento sigue dependiendo de scripts legacy del vendor, entre ellos:

- `jquery.dropotron.min.js`
- `util.js`
- `main.js`
- `breakpoints.min.js`

Por tanto, la responsabilidad visual fue migrada, pero algunos comportamientos aún requieren validación funcional completa en el navegador.

### 5.4 Troubleshooting notes

Durante la migración se identificaron varios problemas técnicos recurrentes:

#### Iconos Font Awesome no visibles

Causa principal:

- falta de carga de estilos complementarios del patrón `icon` heredado de la plantilla.

Solución aplicada:

- importar correctamente estilos de iconos,
- alinear el markup de `Icon.astro` con la estructura esperada por la plantilla.

#### Warning por rutas en `public/`

Causa principal:

- importar desde CSS de `src/` un recurso ubicado en `public/`.

Solución aplicada:

- mover la referencia a `fontawesome-all.min.css` al layout base mediante `<link rel="stylesheet">`.

#### Iconos de la sección `One` amontonados

Causa principal:

- ausencia de estilos base de `ul.featured-icons`.

Solución aplicada:

- restaurar el bloque del vendor para distribución, opacidad y tamaño.

#### Iconos del footer desalineados

Causa principal:

- faltaban los estilos base de `ul.icons`.

Solución aplicada:

- incorporar las reglas de alineación horizontal de la plantilla en `common/icons.css`.

#### Banner alineado a la izquierda en móvil

Causa principal:

- existencia de reglas adicionales no presentes en el vendor (`width` y `max-width` sobre `#banner .inner`).

Solución aplicada:

- eliminar esas restricciones para restaurar el comportamiento original.

#### Icono desalineado en la página de contacto

Causa principal:

- importación incorrecta del componente del icono,
- y estructura del header distinta a la del vendor.

Solución aplicada:

- uso correcto de `Icon.astro`,
- alineación del `header.special.container` con la estructura original,
- y ajuste fino del espaciado en `section-article.css`.

#### Recuadro faltante alrededor del formulario

Causa principal:

- ausencia de `.wrapper.style4` en la capa de layout.

Solución aplicada:

- restauración de `.wrapper.style4` y sus breakpoints dentro de `layout/wrapper.css`.

### 5.5 Decisiones técnicas relevantes

- Se evitó una arquitectura excesivamente compleja.
- Se privilegió la migración incremental sobre la reescritura total.
- Se modularizó el CSS por responsabilidad y no solo por secciones visuales.
- Se centralizó la paleta de color en `theme.css`.
- Se consolidó la carga de estilos en `globals.css` y `BaseLayout`.
- Se preparó la colección `posts` para soportar evolución futura del contenido.
- Se amplió `PageLayout` para soportar variantes de header compartido por página.
- Se decidió migrar páginas laterales mediante composición modular en lugar de páginas monolíticas.
- Se separaron los estilos del formulario en un módulo común para preservar reutilización y orden arquitectónico.

## 6. Conclusión

La migración de la plantilla Twenty hacia Astro se estructuró como un proceso gradual de normalización arquitectónica, separación de responsabilidades y preservación de fidelidad visual. El resultado no solo transforma una plantilla HTML estática en un proyecto funcional, sino que también establece una base técnica más mantenible para futuras ampliaciones.

La arquitectura alcanzada permite continuar con la evolución del sitio sin depender de un único archivo CSS monolítico ni de contenido rígidamente embebido en el HTML. Al mismo tiempo, conserva la identidad visual de la plantilla original y documenta las principales decisiones y problemas técnicos encontrados durante el proceso.

## Anexo A. Prompts Utilizados Como Evidencia de Uso de IA

El presente anexo recopila los prompts extensos utilizados durante el desarrollo del proyecto como evidencia de uso de herramientas de inteligencia artificial en tareas de arquitectura, troubleshooting, organización de estilos y refactor técnico.

### A.1 Arquitectura del proyecto

```text
Actúa como arquitecto de software especializado en desarrollo web moderno.

Estoy trabajando en el siguiente proyecto:

- Nombre del proyecto: portafolio-personal-astro
- Objetivo general: transformar la plantilla twenty ubicada en vendor/ a un poyecto de astro totalmente funcional, escalable y fiel a la plantilla original.
- Framework principal: Astro
- Tecnologías relacionadas: JavaScript, HTML5, CSS3
- Tipo de proyecto: Portafolio personal
- Estado actual: Proyecto de Astro creado con dependencias básicas.

Necesito una propuesta de arquitectura que incluya:

1. Estructura de carpetas recomendada.
2. Responsabilidad de cada carpeta.
3. Separación entre componentes, layouts, páginas, estilos y datos.
4. Recomendaciones de escalabilidad.
5. Riesgos o decisiones que debo considerar.
6. Justificación técnica de la propuesta.

No propongas una arquitectura excesivamente compleja para el tamaño del proyecto.
```

### A.2 Troubleshooting de iconos FontAwesome

```text
Actúa como especialista en troubleshooting de entornos de desarrollo.

Tengo el siguiente problema técnico:

Quiero implementar los iconos de la fuente FontAwesome al componente Button y aplicarlo al componte intro para visualizar un icono, pero no se esta visualizando correctamente
Contexto:

- Sistema operativo: Windows
- Entorno: WSL
- Editor: VS Code
- Proyecto o framework: Astro
- Herramienta afectada: Componente Button.astro
- Ruta donde ocurre el problema: src/components/sections/intro.astro
Mensaje de error o comportamiento observado:
No carga ningún icono en la parte superior de “As this is my twentieth freebie for HTML5 UP I decided to give it a really creative name.”
Resultado esperado: Se debería poder visualizar un icono de una grafica de barras en la parte superior de “As this is my twentieth freebie for HTML5 UP I decided to give it a really creative name.”

Necesito que:
1. Identifiques las causas más probables.
2. Propongas soluciones ordenadas de menor a mayor riesgo.
3. Indiques qué comandos ejecutar.
4. Expliques qué hace cada comando.
5. Señales qué debo evitar para no perder información.
6. Indiques cómo verificar que el problema fue resuelto.
```

### A.3 Troubleshooting corregido para Icon.astro

```text
Quiero implementar los iconos de la fuente FontAwesome al componente Button y aplicarlo al componte intro para visualizar un icono, pero no se esta visualizando correctamente
Contexto:

- Sistema operativo: Windows
- Entorno: WSL
- Editor: VS Code
- Proyecto o framework: Astro
- Herramienta afectada: Componente Icon.astro
- Ruta donde ocurre el problema: src/components/sections/intro.astro
Mensaje de error o comportamiento observado:
No carga ningún icono en la parte superior de “As this is my twentieth freebie for HTML5 UP I decided to give it a really creative name.”
Resultado esperado: Se debería poder visualizar un icono de una grafica de barras en la parte superior de “As this is my twentieth freebie for HTML5 UP I decided to give it a really creative name.”

Necesito que:
1. Identifiques las causas más probables.
2. Propongas soluciones ordenadas de menor a mayor riesgo.
3. Indiques qué comandos ejecutar.
4. Expliques qué hace cada comando.
5. Señales qué debo evitar para no perder información.
6. Indiques cómo verificar que el problema fue resuelto.
```

### A.4 Refactor de main.css por responsabilidades

```text
Actúa como desarrollador frontend especializado en CSS, arquitectura de estilos y organización visual.

Necesito refactorizar el `main.css` original de la plantilla HTML5 UP Twenty dentro de un proyecto Astro.

Contexto:

* Archivo original: `vendor/html5up-original/assets/css/main.css`
* Proyecto destino: `portafolio-personal-astro`
* Framework: Astro
* Tipo de estilos: CSS global proveniente de una plantilla HTML5 UP
* Objetivo: dividir el CSS original en archivos más pequeños y mantenibles, sin perder fidelidad visual con la plantilla original.
* Problema actual: el `main.css` original mezcla estilos base, grid, wrappers, botones, íconos, header, banner, main, footer, responsive y estilos de plugins.
* No voy a pegar todo el archivo completo para evitar ruido. Quiero que trabajes específicamente con las secciones del CSS original relacionadas con:

  * `.wrapper`
  * `.wrapper.style1`
  * `.wrapper.style2`
  * `.wrapper.style3`
  * `.wrapper.special`
  * `.wrapper.special-alt`
  * `.container`
  * `.row`
  * `.gtr-*`
  * `.col-*`
  * `.col-12-*`
  * `.imp-*`
  * media queries relacionadas con columnas, grid, wrappers y cambios responsive de layout.

Estructura actual del proyecto:

src/styles/
├─ globals.css
├─ theme.css
├─ common/
│  ├─ button.css
│  └─ icons.css
├─ layout/
│  ├─ grid.css
│  ├─ wrapper.css
│  └─ section-article.css
├─ sections/
│  ├─ header.css
│  ├─ banner.css
│  ├─ main.css
│  └─ footer.css
└─ responsive.css

Consideraciones importantes:

* Ya existe `src/styles/layout/grid.css`.
* Ya existe `src/styles/layout/wrapper.css`.
* No quiero duplicar estilos entre `grid.css`, `wrapper.css` y `responsive.css`.
* Las clases originales de HTML5 UP deben conservarse cuando sean necesarias para mantener fidelidad visual y compatibilidad con la estructura original.
* No quiero renombrar clases originales como `.row`, `.col-8`, `.col-12-narrower`, `.wrapper`, `.style2`, `.special-alt`, etc., a menos que sea estrictamente necesario.
* Los assets dentro de `public/assets/` deben referenciarse como `/assets/...`, nunca como `/public/assets/...`.

Necesito que:

1. Identifiques qué reglas relacionadas con `.wrapper`, `.container`, `.row`, `.gtr-*`, `.col-*` e `.imp-*` deben ir en `grid.css`.
2. Identifiques qué reglas relacionadas con `.wrapper`, `.style1`, `.style2`, `.style3`, `.special` y `.special-alt` deben ir en `wrapper.css`.
3. Identifiques qué reglas responsive deberían quedarse en `grid.css` y cuáles conviene mover a `responsive.css`.
4. Indiques si alguna regla debería permanecer en `sections/main.css`.
5. Evites duplicar reglas entre archivos.
6. Mantengas el diseño visual original de HTML5 UP Twenty.
7. Propongas un orden correcto de imports dentro de `globals.css`.
8. Indiques cómo verificar visualmente que el refactor no rompió la interfaz.

Formato de respuesta esperado:

* Resumen breve del criterio de separación.
* Tabla con columnas:

  * Selector o bloque CSS
  * Archivo recomendado
  * Motivo
  * Riesgo si se mueve incorrectamente
* Reglas que deberían ir en `grid.css`.
* Reglas que deberían ir en `wrapper.css`.
* Reglas que deberían ir en `responsive.css`.
* Reglas que deberían permanecer en `sections/main.css`, si aplica.
* Orden recomendado de imports en `globals.css`.
* Checklist de verificación visual.
* Sugerencias de commits pequeños para hacer el refactor de forma segura.
```

### A.5 Organización de estilos responsive

```text
Actúa como desarrollador frontend especializado en CSS responsive, migración de plantillas HTML a Astro y organización de estilos escalables.

Necesito agregar y organizar los estilos responsivos del `main.css` original de la plantilla HTML5 UP Twenty dentro de mi proyecto Astro.

Contexto del proyecto:

* Archivo original de referencia: `vendor/html5up-original/assets/css/main.css`
* Proyecto destino: `portafolio-personal-astro`
* Framework: Astro
* Tipo de estilos: CSS global modularizado
* Objetivo: conservar el comportamiento responsive original de HTML5 UP Twenty, pero organizado en archivos CSS mantenibles.
* No quiero pegar todo el `main.css` completo. Quiero trabajar específicamente con las reglas responsive, media queries y ajustes por breakpoint.

Estructura actual de estilos:

src/styles/
├─ globals.css
├─ theme.css
├─ common/
│  ├─ button.css
│  └─ icons.css
├─ layout/
│  ├─ grid.css
│  ├─ wrapper.css
│  └─ section-article.css
├─ sections/
│  ├─ header.css
│  ├─ banner.css
│  ├─ main.css
│  └─ footer.css
└─ responsive.css

Ya existen estilos base para:

* Botones en `common/button.css`
* Íconos en `common/icons.css`
* Grid y columnas en `layout/grid.css`
* Wrappers y variantes de sección en `layout/wrapper.css`
* Section/article headers en `layout/section-article.css`
* Header/nav en `sections/header.css`
* Banner en `sections/banner.css`
* Main en `sections/main.css`
* Footer en `sections/footer.css`

Necesito que agregues los estilos responsivos tomando en cuenta:

1. No duplicar reglas que ya están en `grid.css`, `wrapper.css`, `header.css`, `banner.css`, `main.css` o `footer.css`.
2. Mantener los nombres de clases originales de HTML5 UP, como:

   * `.row`
   * `.col-*`
   * `.col-12-narrower`
   * `.imp-narrower`
   * `.wrapper`
   * `.style1`
   * `.style2`
   * `.special`
   * `.special-alt`
   * `#header`
   * `#banner`
   * `#main`
   * `#footer`
   * `#nav`
   * `#navButton`
   * `#navPanel`
3. Mantener fidelidad visual con la plantilla original.
4. Adaptar las rutas de assets para Astro cuando sea necesario:

   * Correcto: `/assets/images/...`
   * Incorrecto: `/public/assets/images/...`
5. Separar correctamente qué reglas responsive deben ir en:

   * `responsive.css`
   * `layout/grid.css`
   * `layout/wrapper.css`
   * `sections/header.css`
   * `sections/banner.css`
   * `sections/main.css`
   * `sections/footer.css`

Criterio de organización:

* Las media queries que modifican únicamente columnas, filas, gutters, orden visual o `.col-*` deben ir en `layout/grid.css`.
* Las media queries que modifican `.wrapper`, `.container`, `.style1`, `.style2`, `.style3`, `.special` o `.special-alt` deben ir en `layout/wrapper.css`.
* Las media queries que modifican `#header`, `#nav`, `#navButton` o `#navPanel` deben ir en `sections/header.css` o, si son muy generales, en `responsive.css`.
* Las media queries que modifican `#banner` deben ir en `sections/banner.css`.
* Las media queries que modifican `#main` deben ir en `sections/main.css`.
* Las media queries que modifican `#footer` deben ir en `sections/footer.css`.
* Las reglas responsive que afectan múltiples secciones al mismo tiempo pueden ir en `responsive.css`.

Breakpoints de referencia de HTML5 UP Twenty:

* Wide
* Normal
* Narrow
* Narrower
* Mobile

Necesito que:

1. Identifiques qué bloques responsive del CSS original corresponden a cada archivo.
2. Propongas una versión organizada de los estilos responsivos.
3. Evites duplicar reglas ya existentes.
4. Mantengas el comportamiento visual original.
5. Indiques si alguna regla depende de scripts originales como `jquery.dropotron`, `browser`, `breakpoints`, `util` o `main.js`.
6. Indiques si alguna regla depende de elementos generados dinámicamente como `#navButton` o `#navPanel`.
7. Propongas el orden correcto de imports dentro de `globals.css`.
8. Indiques cómo verificar visualmente que el responsive no se rompió.

Formato de respuesta esperado:

* Resumen breve del criterio de separación.
* Tabla con columnas:

  * Breakpoint o media query
  * Selectores afectados
  * Archivo recomendado
  * Motivo
  * Riesgo si se coloca en otro archivo
* Bloques CSS sugeridos para `responsive.css`, si aplica.
* Bloques CSS sugeridos para `grid.css`, si aplica.
* Bloques CSS sugeridos para `wrapper.css`, si aplica.
* Bloques CSS sugeridos para archivos de secciones, si aplica.
* Orden recomendado de imports en `globals.css`.
* Checklist de pruebas responsive:

  * Desktop
  * Tablet
  * Mobile
  * Menú desplegable
  * NavPanel móvil
  * Banner
  * Grid de columnas
  * Botones
  * Íconos destacados
* Sugerencias de commits pequeños para implementar el responsive de forma segura.

No refactorices botones, íconos, header, banner, footer ni grid base en esta etapa, a menos que sea necesario para integrar correctamente las media queries. El objetivo principal es agregar y organizar los estilos responsivos.
```

### A.6 Refactor de estilos de formulario para Astro

```text
Actúa como un desarrollador frontend experto en Astro, HTML y CSS modular.

Estoy migrando una plantilla HTML/CSS tradicional a un proyecto Astro. Necesito refactorizar los estilos relacionados con el formulario para integrarlos correctamente en Astro sin romper el diseño original.

Objetivo:
Pasar los estilos del formulario desde el CSS original hacia una estructura más organizada dentro del proyecto Astro.

Contexto del proyecto:

* Estoy usando Astro.
* La plantilla original viene de HTML5UP.
* Quiero conservar la apariencia visual original.
* El formulario estará dentro de un componente o página Astro.
* Los estilos deben organizarse de forma clara, reutilizable y mantenible.
* Ya tengo una estructura con componentes como Header, Nav, Footer y páginas Astro.

Tareas que debes realizar:

1. Identificar todos los estilos CSS relacionados con formularios, inputs, textarea, selects, labels, botones y estados como focus, hover o disabled.
2. Separar únicamente los estilos necesarios para el formulario.
3. Adaptar esos estilos para que funcionen correctamente en Astro.
4. Evitar duplicar estilos globales innecesarios.
5. Mantener compatibilidad con las clases originales de la plantilla si todavía son necesarias.
6. Proponer una ubicación adecuada para los estilos, por ejemplo:

   * `src/styles/forms.css`
   * estilos globales dentro de `global.css`
   * o estilos scoped dentro del componente `.astro`, según convenga.
7. Explicar qué estilos deben quedarse globales y cuáles pueden estar dentro del componente.
8. Si hay selectores demasiado generales, refactorizarlos para que no afecten otras partes del sitio.
9. Mantener el diseño responsive del formulario.
10. Entregar el código final adaptado para Astro.

Archivos que te voy a proporcionar:

* El componente o página `.astro` donde está el formulario.
* El CSS original de la plantilla.
* La estructura actual de estilos del proyecto.

Quiero que respondas con:

* Una explicación breve de qué estilos detectaste.
* Una propuesta de organización.
* El CSS refactorizado.
* El ejemplo de cómo importarlo o aplicarlo en Astro.
* Recomendaciones para evitar conflictos con otros estilos del sitio.

No cambies la apariencia original del formulario salvo que sea necesario para mejorar la organización del código.
```

### A.7 Modularización de la página Left Sidebar

```text
Actúa como un desarrollador frontend experto en Astro, HTML semántico y arquitectura modular de componentes.

Estoy migrando la página `left-sidebar.html` de una plantilla HTML5UP a un proyecto Astro y necesito refactorizarla de manera modular, reutilizable y fiel a la estructura visual original.

Objetivo:
Reconstruir la página Left Sidebar en Astro utilizando una arquitectura desacoplada basada en componentes, manteniendo la apariencia y la organización del template original.

Contexto del proyecto:

* El proyecto está construido con Astro.
* La plantilla original proviene de HTML5UP.
* Ya existe una arquitectura con `layouts`, `components`, `sections`, `pages`, `data` y `styles`.
* Ya existe una fuente de datos estructurada para la página left sidebar.
* Quiero evitar una página monolítica con mucho HTML repetido.
* Quiero que el resultado sea mantenible y reutilizable para futuras páginas similares, como `right-sidebar`.

Tareas que debes realizar:

1. Analizar la estructura de `left-sidebar.html` original.
2. Identificar los bloques visuales y estructurales que conviene separar en componentes.
3. Proponer una estructura modular clara para la página.
4. Crear componentes reutilizables cuando tenga sentido, por ejemplo para tarjetas del sidebar o contenido principal.
5. Mantener las clases originales del template cuando sean necesarias para preservar los estilos existentes.
6. Usar la data estructurada ya creada para poblar la página.
7. Dejar `src/pages/left-sidebar.astro` como ensamblador de alto nivel y no como una página con HTML duplicado.
8. Mantener fidelidad con el layout original:

   * header especial,
   * columna de sidebar,
   * columna de contenido,
   * sección inferior de tarjetas relacionadas.
9. Reutilizar componentes comunes del proyecto cuando sea conveniente.
10. Validar que la implementación compile correctamente en Astro.

Quiero que respondas con:

* una propuesta breve de estructura modular,
* la lista de componentes a crear,
* el código necesario para implementar la página,
* y una recomendación de commits secuenciales para registrar el trabajo.

No cambies la apariencia original de la página salvo que sea necesario para adaptar correctamente la estructura a Astro.
```
