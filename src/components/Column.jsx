import TaskCard from "./TaskCard";

const Column = ({ item, onDrop, onDragStart, onDragOver }) => (
  <div className="w-1/4 bg-white shadow-lg ">
    <h2 className="p-4 text-lg font-semibold text-gray-700 border-b border-blue-200">
      {item.name}
    </h2>
    <div
      className="p-4 space-y-4 min-h-80 overflow-auto  max-h-dvh scrollbar-thin "
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, item.name)}
    >
      {item.tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDragStart={onDragStart}
          status={item.name}
        />
      ))}
    </div>
  </div>
);

export default Column;
