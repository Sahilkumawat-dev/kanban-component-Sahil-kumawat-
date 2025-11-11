import React from "react"
import { Task } from "../types/task"

interface Props {
  task: Task
  onDelete: (id: string) => void
}

const TaskCard: React.FC<Props> = ({ task, onDelete }) => {
  return (
    <div
      draggable
      onDragStart={(e) => e.dataTransfer.setData("id", task.id)}
      style={{
        background: "white",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h4>{task.title}</h4>
      <p style={{ fontSize: "14px", color: "#555" }}>{task.description}</p>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default TaskCard
