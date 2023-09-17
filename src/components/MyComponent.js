import React, { useEffect, useRef, useState } from 'react';

function CenterNode({x,y}) {
  console.log("x: ", x)
  console.log("y: ", y)
  const style = {
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      backgroundColor: "blue"
  }
return <div className="center-node" style={style}>core-skill</div>;
}

const MyComponent = () => {
  const parentRef = useRef(null);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);

  useEffect(() => {
    const parentElement = parentRef.current;

    // Initialize a ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Get the new dimensions of the parent container
        const { width, height } = entry.contentRect;

        console.log("MC - parent W: ", width, " /H: ", height)

        // Calculate the center coordinates
        const newCenterX = width / 2;
        const newCenterY = height / 2;

        // Update the state with the new center coordinates
        setCenterX(newCenterX);
        setCenterY(newCenterY);
      }
    });

    // Observe the parent container
    resizeObserver.observe(parentElement);

    // Cleanup by disconnecting the observer when the component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={parentRef} className="parent-container" style={{position: "relative",backgroundColor: "red"}}>
      {/* Your content goes here */}
      <p>Center X: {centerX}</p>
      <p>Center Y: {centerY}</p>
      <CenterNode
        x = {centerX}
        y = {centerY}
      />
    </div>
  );
};

export default MyComponent;
