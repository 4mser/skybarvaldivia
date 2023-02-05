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
                <source src="https://skybartestdatabase1.s3.us-east-1.amazonaws.com/bg.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJHMEUCIQCG5hapQcrlb4NimW%2BGJ9JsmNR2lYdnx%2F8RuhzQIXAMEQIgBxtdlMgM%2FTv09di0Jx86SoZlFBSHfvSBaW7YFWisvcgq5AIIMRAAGgw4NzUzOTQzMDk0MDIiDClsGnW7eZ%2B4AXnm0CrBAvwgKrzT%2BN16ds%2FR9zRS9MJHU4A01CD3j65EG%2FxkrlVqHHouDotcfSjpq05TXhk%2Bw92R9mMsace9Fp62cokKO3IqaZWXdguCbZ%2BL3EZ1BBtHB73PDLEp9JvlY6veYY5sr%2BQUopo608fr6DwCIsbtnIgmOOzxxbJmcmcRxKHFmC3rlD6ln2bOmm4tHO8Q%2BIPaqLCyDbbkmT6T6EHOB5nAeHJkQabEAk2%2BxUaLnsp4MHiWMshf4SeTxMcIUYn6miVreJkssWFqOC8f86OqzeVz0gBmjpB4P03LROXsbe5ucVOR%2BCGiPZSY7h2fbfsCaOG9JReEz5WbubVYtUJVG59GMXujLcSaRVpXiSGKL15l4i%2BG4wE76w42ned3mPdhOBMRQRQunnzk1UrJo5Xh4XMvZ1ho%2FPH34pFWjUxO1QCZxW1xoDCFpv%2BeBjqzApzFXwOZwn0%2FgJ5fV8w5%2BYM9cPIdtWdkSWicbQgP8%2FYeMJgOEdtY0FqLLM7MRC2V9oRF7uUqEj7bwbQRC9HmHCmNIK4yw%2F0Y%2FNd3JWlJciXq7%2B5fUtI%2FOAo1Z8xmtOpSLx9mibUwuU6FQQMTuRIhkxVM%2BaoQrr3k8rgz19pLT71MwVJNzt3lnsJD8XonsM4EAQNU0jtan05HpwG7mtuXa6QLv8r3v4CsfNnlca9wbde1ezxKJH2gorOPHWt%2F0Enp0Dl3lgzsjf6aikiedRl0hDzjZLarYu%2ByI2cmhxZpxw2stKgVNL14lmE4BVGn6d4IjUtDigBwbLY8lDnvQCXXYggbzFaYUwmhbQiEGACly3mU9gk54P%2FXR8IQquiOFkuUnMdeHrewcHs6c7w22w%2BB0cvRPUU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230205T162414Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4XUMRDUNNNYNRZR5%2F20230205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3f306312b90c02b7de31be195e879e03d30a0cf76b40ead54e92e63af1d24c7a" type="video/mp4"/>
           </video>
        </div>
    )
}

export default Bg