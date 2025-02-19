import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/*" element={<UserLayout />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
