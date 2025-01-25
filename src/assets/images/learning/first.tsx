import React, { useCallback, useState } from "react";
import Second from "./second";

export default function First() {
  const [first, setFirst] = useState(false);

  const handleChange = useCallback(() => {
    console.log(first);
    setFirst(!first);
  }, []);

  return (
    <div>
      <button onClick={handleChange}> click</button>
      <Second />
    </div>
  );
}
