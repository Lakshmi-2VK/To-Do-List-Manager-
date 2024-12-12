import React, { useState } from 'react';

const TaskForm = ({ task = {}, onSubmit }) => {
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');
  const [completed, setCompleted] = useState(task.completed || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...task, title, description, completed });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div>
        <label className="form-label">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          placeholder="Task title"
          required
        />
      </div>
      <div>
        <label className="form-label">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
          placeholder="Task description"
          rows="4"
        ></textarea>
      </div>
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="form-checkbox"
          />
          <span>Completed</span>
        </label>
      </div>
      <button
        type="submit"
        className="btn-primary w-full"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
