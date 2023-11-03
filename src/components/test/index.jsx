import React, { useState, useEffect } from 'react';
import './index.css';

const MatrixRain = () => {
  const numColumns = 125;
  const numRows = 50;
  const minInterval = 100; // 100ms
  const maxInterval = 250; // 250ms

  // Define 5 tamaños diferentes de columnas entre 30 y 50
  const columnSizes = [30, 35, 40, 45, 50];

  // Distribuye uniformemente los tamaños de columnas en numColumns
  const distributeColumnSizes = () => {
    const distributedSizes = [];
    const totalSizes = columnSizes.length;
    const sizePerColumn = Math.floor(numColumns / totalSizes);

    for (let i = 0; i < totalSizes; i++) {
      for (let j = 0; j < sizePerColumn; j++) {
        distributedSizes.push(columnSizes[i]);
      }
    }

    return distributedSizes;
  };

  const columnWidths = distributeColumnSizes();

  const createMatrix = () => {
    const matrix = [];
    for (let i = 0; i < numColumns; i++) {
      const column = [];
      const size = columnWidths[i];
      for (let j = 0; j < numRows; j++) {
        column.push(Math.random() > 0.5 ? '0' : '1');
      }
      matrix.push({ size, column });
    }
    return matrix;
  };

  const [matrix, setMatrix] = useState(createMatrix());

  useEffect(() => {
    const interval = setInterval(() => {
      const newMatrix = matrix.map(({ size, column }) => {
        const updatedColumn = [...column];
        updatedColumn.pop();
        updatedColumn.unshift(Math.random() > 0.5 ? '0' : '1');
        return { size, column: updatedColumn };
      });
      setMatrix(newMatrix);
    }, Math.random() * (maxInterval - minInterval) + minInterval);

    return () => {
      clearInterval(interval);
    };
  }, [matrix]);

  return (
    <div className="matrix-rain">
      {matrix.map(({ size, column }, columnIndex) => (
        <div key={columnIndex} className="matrix-column" style={{ width: `${size}vw` }}>
          {column.map((char, rowIndex) => (
            <div key={rowIndex} className="matrix-char" style={{ fontSize: '10px' }}>
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;

