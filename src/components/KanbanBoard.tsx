import React, { useState } from "react"
import Column from "./Column"
import { Task } from "../types/task"

const KanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Design UI", description: "Create layout", status: "todo" },
    { id: "2", title: "API Setup", description: "Setup backend", status: "inprogress" },
    { id: "3", title: "Deploy App", description: "Use Vercel", status: "done" },
    { id: "4", title: "Helo", description: "Just for Check", status: "done" },

])

  const updateTaskStatus = (id: string, status: Task["status"]) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)))
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "20px",
        flexWrap: "wrap",
        padding: "10px",
      }}
    >
      {["todo", "inprogress", "done"].map((status) => (
        <Column
          key={status}
          title={status.toUpperCase()}
          tasks={tasks.filter((t) => t.status === status)}
          onDrop={(id) => updateTaskStatus(id, status as Task["status"])}
          onDelete={deleteTask}
        />
      ))}
    </div>
  )
}

export default KanbanBoard
