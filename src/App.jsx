import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "./Components/Home";
import Docs from "./Components/Docs.jsx";
import Page404 from "./Components/Page404.jsx";
import LandingPage from "./Components/LandingPage.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />

          <Route path="/docs" element={<Docs />}>
          <Route index element={<LandingPage/>} />
          </Route>


          <Route path="*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
