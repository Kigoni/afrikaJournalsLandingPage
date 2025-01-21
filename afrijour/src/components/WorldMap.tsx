import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

interface TooltipState {
  content: string;
  x: number;
  y: number;
  visible: boolean;
}

const INITIAL_TOOLTIP_STATE: TooltipState = { content: '', x: 0, y: 0, visible: false };

const Worldmap: React.FC = () => {
  const [tooltip, setTooltip] = useState<TooltipState>(INITIAL_TOOLTIP_STATE);

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center overflow-hidden">
      {/* Glowing Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.1),transparent_70%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,140,0,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,69,0,0.1),transparent_50%)]" />
      </div>

      {/* Header */}
      <header className="mt-10 mb-6 text-center z-10 relative">
        <h1 className="text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 text-transparent bg-clip-text">
            African Journal Explorer
          </span>
        </h1>
        <p className="text-lg text-amber mt-4">
          Click on any country to explore its Journals details
        </p>
      </header>

      {/* Map Container */}
      <div className="relative w-4/5 h-[600px]  z-10 mb-5">
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            scale: 450,
            center: [17, 3]
          }}
          className="w-full h-full"
        >
          <Geographies geography="https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/africa.geojson">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#1a1a2e',
                      stroke: 'rgba(255, 165, 0, 0.6)',
                      strokeWidth: 0.5,
                      filter: 'drop-shadow(0 0 2px rgba(255, 165, 0, 0.3))',
                    },
                    hover: {
                      fill: '#2a2a4e',
                      stroke: 'rgba(255, 165, 0, 0.9)',
                      strokeWidth: 1,
                      filter: 'drop-shadow(0 0 4px rgba(255, 165, 0, 0.5))',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: '#3a3a6e',
                      stroke: 'rgba(255, 165, 0, 1)',
                      strokeWidth: 1,
                      filter: 'drop-shadow(0 0 6px rgba(255, 165, 0, 0.7))',
                    },
                  }}
                  onMouseEnter={(e) => {
                    setTooltip({
                      content: geo.properties.name,
                      x: e.clientX,
                      y: e.clientY,
                      visible: true,
                    });
                  }}
                  onMouseMove={(e) => {
                    setTooltip(prev => ({
                      ...prev,
                      x: e.clientX,
                      y: e.clientY,
                    }));
                  }}
                  onMouseLeave={() => {
                    setTooltip(prev => ({ ...prev, visible: false }));
                  }}
                  onClick={() => {
                    window.location.href = `https://afrijour.web.app/?query=${geo.properties.name
                      .replace(/\s+/g, '')
                      .toLowerCase()}`;
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>

        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="fixed bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg pointer-events-none z-50 border border-amber-500/30"
            style={{
              left: tooltip.x + 10,
              top: tooltip.y - 40,
              transform: 'translateX(-50%)',
            }}
          >
            <span className="text-amber-200 font-medium">{tooltip.content}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Worldmap;