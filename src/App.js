import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import AddRecord from './Components/Pages/AddRecord';
import ShowData from './Components/Pages/ShowData';
import DeleteRecord from './Components/Pages/DeleteRecord';
import UpdateRecord from './Components/Pages/UpdateRecord';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <SideBar/>
        <Routes>
          <Route
            path="/"
            element={
              <>
              <SideBar/>
              </>
            }
          />
          <Route
            path="/show-data"
            element={<ShowData />}
          />
          <Route
            path="/add-record"
            element={<AddRecord />}
          />
          <Route
            path="/delete-record"
            element={<DeleteRecord />}
          />
          <Route
            path="/update-record"
            element={<UpdateRecord />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





