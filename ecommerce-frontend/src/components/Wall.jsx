import { useEffect, useState } from "react";
import "../style/wall.css";

const Wall = ({ text, size = "250%", interval = 140 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, interval);

    return () => clearInterval(textInterval);
  }, [text.length, interval]);

  return (
    <div className="wall" style={{ fontSize: size }}>
      {Array.from(text).map((char, index) => (
        <span
          key={index}
          className={`sp sp__${index} ${index === activeIndex ? "active" : ""}`}
          style={{ "--i": index }}
        >
          {char === " " ? <em>&nbsp;</em> : char}
        </span>
      ))}
    </div>
  );
};

export default Wall;
