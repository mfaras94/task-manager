import { useAuth } from "../context/AuthContext";
import Board from "../components/Board"

const Dashboard = () => {
  const { handleLogOut } = useAuth();
  return (
    <div>
      Task Manager Dashboard{" "}
      <button className="bg-red-500" onClick={() => handleLogOut()}>
        Logout
      </button>

      <Board/>
    </div>
  );
};

export default Dashboard;
