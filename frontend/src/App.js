//import routing packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import page components
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import "./App.css";

//App component(frontend entry point)
function App() {
  return (
    <BrowserRouter> 
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;


