import logo from "./logo.svg";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate ,Outlet } from "react-router-dom";
import { AuthContextProvider } from "./Contexts/AuthContext";
import { useContext } from "react";
import AuthContext from "./Contexts/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = () => {
    if (!currentUser) {
      return <Login />
    }
    else {
      return <Outlet />
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
