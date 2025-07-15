// src/components/ui/card.jsx

import React from "react";

export function Card({ children, style = {}, ...props }) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, style = {}, ...props }) {
  return (
    <div
      style={{
        marginTop: "10px",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
