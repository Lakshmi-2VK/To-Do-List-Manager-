import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

const AddTaskPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTask = (task) => {
    dispatch(addTask({ ...task, id: Date.now() }));
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-black mb-4">Add Task</h1>
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
};

export default AddTaskPage;
