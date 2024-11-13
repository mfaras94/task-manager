import { useState } from "react";

const Board = () => {
 
  const [tasks, setTasks] = useState({
    todo: [
      { id: "task1", text: "Don't you always call", assignee: "Finn" },

    ],
    inProgress: [
      { id: "task2", text: "Always call", assignee: "Finn" },
    ],
  });


  const onDragStart = (e,taskId, sourceColumn) => {
    e.dataTransfer.setData('taskId', taskId)
    e.dataTransfer.setData('sourceColumn', sourceColumn)
  }

  const onDragOver = (e) => {
    e.preventDefault()
 
  }


  const onDrop = (e,targetColumn) => {
    const taskId = e.dataTransfer.getData("taskId");
    const sourceColumn = e.dataTransfer.getData("sourceColumn");


    if (sourceColumn === targetColumn) return;
    const taskToMove = tasks[sourceColumn].find((task) => task.id === taskId);

    setTasks((prevTasks) => ({
      ...prevTasks,
      [sourceColumn]: prevTasks[sourceColumn].filter((task) => task.id !== taskId),
      [targetColumn]: [...prevTasks[targetColumn], taskToMove],
    }));
   
  }





  return (
    <div className="flex items-start justify-center p-6 space-x-6 bg-blue-200 min-h-screen">

    <div className="w-1/4 bg-blue-50 shadow-lg"
  
    >
      <h2 className="p-4 text-lg font-semibold text-gray-700 border-b border-blue-200">To Do</h2>
      <div className="p-4 space-y-4 min-h-80" onDragOver={onDragOver} onDrop={(e) => onDrop(e,"todo")}>  
      {tasks.todo.map(task => (
             <div className="p-4 bg-white shadow flex items-start space-x-4" key={task.id} id={task.id} 
             draggable
              onDragStart={(e) => onDragStart(e,task.id,"todo")}
             >
             <img src="https://avatar.iran.liara.run/public/job/designer/male" alt="Finn" className="w-10 h-10 rounded-full" />
             <div className="w-full">
               <p className="text-gray-700">{task.text}</p>
               <div className="flex justify-between items-center mt-2">
               <p className="text-sm font-semibold text-blue-500 ">{task.assignee}</p>
               <p className="text-xs text-gray-400">id:9</p>
               </div>
             </div>
           </div>
      ))}
     
      </div>
    </div>

    <div className="w-1/4 bg-blue-50  shadow-lg ">
      <h2 className="p-4 text-lg font-semibold text-gray-700 border-b border-blue-200">In Progress</h2>
      <div className="p-4 space-y-4 min-h-80" onDragOver={onDragOver} onDrop={(e) => onDrop(e,"inProgress")}> 
        {tasks.inProgress.map(inProgress => (
             <div className="p-4 bg-white shadow flex items-start space-x-4" key={inProgress.id} id={inProgress.id}  
             onDragStart={(e) => onDragStart(e, inProgress.id, "inProgress")}
             draggable
             >
             <img src="https://avatar.iran.liara.run/public/job/designer/male" alt="Finn" className="w-10 h-10 rounded-full" />
             <div  className="w-full">
               <p className="text-gray-700">{inProgress.text}</p>
               <div className="flex justify-between items-center mt-2">
               <p className="text-sm font-semibold text-blue-500 ">{inProgress.assignee}</p>
              <p className="text-xs text-gray-400">id:9</p>
               </div>
             </div>
           </div>
        ))}
     
      </div>
    </div>
    <div className="w-1/4 bg-blue-50  shadow-lg ">
      <h2 className="p-4 text-lg font-semibold text-gray-700 border-b border-blue-200">QA</h2>
      <div className="p-4 space-y-4 min-h-80" onDragOver={onDragOver} onDrop={(e) => onDrop(e,"inProgress")}> 
        {tasks.inProgress.map(inProgress => (
             <div className="p-4 bg-white shadow flex items-start space-x-4" key={inProgress.id} id={inProgress.id}  
             onDragStart={(e) => onDragStart(e, inProgress.id, "inProgress")}
             draggable
             >
             <img src="https://avatar.iran.liara.run/public/job/designer/male" alt="Finn" className="w-10 h-10 rounded-full" />
             <div  className="w-full">
               <p className="text-gray-700">{inProgress.text}</p>
               <div className="flex justify-between items-center mt-2">
               <p className="text-sm font-semibold text-blue-500 ">{inProgress.assignee}</p>
              <p className="text-xs text-gray-400">id:9</p>
               </div>
             </div>
           </div>
        ))}
     
      </div>
    </div>
    <div className="w-1/4 bg-blue-50  shadow-lg ">
      <h2 className="p-4 text-lg font-semibold text-gray-700 border-b border-blue-200">Done</h2>
      <div className="p-4 space-y-4 min-h-80" onDragOver={onDragOver} onDrop={(e) => onDrop(e,"inProgress")}> 
        {tasks.inProgress.map(inProgress => (
             <div className="p-4 bg-white shadow flex items-start space-x-4" key={inProgress.id} id={inProgress.id}  
             onDragStart={(e) => onDragStart(e, inProgress.id, "inProgress")}
             draggable
             >
             <img src="https://avatar.iran.liara.run/public/job/designer/male" alt="Finn" className="w-10 h-10 rounded-full" />
             <div  className="w-full">
               <p className="text-gray-700">{inProgress.text}</p>
               <div className="flex justify-between items-center mt-2">
               <p className="text-sm font-semibold text-blue-500 ">{inProgress.assignee}</p>
              <p className="text-xs text-gray-400">id:9</p>
               </div>
             </div>
           </div>
        ))}
     
      </div>
    </div>

  </div>
  );
};

export default Board;
