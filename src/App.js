import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import manchete from "./manchete.jpeg";

function Blog() {
  const [postagens, setPostagens] = useState([]);
  const [indiceAleatorio, setIndiceAleatorio] = useState(null);
  const [numeroPostagensVisiveis, setNumeroPostagensVisiveis] = useState(4);

  const fetchDataFromAPI = async () => {
    try {
      const response = await axios.get(
        "https://api-rest-post-diegocandido.herokuapp.com/postagens/"
      );
      setPostagens(response.data);

      const randomIdx = Math.floor(Math.random() * response.data.length);
      setIndiceAleatorio(randomIdx);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const handleLoadMore = () => {
    setNumeroPostagensVisiveis((prevVisibleEntries) => prevVisibleEntries + 2);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <a className="navbar-brand m-3" href="#">
          BBC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Notícias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Esportes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cultura
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mais
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-3 ml-6">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={manchete}
                  className="ml-4 w-100 rounded"
                  alt="Manchete Principal"
                />
              </div>

              <div className="col-md-6">
                <h1 className="headline mt-0 ml-4">Manchete Principal</h1>
                <div className="featured-news p-0 m-0">
                  <p className="my-0 p-0 ml-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, dolore voluptatem, reprehenderit ducimus vero nihil
                    ratione dolor optio soluta laboriosam nobis quibusdam magni
                    quas ullam quidem distinctio modi, rem porro? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Incidunt
                    explicabo illum id aspernatur unde voluptatibus voluptatem
                    esse soluta odit ut aperiam sed ipsum, nam rerum repellendus
                    quibusdam at veritatis nemo. dolor sit amet consectetur
                    adipisicing elit. Incidunt explicabo illum id aspernatur
                    unde voluptatibus voluptatem esse soluta odit ut aperiam sed
                    ipsum, nam rerum repellendus quibusdam at veritatis
                    nemo.dolor sit amet consectetur adipisicing elit. Incidunt
                    explicabo illum id aspernatur unde voluptatibus voluptatem
                    esse soluta odit ut aperiam sed ipsum, nam rerum repellendus
                    quibusdam at veritatis nemo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3 ml-6">
        <div className="row">
          {postagens.slice(0, numeroPostagensVisiveis).map((postagem) => (
            <div className="col-md-6" key={postagem.id}>
              <h3 className="headline ml-4">{postagem.title}</h3>
              <img
                src={`https://api-rest-post-diegocandido.herokuapp.com${postagem.thumbImage}`}
                className="ml-4 w-50 rounded"
                alt={postagem.title}
              />
              <div className="featured-news p-0 m-0">
                <p className="my-0 ml-0">
                  Descrição da Notícia: {postagem.description}
                </p>
                <p className="my-0 ml-0">
                  Autor do Post: {postagem.profileName}
                </p>
                <p className="my-0 ml-0">Data do Post: {postagem.postDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center text-lg-start text-white bg-danger">
        {
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold text-center">
                    Companhia BBC News
                  </h6>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum quia accusamus similique praesentium fuga expedita
                    voluptate sequi labore ea facilis? Facilis unde illum
                    expedita debitis? Aspernatur, nostrum laboriosam? Debitis,
                    enim.
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold text-center">
                    Contato
                  </h6>
                  <p className="text-center">
                    <i className="fas fa-home mr-3"></i> Rio Grande do
                    Sul,Taquara 10012, Brasil
                  </p>
                  <p className="text-center">
                    <i className="fas fa-envelope mr-3"></i> bbc@gmail.com
                  </p>
                  <p className="text-center">
                    <i className="fas fa-phone mr-3"></i> +55 51 9999-9999
                  </p>
                  <p className="text-center">
                    <i className="fas fa-phone mr-3"></i> +55 51 9999-9999
                  </p>
                </div>
              </div>
            </section>
            <div className="container">
              {" "}
              {/* Container para centralizar o conteúdo */}
              <p className="text-center">
                {" "}
                @ BBC - Todos os direitos Reservados 2023.
              </p>
            </div>
          </div>
        }
      </footer>
    </div>
  );
}
export default Blog;
