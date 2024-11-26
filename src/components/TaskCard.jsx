import avatarMale from "../assets/avatar-male.svg"

const TaskCard = ({ task, onDragStart, status }) => (
  <div
    className="p-4 bg-white  rounded border flex items-start space-x-4 cursor-grab active:cursor-grabbing  snap-center"
    key={task.id}
    id={task.id}
    draggable
    onDragStart={(e) => onDragStart(e, task.id, status)}
  >

    <div className="w-full">
      <p className="text-gray-700">{task.text}</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-sm font-semibold text-blue-500 ">{task.assignee}</p>
        <img src={avatarMale}
              alt="Avatar"
              className="w-6 h-6 rounded-full" />
      </div>
    </div>
  </div>
);
export default TaskCard;
