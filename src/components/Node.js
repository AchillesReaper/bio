// Node.js
import React from 'react';

const Node = ({ id, x, y, centerX, centerY }) => {
  return (
    <>
      <line
        x1={centerX}
        y1={centerY}
        x2={x}
        y2={y}
        stroke="#ccc"
        strokeWidth="2"
      />
      <div className="node" style={{ left: x, top: y }}>
        {id}
      </div>
    </>
  );
};

export default Node;
