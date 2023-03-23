import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "in",
          apikey: "68628ec329644a39a9297d204c4d8ac5",
        },
      })
      .then((response) => {
        console.log(response.data.articles)
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="row">
      {articles.map((article,index) => (
        <div key={index} className="col-10 col-lg-4 col-md-5 col-sm-10 mx-auto">
          <div className="card m-1" key={article.url}>
            <img
              src={article.urlToImage}
              alt={article.title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <a href={article.url} className="btn btn-primary">
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
