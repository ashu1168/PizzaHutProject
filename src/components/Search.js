import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Search() {
  const [searchdata, setSearchdata] = useState([]);
  const location = useLocation();
  console.log(location.state.s);
  useEffect(() => {
    dispsearch()
  }, []) 
  function dispsearch() {
    fetch("http://localhost:3000/fooditems").then((resp1) => {
      resp1.json().then((resp2) => {
        const sprouds = resp2.filter((f) =>
          f.name.toLowerCase().includes(location.state.s)
        );
        setSearchdata(sprouds);
        console.log(sprouds);
      });
    });
  }
  return (
    <div className="container">
      {searchdata ? (
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-5">
          {searchdata.map((fd, i) => {
            return (
              <div className="col" key={i}>
                <Card
                  style={{ width: "17rem" }}
                  className="h-100 border-0 bg-dark text-white rounded-4"
                >
                  <div
                    className="h-75 bg-light p-4 rounded-top-4"
                    style={{ borderBottomLeftRadius: "50px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={fd.image}
                      className="img-fluid h-100 w-50 mx-auto d-block"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{fd.name}</Card.Title>
                    <Card.Text>
                      Veniam debitis quaerat officiis quasi cupiditate quo,
                      quisquam velit, magnam voluptatem repellendus sed eaque
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <p>${fd.price}</p>
                      <Button
                        variant="warning"
                        className="text-white rounded-circle fs-5"
                      >
                        Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Products found</h2>
      )}
    </div>
  );
}

export default Search;
