import React from 'react';

const Company = ({ data, selectButton }) => {
  return data.map((item, index) => {
    return (

        <button key={index} onClick={() => selectButton(index)}>
          {item.company}
        </button>
      
    );
  });
};

export default Company;
