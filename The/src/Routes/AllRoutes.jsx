// AllRoutes.jsx
import { Route, Routes } from "react-router-dom";
import BookShelf from "../Components/BookShelf";
import Register from "../Components/Register";

const AllRoutes = () => {
  // Routing done
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<BookShelf />} />
    </Routes>
  );
};

export default AllRoutes;
