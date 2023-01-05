import React from "react";
import NewsComponent from "./News";

export default class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  getApi(value) {
    fetch(value)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json.articles,
        });
      });
  }

  render() {
    // console.log('ubah api :'+this.state.data)
    return (
      <div class="container-fluid px-0 py-0">
        {/* Navbar */}
        <div class="fixed-top">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand text-warning" href="/">
                Navbar
              </a>
              {/* <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button> */}
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">
                      General
                    </a>
                  </li> */}
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="/"
                      onClick={() =>
                        this.getApi(
                          "https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=fc25e05f7a8a4c56bbd092ac3354ad19"
                        )
                      }
                    >
                      Bisnis
                    </a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-warning text-warning"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>

        {/* Isi Berita */}
        <div>
          <NewsComponent key={this.index} berita={this.state.data} />
        </div>

        {/* footer */}
        <div className="px-0 mt-5">
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <h5 className="text-white me-auto ms-auto">
                  Code<span className="text-warning">Logic</span>
                </h5>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
