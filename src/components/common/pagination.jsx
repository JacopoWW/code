import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {
  const { currentPage, pageSize, itemsCount, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) {
    return null;
  } else {
    const pages = _.range(1, pageCount + 1);

    return (
      <nav>
        <ul className="pagination">
          {pages.map(page => (
            <li
              key={page}
              className={"page-item" + (page === currentPage ? " active" : "")}
            >
              <a className="page-link" onClick={_ => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
