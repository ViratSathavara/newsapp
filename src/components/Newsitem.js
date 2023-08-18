import React from "react";
import nullimg from "../images/nimg.jpg";

const Newsitem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, publishDate, author, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl ? imageUrl : nullimg} className="card-img-top" />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              className="badge rounded-pill bg-dark"
              style={{ color: "blue" }}
            >
              {source}{" "}
            </span>
          </div>
          <div className="card-body" style={{ backgroundColor: "#4ca2ff" }}>
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p
              className="card-text"
              style={{
                backgroundColor: "#00000038",
                fontWeight: "700",
                borderRadius: "10px",
                textAlign: "center",
                fontSize: "15px",
                color: "white",
              }}
            >
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(publishDate).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
