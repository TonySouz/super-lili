const Home = () => {
  return (
    <div className="container mt-5">

      {/* Título da loja */}
      <h1 className="text-center mb-4">Super LILI</h1>

      {/* Banner de destaque */}
      <div className="p-4 mb-5 bg-warning text-dark rounded text-center">
        <h2>Seu supermercado de confiança em Ocara!</h2>
        <p>Qualidade, economia e variedade perto de você.</p>
      </div>

            <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/banner1.jpg" className="d-block w-100" alt="Promoção 1" />
    </div>
    <div className="carousel-item">
      <img src="/images/banner2.jpg" className="d-block w-100" alt="Promoção 2" />
    </div>
    <div className="carousel-item">
      <img src="/images/banner3.jpg" className="d-block w-100" alt="Promoção 3" />
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Próximo</span>
  </button>
</div>

      {/* Categorias simples */}
      <div className="mb-5">
        <h3 className="mb-3">Categorias</h3>
        <div className="d-flex gap-3 flex-wrap">
          <span className="badge bg-primary p-2">Hortifruti</span>
          <span className="badge bg-success p-2">Bebidas</span>
          <span className="badge bg-danger p-2">Limpeza</span>
          <span className="badge bg-info text-dark p-2">Padaria</span>
        </div>
      </div>

      {/* Produtos populares (mockado) */}
      <div>
        <h3 className="mb-3">Produtos Populares</h3>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="/images/banana.jpg" className="card-img-top" alt="Banana" />
              <div className="card-body">
                <h5 className="card-title">Banana</h5>
                <p className="card-text">R$ 2,99/kg</p>
              </div>
            </div>
          </div>
          {/* Adicione mais cards aqui depois */}
        </div>
      </div>
    </div>
  );
};

export default Home;