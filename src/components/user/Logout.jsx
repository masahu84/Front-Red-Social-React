import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const Logout = () => {
  const { setAuth, setCounters } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Vacias el localstorage
    localStorage.clear();

    // Setear estados globales a vacio
    setAuth({});
    setCounters({});

    // Navigate (redireccion) al login
    navigate("/login");
  });

  return <h1>Cerrando sesión...</h1>;
};
