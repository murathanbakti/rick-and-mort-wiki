import React from "react";

const FilterBtn = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      <style>
        {`
          .x:checked + label {
            color: white;
            background-color: #0b5ed7;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        {/* htmlFor mu For mu bilinmiyor... */}
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
