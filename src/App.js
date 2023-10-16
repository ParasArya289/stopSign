import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [sign, setSign] = useState("stop");
  const setSignClass = (el) => {
    return sign === el ? "light " + sign : "light";
  };
  useEffect(() => {
    if (sign === "stop") {
      setTimeout(() => setSign("go"), 2000);
    } else if (sign === "slow") {
      setTimeout(() => setSign("stop"), 3000);
    } else {
      setTimeout(() => setSign("slow"), 4000);
    }
  }, [sign]);
  return (
    <div className="App">
      <div className="post">
        <div className={setSignClass("stop")}></div>
        <div className={setSignClass("slow")}></div>
        <div className={setSignClass("go")}></div>
      </div>
    </div>
  );
}
