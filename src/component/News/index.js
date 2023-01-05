import React, { Component } from 'react'

export default class NewsComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      // dataoperan: this.props.berita
    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=fc25e05f7a8a4c56bbd092ac3354ad19")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json.articles,
        });
      });
  }

  // componentWillUnmount() {
  //   if(this.state.dataoperan === this.props.berita) {
  //     this.setState({
  //       data: this.props.berita
  //     })
  //   }

  //   console.log('data operan :' + this.state.dataoperan)
  // }

  render() {
    // console.log(this.state.data)
    // console.log('ubah api'+this.props.berita)
    return (
      <div className="container justify-content-center items-align-center pt-5">
      <div className="row me-2 ms-2 pt-5">
        {this.state.data.map((article, index) => (
            <div className="col col-sm-12 col-md-4 col-lg-3 p-2">
              <div className="card">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} className="btn btn-primary">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    )
  }
}
