import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-xl font-bold text-primary-600">
            EduPortal
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
              Главная
            </Link>
            <Link to="/courses" className="text-gray-600 hover:text-primary-600 transition-colors">
              Курсы
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
              О нас
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-primary-600 transition-colors">
              Профиль
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Войти</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;