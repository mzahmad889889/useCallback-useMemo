import React, {useCallback, useState} from 'react';
export default function UseCallback() {
    const [count, setCount] = useState(0);

    // Define a callback function using useCallback
    const handleClick = useCallback(() => {
      return count;
    }, [count]);
  
    console.log("useCallback:", handleClick )
  
    return (
      <div className='App'>
         <p>Count: {count}</p>
      </div>
    );
}
