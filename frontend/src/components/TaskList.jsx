import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.id} className="card">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <Link
              to={`/edit/${task.id}`}
              className="btn-secondary text-sm"
            >
              Edit
            </Link>
          </div>
          <p className="text-gray-600 mt-2">{task.description}</p>
          <span
            className={`status-badge mt-4 ${
              task.completed ? 'badge-completed' : 'badge-pending'
            }`}
          >
            {task.completed ? 'Completed' : 'Pending'}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
