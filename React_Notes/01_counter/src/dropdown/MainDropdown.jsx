import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { dealer, manufacturer, userName } from './Constant';
import './styleDropdown.css';

const MainDropdown = () => {
    const [formData, setFormData] = useState({
        dealer_id: "",
        manfucaturer_id: "",
        user_id: ""
    });

    // NEW 
    // const [showFormData, setShowFormData] = useState(false);

    const onSelect = (e) => {
        const updatedFormData = { ...formData };
        updatedFormData[e.target.name] = e.target.value;
        setFormData(updatedFormData);
        console.log(e.target.name, e.target.value);
    };

    const handleSubmit = () => {
        console.log(formData);
    // setShowFormData(true);  // NEW
    }

  return (
    <div className='main'>
        <Dropdown
            name="dealer_id"
            options={dealer}
            className="dropdown"
            idkey="dealer_id"
            value={formData.dealer_id}
            labelKey="dealerName"
            onSelect={onSelect}
        />
        <Dropdown
            name="user_id"
            options={userName}
            className="dropdown"
            idKey="user_id"
            value={formData.user_id}
            labelKey="user_name"
            onSelect={onSelect}
        />
        <Dropdown
            name="manfucaturer_id"
            options={manufacturer}
            className="dropdown"
            idKey="manfucaturer_id"
            value={formData.manfucaturer_id}
            labelKey="manufacturerName"
            onSelect={onSelect}
        />
        <button className="button" onClick={handleSubmit}>Submit</button>
        <br />
        <br />

      {/* // NEW */}
      {/* {showFormData && <div style={{ display: 'flex', alignItems: "flex-start", flexDirection: 'column', gap: "10px" }}>
        {Object.entries(formData).map(([key, value]) => {
          return <div style={{display:"flex", gap:"10px"}}>
            <span>{key}</span>
            <span>{value}</span>
          </div>
        })}
        </div>} */}
    </div>
  )
}

export default MainDropdown

// {
//   dealer_id: 1,
//   manfacurere_id:3,
//   user_id:3
// }
// 350 // rupeess
