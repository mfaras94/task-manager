const TaskCard = ({ task, onDragStart, status }) => (
  <div
    className="p-4 bg-white  rounded border flex items-start space-x-4 cursor-grab active:cursor-grabbing  snap-center"
    key={task.id}
    id={task.id}
    draggable
    onDragStart={(e) => onDragStart(e, task.id, status)}
  >
    <img
      src="https://avatar.iran.liara.run/public/job/designer/male"
      alt="Finn"
      className="w-10 h-10 rounded-full"
    />
    <div className="w-full">
      <p className="text-gray-700">{task.text}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-sm font-semibold text-blue-500 ">{task.assignee}</p>
        <p className="text-xs text-gray-400">id:9</p>
      </div>
    </div>
  </div>
);
export default TaskCard;
