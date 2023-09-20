import React, { useEffect, useState, useRef } from 'react';
import p5 from 'p5';

// Import your image files as variables

const CoreSkill = () => {
  const canvasRef = useRef(null);

  useEffect(() => {

    let parentContainer;

    let canvasSize;
    let centerX;
    let centerY;

    let coreSize;
    let tier1Size;
    let tier2Size;

    let centerNode;
    let nodeImagesT1 = [];
    let numNodesT1;
    let nodeImagesT2 = [];
    let numNodesT2;

    let centerNodeAngle = 0;
    let centerNodeRotationSpeed = 1;

    const sketch = (p) => {

      p.preload = () => {
        //load the node images
        const imgUrl = 'https://raw.githubusercontent.com/AchillesReaper/bio/main/src/assets/img/'
        centerNode = p.loadImage(imgUrl + 'sun.png')

        const nodeSrcT1 = [
          imgUrl + 'logo-react.png',
          imgUrl + 'logo-HTML.png',
          imgUrl + 'logo-CSS.png',
          imgUrl + 'logo-Javascript.png',
          imgUrl + 'logo-Python.png',
        ];

        numNodesT1 = nodeSrcT1.length;
        for (let i = 0; i < numNodesT1; i++) {
          nodeImagesT1.push(p.loadImage(nodeSrcT1[i]));
        }

        const nodeSrcT2 = [
          imgUrl + 'logo-Java.png',
          imgUrl + 'logo-Swift.png',
          imgUrl + 'logo-CSS.png',
          imgUrl + 'logo-Processing.png',
          imgUrl + 'logo-aws.png',
          imgUrl + 'logo-mysql.png',
          imgUrl + 'logo-postgresql.png',
          imgUrl + 'logo-git.png',
        ];

        numNodesT2 = nodeSrcT2.length;
        for (let i = 0; i < numNodesT2; i++) {
          nodeImagesT2.push(p.loadImage(nodeSrcT2[i]));
        }
      };

      p.setup = () => {
        console.log('setup function called');
        
        parentContainer = canvasRef.current;
        p.createCanvas(parentContainer.offsetWidth, parentContainer.offsetHeight).parent(parentContainer);
        canvasSize = Math.min(p.width, p.height);
        centerX = p.width / 2;
        centerY = p.height / 2;
        canvasSize = p.min(p.width, p.height);
        coreSize = canvasSize / 6;
        tier1Size = canvasSize / 8;
        tier2Size = canvasSize / 10;
        p.angleMode(p.DEGREES);
        p.noFill();
        p.stroke(255);
        p.imageMode(p.CENTER);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(canvasSize / 40);
      };

      p.draw = () => {
        p.background('#3da3d5');

        // Draw concentric circles
        for (let i = 1; i < 3; i++) {
          p.circle(centerX, centerY, (canvasSize / 5) * 2 * i);
        }

        // 
        const drawTier = (numNodes, nodeImages, centerX, centerY, canvasSize, tierSize, j) => {
          for (let i = 0; i < numNodes; i++) {
            let angle = (360 / numNodes) * i;
            let x = centerX + p.cos(angle) * (canvasSize / 5 * j);
            let y = centerY + p.sin(angle) * (canvasSize / 5 * j);

            if (j == 1) {
              p.line(centerX, centerY, x, y);
            }


            let targetImage = nodeImages[i % nodeImages.length];
            let imageHeight = (targetImage.height / targetImage.width) * tierSize;
            p.image(targetImage, x, y, tierSize, imageHeight);
          }
        }
        // Draw other nodes on the tier2 circle
        drawTier(numNodesT2, nodeImagesT2, centerX, centerY, canvasSize, tier2Size, 2)

        // Draw other nodes on the tier1 circle
        drawTier(numNodesT1, nodeImagesT1, centerX, centerY, canvasSize, tier1Size, 1)



        // Draw center node
        centerNodeAngle += centerNodeRotationSpeed;
        if (centerNodeAngle >= 360) {
          centerNodeAngle = 0;
        }

        p.push();
        p.translate(centerX, centerY);
        p.rotate(centerNodeAngle);
        p.imageMode(p.CENTER);
        p.image(centerNode, 0, 0, coreSize, coreSize);
        p.pop();

        p.push();
        p.fill(0);
        p.textStyle(p.BOLD);
        p.text('Core Skills', centerX, centerY);
        p.pop();
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
      <div id="node-graph-container" ref={canvasRef} style={{ border: '1px solid green', position: 'relative', width: '100%', height:'58vh' }}>
      </div>
    </div>
  );
};

export default CoreSkill;
