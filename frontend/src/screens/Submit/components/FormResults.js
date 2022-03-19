import React from 'react';

const FormResults = ({input, type}) => {
    console.log('form input : ', input)
    if (!input) {
        return <></>
    }
  return <>
      {input.map(input => <div>{input.name}</div>)}
  </>;
};

export default FormResults;
