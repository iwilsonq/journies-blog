import React from 'react';

const errorStyles = {
  backgroundColor: 'red',
  color: '#fff',
  width: '100%',
  padding: 10,
  marginTop: 10,
  marginBottom: 10
};

const Error = props => {
  return (
    <div className="error" style={errorStyles}>
      {props.message}
    </div>
  );
};

export default Error;
