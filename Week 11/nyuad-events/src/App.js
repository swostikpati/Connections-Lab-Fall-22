import { Route, Routes } from "react-router-dom"
//Route - defines different paths and connect them with different components
//Routes - to denote only one of the components should be rendered

import AllEventsPage from "./pages/AllEvents";
import CreateEventsPage from "./pages/CreateEvent";
import FavoritesPage from "./pages/Favorites";
// import Navbar from "./components/layout/Navbar";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllEventsPage />}></Route>
        <Route path="/create-event" element={<CreateEventsPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>);
}

export default App;


//Comments
// (1) version 6 comes all updated so no need for using keywords like exact and wrapping everything around switch
// (2) components should be typically focussed on doing a single job - therefore it is a good idea to have leaner componenets