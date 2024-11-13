
const TaskCard = ({ task }) => (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
      <p className="text-gray-700 mb-3">{task.description}</p>
      <div className="space-x-2">
        <span className="inline-block bg-blue-500 text-white text-xs py-1 px-2 rounded-full">
          {task.priority}
        </span>
        <span className="inline-block bg-green-500 text-white text-xs py-1 px-2 rounded-full">
          {task.status}
        </span>
      </div>
    </div>
  )
export default TaskCard