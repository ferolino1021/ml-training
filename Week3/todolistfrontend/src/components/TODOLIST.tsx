import { Task } from "../app/types";

interface TODOLISTProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number, completed: boolean) => void;
}

const TODOLIST: React.FC<TODOLISTProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggle(task.id, task.completed)}
                />
                {task.title}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TODOLIST;
