import { news } from "../data/news";

export function Article() {
  return (
    <>
      <div className="container">
      {news.map((article) => (
        <div className="row up-down-padding up-margin">
            <>
              <div className="col-sm-4">
                <img src={article.imageURL} width="250rem;" />
              </div>
              <div className="col-sm-8">
                <h5 className="custom-float-left">
                  {article.title}
                </h5>
                <p className="custom-float-left">
                  {article.description}
                </p>
                <a className="custom-float-right" href="/">
                  Read More
                </a>
              </div>
            </>
        </div>
        ))}
      </div>
    </>
  );
}
