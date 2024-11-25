import { TailSpin } from "react-loader-spinner";
import { useAuth } from "../context/AuthContext";

const Loader = () => {
  const {isLoading} = useAuth()


  return (
    isLoading &&
      <div className="w-screen h-screen flex justify-center items-center fixed bg-white">
        <TailSpin/>
       </div>
    
  );
};

export default Loader;
