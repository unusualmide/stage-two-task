import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="movies/:id" element={<Movies/>} />

      </Routes>
    </HashRouter>
    
  );
}

export default App;
