// src/components/ui/tabs.jsx

import React, { useState } from "react";

export function Tabs({ children }) {
  return <div>{children}</div>;
}

export function TabsList({ children }) {
  return <div style={{ display: "flex", gap: "10px" }}>{children}</div>;
}

export function TabsTrigger({ value, selected, onSelect, children }) {
  return (
    <button
      onClick={() => onSelect(value)}
      style={{
        padding: "10px 20px",
        backgroundColor: selected === value ? "#0070f3" : "#e0e0e0",
        color: selected === value ? "white" : "black",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, selected, children }) {
  return selected === value ? <div style={{ marginTop: "20px" }}>{children}</div> : null;
}
