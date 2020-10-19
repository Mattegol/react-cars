import React, { Component } from "react";

import BootstrapTable from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class Table extends Component {
    state = {
        currentSort: 'default'
    }

    render() {
        const { data } = this.props;

        const rows = data.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.brand}</td>
                <td>{row.model}</td>
                <td>{row.year}</td>
                <td>
                  <Button className="btn btn-primary">Details</Button>
                </td>
              </tr>
            );
          });

          return (
            <BootstrapTable striped bordered hover>
                <thead>
                    <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>View Information</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </BootstrapTable>
          );
        
    }
}

export default Table