import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Myfooter from "./components/Myfooter";

function App() {
  //!!deleted! const [count, setCount] = useState(0)

  return (
    <>
      {/* //!deleted!   <div className=""> Hello, MERN!</div> */}
      {/* <nav>site logo</nav> */}
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Myfooter />
    </>
  );
}

export default App;
