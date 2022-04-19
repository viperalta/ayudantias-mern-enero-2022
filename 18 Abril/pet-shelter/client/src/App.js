import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import Create from "./views/Create";
import Detail from "./views/Detail";
import Edit from "./views/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route path="/pets/new" element={<Create></Create>} />
          <Route path="/pets/:id" element={<Detail></Detail>} />
          <Route path="/pets/:id/edit" element={<Edit></Edit>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
