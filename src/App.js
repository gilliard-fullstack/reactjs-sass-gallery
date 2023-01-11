import React from 'react'

// Styles
import './css/styles.css'

function App() {

  return (
    <>
      {/* Header */}
      <header className="header">
        <a className="header-brand" href="#">Galeria</a>
        {/* main nav */}
        <nav className="header-navbar">
          <ul>
            {/* Link 1 */}
            <li>
              <a className="active" href="#">Home</a>
            </li>
            {/* Link 2 */}
            <li>
              <a href="#">Fotos</a>
            </li>
            {/* Link 3 */}
            <li>
              <a href="#">Serviços</a>
            </li>
            {/* Link 4 */}
            <li>
              <a href="#">Sobre</a>
            </li>
            {/* Link 5 */}
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
        {/* social media nav */}
        <div className="header-social-media">
          <ul>
            {/* Facebook */}
            <li>
              <a href="#">
                <i class="fab fa-facebook" />
              </a>
            </li>
            {/* Twitter */}
            <li>
              <a href="#">
                <i class="fab fa-twitter" />
              </a>
            </li>
            {/* Instagram */}
            <li>
              <a href="#">
                <i class="fab fa-instagram" />
              </a>
            </li>
            {/* Youtube */}
            <li>
              <a href="#">
                <i class="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </header>
      {/* main container */}
      <main>
        {/* gallery div */}
        <div className="gallery">
          {/* gallery card */}
          {/* animais */}
          <div className="gallery-card" id="card-1">
            <h2 className="gallery-card-title">Animais</h2>
            <a href="#" className="gallery-card-btn">See more</a>
          </div>
          {/* arquitetura */}
          <div className="gallery-card" id="card-2">
            <h2 className="gallery-card-title">Arquitetura</h2>
            <a href="#" className="gallery-card-btn">See more</a>
          </div>
          {/* cidades */}
          <div className="gallery-card" id="card-3">
            <h2 className="gallery-card-title">Cidades</h2>
            <a href="#" className="gallery-card-btn">See more</a>
          </div>
          {/* decorações */}
          <div className="gallery-card" id="card-4">
            <h2 className="gallery-card-title">Decorações</h2>
            <a href="#" className="gallery-card-btn">See more</a>
          </div>
          {/* esporte */}
          <div className="gallery-card" id="card-5">
            <h2 className="gallery-card-title">Esportes</h2>
            <a href="#" className="gallery-card-btn">See more</a>
          </div>
          {/* natureza */}
          <div className="gallery-card" id="card-6">
            <h2 className="gallery-card-title">Natureza</h2>
            <a href="#" className="gallery-card-btn">See more</a>
          </div>
          {/* paisagem */}
          <div className="gallery-card" id="card-7">
            <h2 className="gallery-card-title">Paisagem</h2>
            <a href="#" className="gallery-card-btn">See more</a>
          </div>
          {/* pessoas */}
          <div className="gallery-card" id="card-8">
            <h2 className="gallery-card-title">Pessoas</h2>
            <a href="#" className="gallery-card-btn">See more</a>
          </div>
          {/* refeições */}
          <div className="gallery-card" id="card-9">
            <h2 className="gallery-card-title">Refeições</h2>
            <a href="#" className="gallery-card-btn">See more</a>
          </div>
        </div>
      </main>
      {/* footer */}
      <footer>
        <p><span>Galeria</span> &copy; 2022</p>
      </footer>
    </>
  );
}

export default App;
