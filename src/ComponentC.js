// ComponentC.js
import React from 'react';

const ComponentC = ({ value, setValue }) => {
      const handleIncrement = () => {
            setValue(value + 1);
      };

      const handleDecrement = () => {
            setValue(value - 1);
      };

      return (
            <div>
                  <h3>ComponentC</h3>
                  <p>Current Value: {value}</p>
                  <button onClick={handleIncrement}>Increase</button>
                  <button onClick={handleDecrement} disabled={value <=0}>Decrease</button>
            </div>
      );
};

export default ComponentC;
