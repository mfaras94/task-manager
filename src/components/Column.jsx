import TaskCard from './TaskCard';

const Column = ({ status, tasks }) => (
  <div className="bg-white shadow-md rounded-lg p-4 w-72 m-2">
    <h2 className="text-xl font-semibold mb-4">{status}</h2>
    {tasks.map(task => (
      <TaskCard key={task.id} task={task} />
    ))}
  </div>
);

export default Column;
