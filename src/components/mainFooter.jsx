import '../assets/css/home.css'



function MainFooter() {
    return (
        <div class="container">
        <footer class="row row-cols-5  py-5 my-5 border-top">
          <div class="col">
            <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <img src='https://res.cloudinary.com/dk3wwfwyv/image/upload/v1691593026/fvnebfzdzbrlxfvy2pdk.png' width='50px' />
            </a>
            <p class="text-muted">&copy; 2023</p>
          </div>

          <div class="col">
          <a href="https://facebook.com" target="_blank"><i class="bi bi-facebook h1"></i></a>
          <a href="https://wa.me/+923111297630"  target="_blank"><i class="bi bi-whatsapp h1 m-10"></i></a>
          </div>


          <div class="col text-center">
            <h5 className='py-3 uiy fw-bold h3'>Páginas</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Lar</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">NIF</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">NISS</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Abrir uma conta bancária</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">representante fiscal</a></li>
            </ul>
          </div>

          
          <div class="col text-center">
            <h5 className='py-3 uiy fw-bold h3'>Sobre nós</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">+92311 18967</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">asifasma212@gmail.com</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Karachi, Pakistan</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
}

export default MainFooter