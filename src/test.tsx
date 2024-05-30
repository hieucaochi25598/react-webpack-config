import React, { useEffect, useState } from "react";

const TestComponent = () => {
  const [count, setCount] = useState(1);
  const [hieu, setHieu] = useState("hieu");
  const [cao, setCao] = useState("cao");
  const [cao1, setCao1] = useState("cao");
  const [cao2, setCao2] = useState("cao");
  const [cao3, setCao3] = useState("cao");
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
