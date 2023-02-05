import React, { useState, useEffect } from "react";


const ImageHome = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    if (window.innerWidth > 700) {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }
    }, []);

    let x = 0;
    let y = 0;
    let limitedX = 0;
    let limitedY = 0;
    if (window.innerWidth > 700) {
      x = (position.x - window.innerWidth / 2) /300;
      y = (position.y - window.innerHeight / 2) / 300;
  
      limitedX = Math.min(Math.max(x, -25), 25);
      limitedY = Math.min(Math.max(y, -25), 25);
    }

    return (
        <div className="image-home" style={{
            transform: `translate(${limitedX}%, ${limitedY}%)`,
            transition: "transform 0.1s ease-out",
          }}>
            {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/008/481/739/small/doodle-building-cartoon-in-outline-style-png.png" alt="" /> */}
            
        </div>
    )
}

export default ImageHome