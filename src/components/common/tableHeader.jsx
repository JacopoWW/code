import React, { Component } from "react";

/**
 * columns:Array 保存了表头的信息 [{path: "examples", label: "Examples"}]
 * sortColumn: Object 保存了排序规则 {path: "examples", order: "asc/desc"}
 * onSort: function(sortColumn) 连接主组件排序方法的func
 * @class TableHeader
 * @extends {Component}
 */
class TableHeader extends Component {
  raiseSort(path) {
    const sortColumn = { ...this.props.sortColumn };
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }
  renderSortIcon(column) {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) {
      return null;
    } else if (sortColumn.order === "asc") {
      return <i className="fa fa-sort-asc" />;
    } else if (sortColumn.order === "desc") {
      return <i className="fa fa-sort-desc" />;
    } else {
      return null;
    }
  }
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={_ => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
