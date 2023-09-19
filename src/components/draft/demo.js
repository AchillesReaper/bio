import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Demo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let parentContainer;

      p.setup = () => {
        parentContainer = canvasRef.current;
        p.createCanvas(parentContainer.offsetWidth, parentContainer.offsetHeight).parent(parentContainer);
      };

      p.draw = () => {
        p.background(120);
      };

      p.windowResized = () => {
        // Resize the canvas when the window is resized
        p.resizeCanvas(parentContainer.offsetWidth, parentContainer.offsetHeight);
      };
    };

    // Create a new p5.js instance
    const p5Instance = new p5(sketch);

    return () => {
      // Cleanup: Remove the canvas and dispose of the p5.js instance
      p5Instance.remove();
    };
  }, []);

  return (
    <div>
      <div id="node-graph-container" ref={canvasRef} style={{ border: '1px solid green', position: 'relative', width: '90%', height:'95%' }}>
        {/* Other components can be added here */}
        {/* <h2 style={{ position: 'absolute', width: '100%', height:'100%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></h2> */}
      </div>
    </div>
  );
};

export default Demo;
