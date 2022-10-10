import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

/*---------------------[video: https://youtu.be/ATz8wg6sg30?t=2760]---------------------*/

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
