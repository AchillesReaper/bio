import React, { useEffect } from 'react';
import p5 from 'p5'; // Import p5.js
import sun from '../assets/img/sun.png'

export default function CoreSkill() {
  let centerX;
  let centerY;
  let canvasSize;
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

  const preload = (p) => {
    centerNode = p.loadImage('../assets/img/sun.png');

    // const nodeSrcT1 = [
    //   '../assets/img/logo-react.png',
    //   '../assets/img/logo-HTML.png',
    //   '../assets/img/logo-CSS.png',
    //   '../assets/img/logo-Javascript.png',
    //   '../assets/img/logo-Python.png',
    // ];
    // numNodesT1 = nodeSrcT1.length;

    // for (let i = 0; i < numNodesT1; i++) {
    //   nodeImagesT1.push(p.loadImage(nodeSrcT1[i]));
    // }

    // const nodeSrcT2 = [
    //   '../assets/img/logo-Java.png',
    //   '../assets/img/logo-Swift.png',
    //   '../assets/img/logo-Processing.png',
    //   '../assets/img/logo-aws.png',
    //   '../assets/img/logo-mysql.png',
    //   '../assets/img/logo-postgresql.png',
    //   '../assets/img/logo-git.png',
    // ];
    // numNodesT2 = nodeSrcT2.length;

    // for (let i = 0; i < numNodesT2; i++) {
    //   nodeImagesT2.push(p.loadImage(nodeSrcT2[i]));
    // }
  };

  const setup = (p) => {
    p.createCanvas(800, 800);
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

  const draw = (p) => {
    p.background(100);

    // Draw concentric circles
    for (let i = 1; i < 3; i++) {
      p.circle(centerX, centerY, (canvasSize / 5) * 2 * i);
    }

    // // Draw nodes on the tier2 circle
    // for (let i = 0; i < numNodesT2; i++) {
    //   let angle = (360 / numNodesT2) * i;
    //   let x = centerX + p.cos(angle) * (canvasSize / 2.5);
    //   let y = centerY + p.sin(angle) * (canvasSize / 2.5);

    //   p.line(centerX, centerY, x, y);

    //   let targetImage = nodeImagesT2[i % nodeImagesT2.length];
    //   let imageHeight = (targetImage.height / targetImage.width) * tier2Size;

    //   p.image(targetImage, x, y, tier2Size, imageHeight);
    // }

    // // Draw other nodes on the tier1 circle
    // for (let i = 0; i < numNodesT1; i++) {
    //   let angle = (360 / numNodesT1) * i;
    //   let x = centerX + p.cos(angle) * (canvasSize / 5);
    //   let y = centerY + p.sin(angle) * (canvasSize / 5);

    //   p.line(centerX, centerY, x, y);

    //   let targetImage = nodeImagesT1[i % nodeImagesT1.length];
    //   let imageHeight = (targetImage.height / targetImage.width) * tier1Size;
    //   p.image(targetImage, x, y, tier1Size, imageHeight);
    // }

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

  useEffect(() => {
    // Create a new p5 instance
    new p5((p) => {
      preload(p);
      setup(p);
      draw(p);
    });
  }, []);

  return <div className="NodeGraph"></div>;
}


