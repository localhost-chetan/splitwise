"use client";

import { useState } from "react";

export const Client = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  return <div onClick={handleIncrement}>Client Component {counter}</div>;
};
