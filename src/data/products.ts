export interface SpecGroup {
  label: string
  specs: { name: string; value: string }[]
}

export interface ProductColor {
  name: string
  swatch: string
  images: string[]
}

export interface Product {
  id: string
  name: string
  tagline: string
  price: number
  oldPrice?: number
  brand: string
  model: string
  images: string[]
  colors?: ProductColor[]
  capacity: string
  persons: number
  voltage: string
  material: string
  shape: string
  dimensions: { name: string; value: string }[]
  lights: number
  jets: number
  jetTypes: string[]
  color: string
  includesPump: boolean
  hasAirRegulator: boolean
  hasPressureRegulator: boolean
  isInflatable: boolean
  features: string[]
  specGroups: SpecGroup[]
}

const baseSpecs = {
  includesPump: true,
  hasAirRegulator: true,
  hasPressureRegulator: false,
  isInflatable: false,
  brand: '322_8153545',
}

export const products: Product[] = [
  {
    id: 'clasico',
    name: 'Jacuzzi Para 4 Personas De Empotrar',
    tagline: 'Diseño tradicional con 4 asientos, 20 jets de hidromasaje y sistema de calefacción eficiente.',
    price: 6700000,
    oldPrice: 7300000,
    ...baseSpecs,
    model: '322-815-3545',
    images: [
      '/jacuzzi-clasico-4-personas-gris-perlado.png',
      '/jacuzzi-clasico-4-personas.jpg',
    ],
    colors: [
      { name: 'Gris Perlado', swatch: '#c0c0c0', images: ['/jacuzzi-clasico-4-personas-gris-perlado.png'] },
      { name: 'Blanco', swatch: '#ffffff', images: ['/jacuzzi-clasico-4-personas.jpg'] },
    ],
    capacity: '350 L',
    persons: 4,
    voltage: '110V',
    material: 'Fibra de vidrio',
    shape: 'Rectangular',
    dimensions: [
      { name: 'Largo total', value: '2 m' },
      { name: 'Ancho total', value: '1,5 m' },
    ],
    lights: 1,
    jets: 8,
    jetTypes: ['Hidro'],
    color: 'Gris Perlado',
    features: [
      'Filtro de agua incluido',
      'Panel de control básico',
      'No incluye calentador',
    ],
    specGroups: [
      {
        label: 'Características principales',
        specs: [
          { name: 'Marca', value: '322_8153545' },
          { name: 'Modelo', value: '322-815-3545' },
          { name: 'Color', value: 'Gris Perlado' },
          { name: 'Voltaje', value: '110V' },
          { name: 'Capacidad de personas', value: '4' },
          { name: 'Capacidad en volumen', value: '350 L' },
        ],
      },
      {
        label: 'Dimensiones',
        specs: [
          { name: 'Largo total', value: '2 m' },
          { name: 'Ancho total', value: '1,5 m' },
        ],
      },
      {
        label: 'Otros',
        specs: [
          { name: 'Material', value: 'Fibra de vidrio' },
          { name: 'Forma', value: 'Rectangular' },
          { name: 'Tipo de alimentación', value: 'Eléctrica' },
          { name: 'Tipos de jets incluidos', value: 'Hidro' },
          { name: 'Cantidad de jets', value: '8' },
          { name: 'Es inflable', value: 'No' },
          { name: 'Incluye bomba', value: 'Sí' },
          { name: 'Con regulador de aire', value: 'Sí' },
          { name: 'Con regulador de presión', value: 'No' },
          { name: 'Con luces', value: 'Sí' },
          { name: 'Cantidad de luces', value: '1' },
          { name: 'Incluye calentador', value: 'No' },
        ],
      },
    ],
  },
  {
    id: 'premium',
    name: 'Hidromasaje Para 6 Personas De Empotrar',
    tagline: 'Hidromasaje para 6 personas, diseño cuadrado, fibra de vidrio y 1 luz LED.',
    price: 8700000,
    ...baseSpecs,
    model: '322-815_35_45',
    images: [
      '/jacuzzi-para-6-personas.jpg',
      '/jacuzzi-para-6-personas-teca.jpg',
    ],
    colors: [
      { name: 'Blanco', swatch: '#ffffff', images: ['/jacuzzi-para-6-personas.jpg'] },
      { name: 'Teca', swatch: '#8b5e3c', images: ['/jacuzzi-para-6-personas-teca.jpg'] },
    ],
    capacity: '—',
    persons: 6,
    voltage: '110V',
    material: 'Fibra de vidrio',
    shape: 'Cuadrada',
    dimensions: [
      { name: 'Largo total', value: '2 m' },
      { name: 'Ancho total', value: '2 m' },
    ],
    lights: 1,
    jets: 8,
    jetTypes: ['Hidro'],
    color: 'Blanco',
    features: [
      'Ambientes recomendados: exterior',
      'Hecho en fibra de vidrio',
      'Forma cuadrada',
    ],
    specGroups: [
      {
        label: 'Características principales',
        specs: [
          { name: 'Marca', value: '322_815-35-45' },
          { name: 'Modelo', value: '322-815_35_45' },
          { name: 'Color', value: 'Blanco' },
          { name: 'Voltaje', value: '110V' },
          { name: 'Capacidad de personas', value: '6' },
        ],
      },
      {
        label: 'Dimensiones',
        specs: [
          { name: 'Largo total', value: '2 m' },
          { name: 'Ancho total', value: '2 m' },
        ],
      },
      {
        label: 'Otros',
        specs: [
          { name: 'Material', value: 'Fibra de vidrio' },
          { name: 'Forma', value: 'Cuadrada' },
          { name: 'Tipo de alimentación', value: 'Eléctrica' },
          { name: 'Ambientes recomendados', value: 'Exterior' },
          { name: 'Tipos de jets incluidos', value: 'Hidro' },
          { name: 'Es inflable', value: 'No' },
          { name: 'Incluye bomba', value: 'Sí' },
          { name: 'Con regulador de aire', value: 'Sí' },
          { name: 'Con regulador de presión', value: 'No' },
          { name: 'Con luces', value: 'Sí' },
          { name: 'Cantidad de luces', value: '1' },
          { name: 'Incluye calentador', value: 'No' },
        ],
      },
    ],
  },
  {
    id: 'infinity',
    name: 'Jacuzzi Infinity 8 Personas',
    tagline: '8 asientos, efecto infinity edge, 50 jets, sistema de sonido Bluetooth y cubierta térmica.',
    price: 10700000,
    ...baseSpecs,
    model: '322-815-3547',
    images: [
      '/jacuzzi-para-8-personas.png',
      '/jacuzzi-para-8-personas-2.png',
    ],
    capacity: '700 L',
    persons: 8,
    voltage: '220V',
    material: 'Fibra de vidrio',
    shape: 'Rectangular',
    dimensions: [
      { name: 'Largo total', value: '2,8 m' },
      { name: 'Ancho total', value: '2 m' },
    ],
    lights: 12,
    jets: 50,
    jetTypes: ['Hidro', 'Aire', 'Masaje'],
    color: 'Blanco',
    features: [
      'Efecto infinity edge',
      'Sistema de sonido Bluetooth',
      'Cubierta térmica incluida',
      'Panel táctil inteligente',
    ],
    specGroups: [
      {
        label: 'Características principales',
        specs: [
          { name: 'Marca', value: '322_8153545' },
          { name: 'Modelo', value: '322-815-3547' },
          { name: 'Color', value: 'Blanco' },
          { name: 'Voltaje', value: '220V' },
          { name: 'Capacidad de personas', value: '8' },
          { name: 'Capacidad en volumen', value: '700 L' },
        ],
      },
      {
        label: 'Dimensiones',
        specs: [
          { name: 'Largo total', value: '2,8 m' },
          { name: 'Ancho total', value: '2 m' },
        ],
      },
      {
        label: 'Otros',
        specs: [
          { name: 'Material', value: 'Fibra de vidrio' },
          { name: 'Forma', value: 'Rectangular' },
          { name: 'Tipo de alimentación', value: 'Eléctrica' },
          { name: 'Tipos de jets incluidos', value: 'Hidro, Aire, Masaje' },
          { name: 'Cantidad de jets', value: '50' },
          { name: 'Es inflable', value: 'No' },
          { name: 'Incluye bomba', value: 'Sí' },
          { name: 'Con regulador de aire', value: 'Sí' },
          { name: 'Con regulador de presión', value: 'No' },
          { name: 'Con luces', value: 'Sí' },
          { name: 'Cantidad de luces', value: '12' },
        ],
      },
    ],
  },
]
