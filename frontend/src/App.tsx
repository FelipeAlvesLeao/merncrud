import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Homepage, Test} from "./pages/index";
import {Navbar} from "./components/index"
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <div className="pages">
      <Routes>
        <Route 
          path="/"
          element={<><Homepage></Homepage><Test></Test></>}
        />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
