import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editTask } from '../redux/taskSlice';
import TaskForm from '../components/TaskForm';

const EditTaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id.toString() === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditTask = (updatedTask) => {
    dispatch(editTask(updatedTask));
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold text-black mb-4">Edit Task</h1>
      <TaskForm task={task} onSubmit={handleEditTask} />
    </div>
  );
};

export default EditTaskPage;
