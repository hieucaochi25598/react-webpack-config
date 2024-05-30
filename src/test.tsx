import React, { useEffect, useState } from "react";

const TestComponent = () => {
  const [count, setCount] = useState(1);
  const [hieu, setHieu] = useState("hieu");
  
  useEffect(() => {
    if (count) {
      console.log(count);
    }
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default TestComponent;