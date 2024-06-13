import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { createTask } from "../app/service/taskService";
import { Task } from "../app/types";
import axios, { AxiosError } from "axios";

interface AddTaskProps {
  onTaskAdded: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      try {
        const newTask = await createTask({ title, completed: false });
        onTaskAdded(newTask);
        setTitle("");
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Failed to add task:", error.message);
          if (error.response) {
            console.error("Response data:", error.response.data);
          }
        } else {
          console.error("Unexpected error adding task:", error);
        }
      }
    }
  };

  return (
    <form onSubmit={handleAddTask} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="border p-2 flex-grow"
      />
      <button type="submit" className="btn btn-primary flex items-center">
        Add Task <AiOutlinePlus className="ml-2" size={10} />
      </button>
    </form>
  );
};

export default AddTask;
