import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/taskSlice';
import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">Task List</h1>
        <Link to="/add" className="btn-primary">
          Add Task
        </Link>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;
