import React from 'react'

const Dropdown = (props) => {

    const {options, labelKey, onSelect, idKey, name} = props;
  return (
    <select onChange={onSelect} name={name}>
        {
            options.map((option)=> {
                return <option value={idKey}>{option[labelKey]}</option>
            })
        }
    </select>
  );
};

export default Dropdown;