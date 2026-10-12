import './style.css'
// Nombre visible de cada categoría
const categorias = {
  dulce: 'Dulce',
  grafico: 'Gráfico',
  labios: 'Labios',
  vampiro: 'Vampiro',
}

// Un objeto por look
const looks = [
  {
    nombre: 'Cielo estrellado',
    categoria: 'grafico',
    imagen: '/looks/cielo-estrellado.jpg',
    dificultad: 'Media',
    colores: [
      { nombre: 'Celeste', hex: '#8ec5f2' },
      { nombre: 'Blanco', hex: '#ffffff' },
      { nombre: 'Negro', hex: '#1c1c1c' },
    ],
    productos: ['Sombra celeste mate', 'Sombra o lápiz blanco', 'Delineador líquido negro', 'Pestañas postizas'],
    pasos: [
      'Aplica la sombra celeste en todo el párpado móvil y difumina hacia arriba',
      'Ilumina el lagrimal y la esquina interna con blanco',
      'Traza un delineado gráfico largo que siga hacia la sien',
      'Dibuja una estrella sobre el delineado y otra pequeña en la mejilla',
      'Coloca las pestañas y difumina un poco de celeste en la línea inferior',
    ],
  },
  {
    nombre: 'Lila de hadas',
    categoria: 'dulce',
    imagen: '/looks/lila-de-hadas.jpg',
    dificultad: 'Fácil',
    colores: [
      { nombre: 'Lila', hex: '#c7b3e6' },
      { nombre: 'Plateado', hex: '#d9dbe3' },
      { nombre: 'Blanco', hex: '#ffffff' },
    ],
    productos: ['Sombra lila', 'Glitter plateado', 'Delineador blanco', 'Máscara de pestañas'],
    pasos: [
      'Difumina la sombra lila en el párpado y un poco en la línea inferior',
      'Coloca glitter plateado en el centro del párpado con el dedo',
      'Agrega un punto de glitter en el lagrimal',
      'Dibuja destellos de cuatro puntas en blanco sobre la cuenca',
    ],
  },
  {
    nombre: 'Mariposa rosa',
    categoria: 'grafico',
    imagen: '/looks/mariposa-rosa.jpg',
    dificultad: 'Difícil',
    colores: [
      { nombre: 'Rosita', hex: '#f6b6cf' },
      { nombre: 'Lila', hex: '#c7b3e6' },
      { nombre: 'Café', hex: '#573c27' },
    ],
    productos: ['Sombra rosa', 'Sombra lila brillante', 'Delineador café', 'Puntos blancos (lápiz o gel)'],
    pasos: [
      'Aplica rosa en la cuenca y lila brillante en el párpado móvil',
      'Con delineador café, dibuja el contorno de un ala en la esquina externa',
      'Repite la forma de ala en la línea inferior con picos hacia abajo',
      'Rellena las alas con lila y agrega puntitos blancos',
    ],
  },
  {
    nombre: 'Mariposa menta',
    categoria: 'grafico',
    imagen: '/looks/mariposa-menta.jpg',
    dificultad: 'Difícil',
    colores: [
      { nombre: 'Menta', hex: '#a8dcc8' },
      { nombre: 'Lila', hex: '#c7b3e6' },
      { nombre: 'Negro', hex: '#1c1c1c' },
    ],
    productos: ['Sombra menta brillante', 'Sombra lila', 'Delineador líquido negro', 'Lápiz blanco'],
    pasos: [
      'Pon la sombra menta en el centro del párpado',
      'Difumina lila en las esquinas y en la línea inferior',
      'Dibuja con negro un ala grande arriba y picos en la línea inferior',
      'Termina con puntos blancos dentro del ala',
    ],
  },
  {
    nombre: 'Corazones coral',
    categoria: 'dulce',
    imagen: '/looks/corazones-coral.jpg',
    dificultad: 'Fácil',
    colores: [
      { nombre: 'Coral', hex: '#f08c78' },
      { nombre: 'Durazno', hex: '#f6c3a4' },
      { nombre: 'Rojo', hex: '#d62f3a' },
    ],
    productos: ['Sombra durazno', 'Sombra coral', 'Glitter dorado', 'Delineador rojo'],
    pasos: [
      'Aplica durazno en todo el párpado como base',
      'Intensifica con coral en la esquina externa y la línea inferior',
      'Agrega glitter en el centro del párpado',
      'Dibuja dos corazones rojos: uno junto a la ceja y otro bajo el ojo',
    ],
  },
  {
    nombre: 'Jardín pastel',
    categoria: 'dulce',
    imagen: '/looks/jardin-pastel.jpg',
    dificultad: 'Media',
    colores: [
      { nombre: 'Amarillo', hex: '#f3e08a' },
      { nombre: 'Verde pastel', hex: '#c9dfa0' },
      { nombre: 'Rosita', hex: '#f6b6cf' },
    ],
    productos: ['Sombra amarillo pastel', 'Sombra verde pastel', 'Sombra rosa', 'Pintura facial blanca'],
    pasos: [
      'Difumina rosa en la cuenca y amarillo en el centro del párpado',
      'Agrega verde pastel en la línea de las pestañas',
      'Traza un delineado fino con la punta hacia afuera',
      'Pinta florecitas blancas con centro amarillo junto al ojo',
    ],
  },
  {
    nombre: 'Rosa vino',
    categoria: 'dulce',
    imagen: '/looks/rosa-vino.jpg',
    dificultad: 'Media',
    colores: [
      { nombre: 'Rosa metálico', hex: '#d97a8c' },
      { nombre: 'Vino', hex: '#8b1e3f' },
      { nombre: 'Negro', hex: '#1c1c1c' },
    ],
    productos: ['Sombra rosa metálica', 'Sombra vino', 'Delineador líquido negro'],
    pasos: [
      'Aplica la sombra rosa metálica en todo el párpado',
      'Oscurece la esquina externa con vino',
      'Lleva un poco de rosa a la línea inferior',
      'Haz un delineado alargado y afilado hacia la sien',
    ],
  },
  {
    nombre: 'Estrella nocturna',
    categoria: 'grafico',
    imagen: '/looks/estrella-nocturna.jpg',
    dificultad: 'Difícil',
    colores: [
      { nombre: 'Negro', hex: '#1c1c1c' },
      { nombre: 'Plateado', hex: '#d9dbe3' },
      { nombre: 'Gris', hex: '#8a8a93' },
    ],
    productos: ['Sombra negra', 'Sombra plateada', 'Delineador en gel negro', 'Cristalitos o glitter'],
    pasos: [
      'Haz un smoky suave con gris en todo el párpado',
      'Dibuja la forma de estrella en la esquina externa y rellénala de negro',
      'Ilumina el centro del párpado con plateado',
      'Pega cristalitos bajo el ojo como si fueran lágrimas',
    ],
  },
  {
    nombre: 'Labios degradados',
    categoria: 'labios',
    imagen: '/looks/labios-degradados.jpg',
    dificultad: 'Fácil',
    colores: [
      { nombre: 'Rosita', hex: '#f6b6cf' },
      { nombre: 'Frambuesa', hex: '#d0507a' },
    ],
    productos: ['Corrector o base', 'Tinta de labios frambuesa', 'Gloss transparente'],
    pasos: [
      'Neutraliza el borde de los labios con un poco de corrector',
      'Aplica la tinta solo en el centro de los labios',
      'Difumina hacia afuera con el dedo para el efecto degradado',
      'Termina con gloss en el centro.',
    ],
  },
  {
    nombre: 'Labios vampiro',
    categoria: 'vampiro',
    imagen: '/looks/labios-vampiro.jpg',
    dificultad: 'Media',
    colores: [
      { nombre: 'Rojo sangre', hex: '#7a0f1c' },
      { nombre: 'Negro', hex: '#1c1c1c' },
    ],
    productos: ['Lápiz de labios negro', 'Labial rojo oscuro', 'Gloss transparente'],
    pasos: [
      'Delinea el contorno de los labios con lápiz negro',
      'Rellena el centro con el labial rojo oscuro',
      'Difumina el negro hacia adentro para unir los dos colores',
      'Agrega gloss para el efecto húmedo',
    ],
  },
  {
    nombre: 'Mirada carmesí',
    categoria: 'vampiro',
    imagen: '/looks/mirada-carmesi.jpg',
    dificultad: 'Media',
    colores: [
      { nombre: 'Rojo', hex: '#b3202f' },
      { nombre: 'Negro', hex: '#1c1c1c' },
      { nombre: 'Champaña', hex: '#ecd8c4' },
    ],
    productos: ['Lápiz rojo para ojos', 'Delineador líquido negro', 'Sombra champaña', 'Pestañas postizas'],
    pasos: [
      'Aplica sombra champaña en todo el párpado',
      'Haz un delineado negro con una cola larga',
      'Delinea la línea inferior con lápiz rojo y difumina un poco',
      'Coloca pestañas postizas para más drama',
    ],
  },
  {
    nombre: 'Cereza glossy',
    categoria: 'labios',
    imagen: '/looks/cereza-glossy.jpg',
    dificultad: 'Fácil',
    colores: [
      { nombre: 'Cereza', hex: '#b5263a' },
      { nombre: 'Rojo', hex: '#d62f3a' },
    ],
    productos: ['Lápiz de labios rojo', 'Labial cereza', 'Gloss transparente'],
    pasos: [
      'Delinea un poco por fuera del borde natural para dar volumen',
      'Rellena con el labial cereza',
      'Aplica bastante gloss en el centro del labio inferior',
    ],
  },
  {
    nombre: 'Alas de murciélago',
    categoria: 'vampiro',
    imagen: '/looks/alas-de-murcielago.jpg',
    dificultad: 'Difícil',
    colores: [
      { nombre: 'Vino', hex: '#8b1e3f' },
      { nombre: 'Rosa metálico', hex: '#d97a8c' },
      { nombre: 'Negro', hex: '#1c1c1c' },
    ],
    productos: ['Sombra vino metálica', 'Sombra rosa', 'Delineador líquido negro', 'Lentes de contacto (opcional)'],
    pasos: [
      'Aplica la sombra vino metálica en todo el párpado',
      'Ilumina el lagrimal con un rosa brillante',
      'Dibuja un ala de murciélago en la línea inferior con picos hacia abajo',
      'Rellena el ala con vino y agrega un murcielaguito sobre la esquina externa',
    ],
  },
]

const galeria = document.querySelector('#galeria')
const contador = document.querySelector('#contador')
const botones = document.querySelectorAll('.filtro')

// Funciones
function badgeColor(color) {
  return `
    <span class="badge-color">
      <span class="badge-color__punto" style="background:${color.hex}"></span>
      ${color.nombre}
    </span>
  `
}

function tarjeta(look) {
  return `
    <article class="tarjeta">
      <img class="tarjeta__imagen" src="${look.imagen}" alt="Look ${look.nombre}" loading="lazy" />
      <div class="tarjeta__cuerpo">
        <div class="tarjeta__etiquetas">
          <span class="categoria categoria--${look.categoria}">${categorias[look.categoria]}</span>
          <span class="dificultad">${look.dificultad}</span>
        </div>

        <h2 class="tarjeta__titulo">${look.nombre}</h2>

        <div class="tarjeta__colores">
          ${look.colores.map(badgeColor).join('')}
        </div>

        <h3 class="tarjeta__subtitulo">Productos</h3>
        <ul class="tarjeta__productos">
          ${look.productos.map((p) => `<li>${p}</li>`).join('')}
        </ul>

        <details class="tarjeta__pasos">
          <summary>Ver paso a paso</summary>
          <ol>
            ${look.pasos.map((p) => `<li>${p}</li>`).join('')}
          </ol>
        </details>
      </div>
    </article>
  `
}

function mostrar(lista) {
  galeria.innerHTML = lista.map(tarjeta).join('')
  contador.textContent = `${lista.length} ${lista.length === 1 ? 'look' : 'looks'}`
}

// Filtros 

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const categoria = boton.dataset.categoria

    // Marca el boton activo
    botones.forEach((b) => b.classList.remove('activo'))
    boton.classList.add('activo')

    if (categoria === 'todos') {
      mostrar(looks)
    } else {
      mostrar(looks.filter((look) => look.categoria === categoria))
    }
  })
})

mostrar(looks)