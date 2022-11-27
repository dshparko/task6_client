import Login from "./Login";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Messenger from "./Messenger";

function App() {


  return (
 <BrowserRouter>
   <Routes>
     <Route path="/" element ={<Login/>}/>
     <Route path="/messenger" element ={<Messenger/>}/>
   </Routes>
 </BrowserRouter>
  );
}

export default App;
