import React from "react";

const ListGroup = props => {
  const { items, textProp, valueProp, onItemSelect, selectedItem } = props;
  return (
    <ul className="list-group">
      <li
        className={"list-group-item" + (selectedItem === null ? " active" : "")}
        onClick={_ => onItemSelect(null)}
      >
        All
      </li>
      {items.map(item => (
        <li
          key={item[valueProp]}
          className={
            "list-group-item" + (item === selectedItem ? " active" : "")
          }
          onClick={_ => onItemSelect(item)}
        >
          {item[textProp]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProp: "name",
  valueProp: "_id"
};

export default ListGroup;
