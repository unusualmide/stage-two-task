import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="movies/:id" element={<Movies/>} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
