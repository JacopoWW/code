import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell(item, column) {
    if (column.content !== undefined) {
      return <td key={this.createKey(item, column)}>{column.content(item)}</td>;
    } else {
      return (
        <td key={this.createKey(item, column)}>{_.get(item, column.path)}</td>
      );
    }
  }
  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => this.renderCell(item, column))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
