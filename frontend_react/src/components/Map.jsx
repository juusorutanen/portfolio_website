
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [6,11],
        scale: 1800
      }}
      style={{width:"100%", height:"100%", borderRadius: "50%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#222"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[23.945831, 60.192059]} 
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#0acc74",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#0acc74">
          {"Helsinki"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;