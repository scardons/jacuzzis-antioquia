import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Home from './App.tsx'
import ProductDetail from './pages/ProductDetail.tsx'

function CatalogoPlaceholder() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '20px', padding: '24px', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', color: '#0077b6' }}>Catálogo no disponible</h1>
      <p style={{ color: '#666', fontSize: '1.1rem' }}>El catálogo digital aún no está disponible. Pronto lo tendremos listo.</p>
      <Link to="/" style={{ display: 'inline-block', padding: '12px 36px', borderRadius: '50px', background: '#0077b6', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Volver al inicio</Link>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/catalogo.pdf" element={<CatalogoPlaceholder />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
