import React, { useState } from "react";
export default function Counter() {
  const [counts, setcounts] = useState(0);
  return (
    <>
      <button onClick={() => setcounts(counts + 1)}>Click</button>
      <p>Clicked times: {counts}</p>
    </>
  );
}
