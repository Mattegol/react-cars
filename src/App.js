import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class App extends Component {
  
  state = {
    carList: [
      { brand: "Saab", model: "900 Turbo", year: "1992" },
      { brand: "Volvo", model: "745 GL", year: "1988" },
      { brand: "BMW", model: "525i", year: "2001" },
      { brand: "Nissan", model: "Leaf", year: "2012" },
      { brand: "Fiat", model: "Uno", year: "1985" }
    ]
  }

  render() {

    const rows = this.state.carList.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.brand}</td>
          <td>{row.model}</td>
          <td>{row.year}</td>
          <td>
            <Button className="btn btn-primary">View info</Button>
          </td>
        </tr>
      )
    })

    return (
      <div className="App">
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
 
}

export default App;
