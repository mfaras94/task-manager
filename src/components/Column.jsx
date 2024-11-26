import TaskCard from "./TaskCard";

const Column = ({ item, onDrop, onDragStart, onDragOver }) => (
  <div className="w-[300px] bg-gray-50 shadow-lg border snap-center rounded">
    <h2 className="p-3 text-sm  font-bold text-gray-500 border-b border-gray-200 uppercase">
      {item.name} {item.tasks.length}
    </h2>
    <div
      className="p-1 space-y-1 min-h-80 overflow-auto  max-h-[calc(100vh-10rem)] scrollbar-thin snap-y snap-proximity "
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
