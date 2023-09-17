// Graph.js
import React, { useState } from 'react';
import Node from './Node';
const Graph = () => {
  const [nodes, setNodes] = useState([]);
  const [centerX, setCenterX] = useState(200); // Initial center node x-coordinate
  const [centerY, setCenterY] = useState(200); // Initial center node y-coordinate

  const addNode = () => {
    const newNode = {
      id: nodes.length + 1,
      x: Math.random() * 400, // Node x-coordinate
      y: Math.random() * 400, // Node y-coordinate
    };
    setNodes([...nodes, newNode]);
  };
    

  return (
    <div className="graph">
      <button onClick={addNode}>Add Node</button>
      <svg className="svg-container">
        {nodes.map((node) => (
          <Node
            key={node.id}
            {...node}
            centerX={centerX}
            centerY={centerY}
          />
        ))}
      </svg>
    </div>
  );
};

export default Graph;
