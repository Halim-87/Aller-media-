
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DataApi = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const rows = [];

    fetch("https://storage.googleapis.com/aller-structure-task/test_data.json")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data[0].length; i++) {
          rows.push(data[0][i].columns);
        }
        setRows(rows);
      });
  }, []);

  return (
    <Container>
      {rows.map((row, index) => (
        <Row key={index}>
          {row.map((row, index) => (
            <Col key={index} xs={row.width}>
              <img src={row.imageUrl} width={300} height={300} alt={row.url} />
              <div>
                <input type="text" defaultValue={row.title} />{" "}
                <a href={row.url}>(Les mer)</a>
              </div>
              <br></br>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DataApi />);
