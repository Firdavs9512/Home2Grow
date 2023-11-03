import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./Layout/Index";
import IndexPage from "./Pages/Index";
import StartService from "./Pages/StartService";
import ListService from "./Pages/ListService";
import Profile from "./Pages/Profile";
import Setting from "./Pages/Setting";

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route element={<Index />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/start-service" element={<StartService />} />
          <Route path="/list-service" element={<ListService />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />

          <Route path="*" element={<IndexPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
