"use client";
import { useState, useEffect } from "react";
import AddTask from "@/components/AddTask";
import TODOLIST from "@/components/TODOLIST";
import { getTasks, deleteTask, updateTask } from "../app/service/taskService";
import { Task } from "../app/types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const fetchedTasks = await getTasks();
    setTasks(fetchedTasks);
  };

  const handleTaskAdded = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = async (id: number, completed: boolean) => {
    const updatedTask = await updateTask(id, { completed: !completed });
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">TODOLIST</h1>
        <AddTask onTaskAdded={handleTaskAdded} />
      </div>
      <TODOLIST
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggle={handleToggleTask}
      />
    </main>
  );
}
