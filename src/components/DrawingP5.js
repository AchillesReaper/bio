import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const DrawingP5 = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    let spinAngle = 0;
    let pause = 0;
    let layer1B = 0;
    let layer2B = 0;
    let layer3B = 0;
    let layer1Color;
    let layer2Color;
    let layer3Color;

    // Variable to control the spinning speed
    const spiningSpeed = 3;

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(600, 600, p.WEBGL);
      };

      p.draw = () => {
        p.background(0,0,0);
        p.translate(p.mouseX - p.width / 2, p.mouseY - p.height / 2, 0);

        layer1Color = p.color(255, 0, 0);
        layer2Color = p.color(0, 255, 0);
        layer3Color = p.color(0, 0, 255);

        if (layer1B % 2 === 0) {
          drawLayer1(spinAngle);
        }
        if (layer2B % 2 === 0) {
          drawLayer2(spinAngle);
        }
        if (layer3B % 2 === 0) {
          drawLayer3(spinAngle);
        }

        if (pause % 2 === 0) {
          spinAngle += 1;
        }
      };

      p.mousePressed = () => {
        pause++;
        if (pause % 2 === 0) {
          console.log("Rotation resumed");
        } else {
          console.log("Rotation stopped");
        }
      };

      p.keyPressed = () => {
        switch (p.key) {
          case '1':
            layer1B++;
            if (layer1B % 2 === 0) {
              console.log("Layer 1 built");
            } else {
              console.log("Layer 1 removed");
            }
            break;
          case '2':
            layer2B++;
            if (layer2B % 2 === 0) {
              console.log("Layer 2 built");
            } else {
              console.log("Layer 2 removed");
            }
            break;
          case '3':
            layer3B++;
            if (layer3B % 2 === 0) {
              console.log("Layer 3 built");
            } else {
              console.log("Layer 3 removed");
            }
            break;
        }
      };

      function drawLayer1(spinAngle) {
        p.stroke(layer1Color);
        p.strokeWeight(2);
        p.rotateY(p.radians(spinAngle * spiningSpeed));
        p.noFill();
        p.box(100);
      }

      function drawLayer2(spinAngle) {
        p.stroke(layer2Color);
        p.strokeWeight(2);
        p.rotateX(p.radians(spinAngle * spiningSpeed));
        p.noFill();
        p.box(60);
      }

      function drawLayer3(spinAngle) {
        p.stroke(layer3Color);
        p.strokeWeight(2);
        p.rotateY(p.radians(spinAngle * spiningSpeed));
        p.noFill();
        p.box(20);
      }
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
      <h2>Spinning box</h2>
      <div ref={canvasRef}></div>
    </div>
  );
};

export default DrawingP5;
