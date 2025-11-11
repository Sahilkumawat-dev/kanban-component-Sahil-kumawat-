import React from "react"
import { Task } from "../types/task"
import TaskCard from "./TaskCard"

interface Props {
  title: string
  tasks: Task[]
  onDrop: (id: string) => void
  onDelete: (id: string) => void
}

const Column: React.FC<Props> = ({ title, tasks, onDrop, onDelete }) => {
  const handleDrop = (e: React.DragEvent) => {
    const id = e.dataTransfer.getData("id")
    onDrop(id)
  }

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      style={{
        flex: "1 1 30%",
        background: "#f4f4f4",
        borderRadius: "10px",
        padding: "10px",
        minHeight: "300px",
      }}
    >
      <h3>{title}</h3>
      {tasks.map((t) => (
        <TaskCard key={t.id} task={t} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default Column
