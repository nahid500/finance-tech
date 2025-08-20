'use client';

import React from 'react';
import PropTypes from 'prop-types';

export function SimpleAreaChart({
  data,
  dataKey,
  nameKey,
  color = "#14B8A6",
  gradient = true
}) {
  if (!data || data.length === 0) return null;

  const maxValue = Math.max(...data.map(d => d[dataKey]));
  const minValue = Math.min(...data.map(d => d[dataKey]));
  const range = maxValue - minValue || 1;

  const width = 800;
  const height = 200;
  const padding = 40;

  // Y-axis labels (volume values)
  const yAxisLabels = ['$0.0M', '$20M', '$40M', '$60M', '$80M'];

  const points = data.map((item, index) => {
    const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
    const y = height - padding - ((item[dataKey] - minValue) / range) * (height - 2 * padding);
    return { x, y, value: item[dataKey], time: item[nameKey] };
  });

  const pathData = points.reduce((acc, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }
    return `${acc} L ${point.x} ${point.y}`;
  }, '');

  const areaData = `${pathData} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  return (
    <div className="relative w-full h-full">
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        <defs>
          {gradient && (
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0.05" />
            </linearGradient>
          )}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines with Y-axis labels */}
        {[...Array(5)].map((_, i) => {
          const yPosition = padding + i * (height - 2 * padding) / 4;
          return (
            <g key={i}>
              <line
                x1={padding}
                y1={yPosition}
                x2={width - padding}
                y2={yPosition}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
              {/* Y-axis labels on the left */}
              <text
                x={padding - 10}
                y={yPosition + 4}
                textAnchor="end"
                fill="rgba(255,255,255,0.6)"
                fontSize="12"
                fontWeight="500"
              >
                {yAxisLabels[4 - i]}
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        {gradient && (
          <path
            d={areaData}
            fill="url(#areaGradient)"
            className="transition-all duration-500"
          />
        )}

        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke={color}
          strokeWidth="3"
          filter="url(#glow)"
          className="transition-all duration-500"
        />

        {/* Data points */}
        {points.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill={color}
              className="opacity-0 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="3"
              fill="white"
              className="opacity-0 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
            />
          </g>
        ))}

        {/* X-axis labels */}
        {points.map((point, index) =>
          index % 2 === 0 ? (
            <text
              key={index}
              x={point.x}
              y={height - 10}
              textAnchor="middle"
              fill="rgba(255,255,255,0.6)"
              fontSize="12"
            >
              {point.time}
            </text>
          ) : null
        )}
      </svg>
    </div>
  );
}

SimpleAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  nameKey: PropTypes.string.isRequired,
  color: PropTypes.string,
  gradient: PropTypes.bool,
};
