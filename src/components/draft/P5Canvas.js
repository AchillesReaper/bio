import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

function P5Canvas() {
  const canvasParentRef = useRef(null); // Reference to the parent container
  let p5Instance = null; // Reference to the p5.js instance

  // p5.js sketch function
  const sketch = (p) => {
    p.setup = () => {
      // Use the parent container's dimensions for canvas size
      const parent = canvasParentRef.current;
      const canvasWidth = parent.clientWidth;
      const canvasHeight = parent.clientHeight;
      p.createCanvas(canvasWidth, canvasHeight);
      // Your setup code here
    };

    p.draw = () => {
      // Your drawing code here
      p.background(0)
    };

    // Handle window resizing
    p.windowResized = () => {
      const parent = canvasParentRef.current;
      const canvasWidth = parent.clientWidth;
      const canvasHeight = parent.clientHeight;
      p.resizeCanvas(canvasWidth, canvasHeight);
    };
  };

  useEffect(() => {
    // Create a new p5.js instance and bind it to the sketch function
    p5Instance = new p5(sketch);

    // Return a cleanup function to remove the p5.js instance
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={canvasParentRef} className="canvas-container" style={{border: '1px solid green', margin:'2px'}}>
    <h2>P5 canvas</h2>
  </div>;
}

export default P5Canvas;
