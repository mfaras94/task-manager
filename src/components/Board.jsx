import { useState } from "react";
import Column from "./Column";

const Board = () => {
  const [tasks, setTasks] = useState([
    {
      name: "Todo",
      tasks: [{ id: 1, text: "Learn Next.js", assignee: "Faras" }],
    },
    {
      name: "In Progress",
      tasks: [
        { id: 2, text: "Learn Advanced React.js", assignee: "Faras" },
        { id: 3, text: "React Testing / Jest", assignee: "Faras" },
        { id: 4, text: "Learn Advanced Concepts", assignee: "Faras" },
      ],
    },
    {
      name: "QA",
      tasks: [],
    },
    {
      name: "Done",
      tasks: [
        { id: 5, text: "Learn React.js", assignee: "Faras" },
        { id: 6, text: "Learn Redux/Toolkit", assignee: "Faras" },
        { id: 7, text: "Learn Context API", assignee: "Faras" },
      ],
    },
  ]);

  const [hide, setHide] = useState(false);

  const onDragStart = (e, taskId, sourceColumn) => {
    e.dataTransfer.setData("taskId", taskId.toString());
    e.dataTransfer.setData("sourceColumn", sourceColumn);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, targetColumn) => {
    const taskId = parseInt(e.dataTransfer.getData("taskId"), 10);
    const sourceColumn = e.dataTransfer.getData("sourceColumn");

    if (sourceColumn === targetColumn) return;

    // Find the task and remove it from the source column
    const sourceColumnObj = tasks.find((col) => col.name === sourceColumn);
    const targetColumnObj = tasks.find((col) => col.name === targetColumn);

    const taskToMove = sourceColumnObj.tasks.find((task) => task.id === taskId);

    console.log(taskToMove);

    // Remove task from the source column and add it to the target column
    const updatedSourceColumnTasks = sourceColumnObj.tasks.filter(
      (task) => task.id !== taskId
    );

    const updatedTargetColumnTasks = [...targetColumnObj.tasks, taskToMove];

    // Update the tasks state with the new column tasks
    const updatedTasks = tasks.map((col) => {
      if (col.name === sourceColumn) {
        return { ...col, tasks: updatedSourceColumnTasks };
      } else if (col.name === targetColumn) {
        return { ...col, tasks: updatedTargetColumnTasks };
      }
      return col;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="flex items-start justify-center p-6 space-x-6 bg-blue-200 min-h-dvh">
      {tasks.map((item, index) => (
        <Column
          key={index}
          item={item}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
};

export default Board;
