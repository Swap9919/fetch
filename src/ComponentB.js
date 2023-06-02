// ComponentB.js
import React, { useState } from 'react';
import ComponentC from './ComponentC';

const ComponentB = () => {
      const [value, setValue] = useState(0);

      return (
            <div>
                  <h2>ComponentB</h2>
                  <ComponentC value={value} setValue={setValue} />
            </div>
      );
};

export default ComponentB;
