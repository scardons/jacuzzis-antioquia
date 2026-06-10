import { Link } from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <section id="inicio" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Disfruta momentos inolvidables con tu familia</h1>
          <p>
            Relájate, comparte y crea recuerdos únicos desde la comodidad de tu hogar o finca.
          </p>
          <a href="#modelos" className="btn-primary">Ver productos</a>
        </div>
      </section>

      <section id="modelos" className="section modelos scroll-mt-64">
        <h2 className="section-title">Nuestros Productos</h2>
        <p className="section-subtitle">GENERAMOS EXPERIENCIAS A TRAVÉS DEL AGUA</p>

        <div className="grid">
          <div className="card">
            <span className="card-badge">MÁS VENDIDO</span>
            <div className="card-img card-img--classic" />
            <div className="card-body">
              <span className="card-capacity">4 Personas</span>
              <h3>Clásico</h3>
              <p>Jacuzzi de empotrar con diseño tradicional, 8 jets de hidromasaje y panel de control básico.</p>
              <Link to="/producto/clasico" className="card-btn">Ver más</Link>
            </div>
          </div>
          <div className="card">
            <span className="card-badge">NUEVO</span>
            <div className="card-img card-img--premium" />
            <div className="card-body">
              <span className="card-capacity">6 Personas</span>
              <h3>Hidromasaje Premium</h3>
              <p>Hidromasaje cuadrado en fibra de vidrio, ideal para exterior. 6 personas, 1 luz LED.</p>
              <Link to="/producto/premium" className="card-btn">Ver más</Link>
            </div>
          </div>
          <div className="card">
            <span className="card-badge">PREMIUM</span>
            <div className="card-img card-img--infinity" />
            <div className="card-body">
              <span className="card-capacity">8 Personas</span>
              <h3>Infinity</h3>
              <p>Efecto infinity edge, 50 jets, sonido Bluetooth y cubierta térmica. La experiencia definitiva.</p>
              <Link to="/producto/infinity" className="card-btn">Ver más</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="caracteristicas" className="section caracteristicas">
        <h2 className="section-title">Características</h2>
        <p className="section-subtitle">Tecnología y confort en cada detalle</p>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">💧</div>
            <h3>Hidromasaje</h3>
            <p>Jets ajustables de alta presión para un masaje personalizado.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔊</div>
            <h3>Audio integrado</h3>
            <p>Sistema de sonido Bluetooth resistente al agua.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">✨</div>
            <h3>Cromoterapia</h3>
            <p>Iluminación LED cromática para una experiencia sensorial única.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔋</div>
            <h3>Eficiencia energética</h3>
            <p>Aislamiento térmico de última generación que reduce el consumo.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🛡️</div>
            <h3>Garantía</h3>
            <p>Todos nuestros modelos cuentan con 5 años de garantía.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📦</div>
            <h3>Instalación</h3>
            <p>Coordinación del proyecto, pruebas de funcionamiento y garantía de instalación.</p>
          </div>
        </div>
      </section>

      <section id="pueblos" className="section pueblos">
        <h2 className="section-title">Hacemos instalaciones en los pueblos más bonitos de Antioquia</h2>
        <p className="section-subtitle">Llevamos confort y bienestar a tu finca</p>
        <div className="grid pueblos-grid">
          <div className="card pueblo-card">
            <div className="card-img card-img--san-carlos" />
            <div className="card-body">
              <h3>San Carlos</h3>
              <p>Antioquia</p>
            </div>
          </div>
          <div className="card pueblo-card">
            <div className="card-img card-img--san-rafael" />
            <div className="card-body">
              <h3>San Rafael</h3>
              <p>Antioquia</p>
            </div>
          </div>
          <div className="card pueblo-card">
            <div className="card-img card-img--guatape" />
            <div className="card-body">
              <h3>Guatapé</h3>
              <p>Antioquia</p>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/573246811651"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <h3>Jacuzzi Antioquia</h3>
            <p>Tu bienestar es nuestra prioridad. Transformamos tu espacio en un oasis de relajación.</p>
          </div>
          <div>
            <h4>Enlaces</h4>
            <a href="#inicio">Inicio</a>
            <a href="#modelos">Nuestros Productos</a>
            <a href="/catalogo.pdf" target="_blank" rel="noopener noreferrer">Catálogo de Productos</a>
            <a href="https://wa.me/573246811651" target="_blank" rel="noopener noreferrer">Contacto</a>
          </div>
          <div>
            <h4>Contacto</h4>
            <p>santiagocardona97@gmail.com</p>
            <p>+57 324 681 1651</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jacuzzi Antioquia. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
