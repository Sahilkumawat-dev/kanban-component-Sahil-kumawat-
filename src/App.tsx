import React from "react"
import KanbanBoard from "./components/KanbanBoard"

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "2rem",
          marginBottom: "20px",
          color: "#333",
        }}
      >
      </h1>

      <KanbanBoard />
    </div>
  )
}

export default App
