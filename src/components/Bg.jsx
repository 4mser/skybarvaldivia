import React, { useState, useEffect } from 'react';


const Bg = ( )=> {

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
      x = (position.x - window.innerWidth / 2) / 600;
      y = (position.y - window.innerHeight / 2) / 100;
  
      limitedX = Math.min(Math.max(x, -25), 25);
      limitedY = Math.min(Math.max(y, -25), 25);
    }


    return (
        <div className='bg'>
           <video loop muted autoPlay style={{
                    transform: `translate(${-limitedX}%, ${limitedY}%)`,
                    transition: "transform 0.1s ease-out",
                    }}>
                <source src="https://s3.amazonaws.com/skybar.database.teset.1/bg.mp4" type="video/mp4"/>
           </video>
        </div>
    )
}

export default Bg