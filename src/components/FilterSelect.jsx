import React from "react";

function FilterSelect({ label, name, list, defaultvalue, size }) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <select
        defaultValue={defaultvalue}
        className={` select h-10 select-bordered ${size}`}
        name={name}
        id={name}
      >
        {list &&
          list.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default FilterSelect;
