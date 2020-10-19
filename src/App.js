import React, { Component } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "./Table";

class App extends Component {
  state = {
    carList: [
      { brand: "Saab", model: "900 Turbo", year: "1992" },
      { brand: "Volvo", model: "745 GL", year: "1988" },
      { brand: "BMW", model: "525i", year: "2001" },
      { brand: "Nissan", model: "Leaf", year: "2012" },
      { brand: "Fiat", model: "Uno", year: "1985" },
    ],
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col className="col-12">
              <h4>Cliff Barnes Car Dealer.</h4>
              <p>
                Click on the headers to sort by brand, model or year. 
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="col-6">
              <Table data={this.state.carList} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
