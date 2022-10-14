import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Sorting from './pages/sorting/Sorting';
import PathFinding from './pages/path-finding/PathFinding'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<Sorting />} />
        <Route path="/path-finding" element={<PathFinding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
