import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Проверка авторизации
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, []);

  // Обработчик выхода
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setIsLoggedIn(false); 
    navigate("/"); 
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Логотип */}
        <div className="text-xl font-bold text-blue-600">
          <Link to="/">Learner</Link>
        </div>

        {/* Основные пункты меню */}
        <div className="flex-grow flex justify-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Главная
          </Link>
          <Link to="/courses" className="text-gray-600 hover:text-blue-600">
            Курсы
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">
            О нас
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-blue-600">
            Профиль
          </Link>
        </div>

        {/* Кнопки авторизации */}
        <div className="space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Выйти
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Войти
              </Link>
              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Регистрация
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;