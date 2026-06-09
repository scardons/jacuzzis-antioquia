import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import './ProductDetail.css'

const extrasConfig = [
  { key: 'calentador', label: 'Calentador', price: 2300000 },
  { key: 'madera', label: 'Madera teca', price: 2600000 },
  { key: 'electrica', label: 'Instalación eléctrica y tubería', price: 2000000 },
  { key: 'desague', label: 'Instalación de desagüe', price: 1000000 },
]

function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const [extras, setExtras] = useState<Record<string, boolean>>(
    Object.fromEntries(extrasConfig.map((e) => [e.key, true]))
  )

  if (!product) {
    return (
      <div className="not-found">
        <h2>Producto no encontrado</h2>
        <Link to="/" className="btn-primary">Volver al inicio</Link>
      </div>
    )
  }

  const images = product.colors
    ? product.colors[selectedColor].images
    : product.images

  const currentColor = product.colors
    ? product.colors[selectedColor].name
    : product.color

  const handleColorChange = (i: number) => {
    setSelectedColor(i)
    setSelectedImage(0)
  }

  const toggleExtra = (key: string) => {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const extrasTotal = extrasConfig.reduce(
    (sum, e) => (extras[e.key] ? sum + e.price : sum),
    0
  )
  const basePrice = product.price
  const totalPrice = basePrice + extrasTotal
  const installedFrom = basePrice + extrasConfig.reduce((s, e) => s + e.price, 0)

  const formatPrice = (n: number) =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return (
    <div className="detail-page">
      <div className="detail-header">
        <Link to="/" className="back-link">&larr; Volver</Link>
      </div>

      <div className="detail-layout">
        {/* ── Images ── */}
        <div className="detail-images">
          <div className="main-image">
            <img src={images[selectedImage]} alt={`${product.name} ${currentColor}`} />
          </div>
          <div className="thumbnails">
            {images.map((img, i) => (
              <button
                key={i}
                className={`thumb ${i === selectedImage ? 'active' : ''}`}
                onClick={() => setSelectedImage(i)}
              >
                <img src={img} alt={`${product.name} ${currentColor} ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* ── Info ── */}
        <div className="detail-info">
          <h1 className="product-name">{product.name}</h1>

          <button className="favorite-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            Agregar a favoritos
          </button>

          <div className="price-section">
            <div className="price-header">
              <span className="product-short">Jacuzzy</span>
              <span className="installed-price">Instalado desde ${formatPrice(installedFrom)}</span>
            </div>
            {product.oldPrice && (
              <span className="old-price">${formatPrice(product.oldPrice)}</span>
            )}
            <span className="price">${formatPrice(totalPrice)}</span>
          </div>

          <div className="extras-section">
            <span className="extras-label">Incluye:</span>
            {extrasConfig.map((extra) => (
              <button
                key={extra.key}
                className={`extra-toggle ${extras[extra.key] ? 'active' : ''}`}
                onClick={() => toggleExtra(extra.key)}
              >
                <span className="extra-check">
                  {extras[extra.key] ? '✓' : '+'}
                </span>
                <span className="extra-label">{extra.label}</span>
                <span className="extra-price">+${formatPrice(extra.price)}</span>
              </button>
            ))}
            <div className="extra-incluye">
              Incluye transporte, coordinación del proyecto, pruebas de funcionamiento y garantía de instalación.
            </div>
          </div>

          <a
            href="https://wa.me/573246811651"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whatsapp-quote"
          >
            Realizar cotización completa
          </a>

          {product.colors && (
            <div className="color-section">
              <span className="color-label">Color: <strong>{currentColor}</strong></span>
              <div className="color-options">
                {product.colors.map((c, i) => (
                  <button
                    key={c.name}
                    className={`color-option-btn ${i === selectedColor ? 'active' : ''}`}
                    onClick={() => handleColorChange(i)}
                    title={c.name}
                  >
                    <img src={c.images[0]} alt={c.name} className="color-thumb" />
                    <span className="color-name">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="specs-section">
            <h3>Características del producto</h3>
            {product.specGroups.map((group) => (
              <div key={group.label} className="spec-group">
                <h4>{group.label}</h4>
                <table className="spec-table">
                  <tbody>
                    {group.specs.map((spec) => (
                      <tr key={spec.name}>
                        <td className="spec-name">{spec.name}</td>
                        <td className="spec-value">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <Link to="/" className="btn-primary back-bottom">&larr; Volver a modelos</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
