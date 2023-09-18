import React, { useEffect, useState } from 'react';
import p5 from 'p5';

// Import your image files as variables
import centralNodeImage from '../assets/img/sun.png';
import otherNodeImage1 from '../assets/img/logo-CSS.png';
import otherNodeImage2 from '../assets/img/logo-HTML.png';

const CoreSkill1 = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const sketch = (p) => {
      let centralNode;
      const nodeImages = []; // Array to store node images
      const nodes = []; // Array to store other node positions and information

      p.preload = () => {
        // Preload images using JavaScript's native Image class
        centralNode = new Image();
        centralNode.src = centralNodeImage;

        // Load other node images and populate the 'nodeImages' array
        const image1 = new Image();
        image1.src = otherNodeImage1;
        nodeImages.push(image1);

        const image2 = new Image();
        image2.src = otherNodeImage2;
        nodeImages.push(image2);
        
        // Wait for images to load before setting the 'imagesLoaded' state
        Promise.all([centralNode, image1, image2]).then(() => {
          setImagesLoaded(true);
        });
      };

      p.setup = () => {
        p.createCanvas(800, 600);
      };

      p.draw = () => {
        p.background(220);

        if (imagesLoaded) {
          // Draw concentric circles, central node, other nodes, and connections here
        }
      };
    };

    // Create a new p5.js instance
    new p5(sketch);
  }, [imagesLoaded]);

  return (
    <div>
      <h2>Node Graph</h2>
      <div id="node-graph-container"></div>
    </div>
  );
};

export default CoreSkill1;
