import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//components
import Navigator from "./components/Navigator";
//pages
import Home from "./pages/Home";
import Example from './pages/Example';
import Description from './pages/Description';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Navigator />
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/description" element={<Description />} />
            <Route exact path="/example" element={<Example />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <p className="text-center p-2">Designed by JFernandoHerreraC</p> 
      </div>
    </div>
  );
}

export default App;
