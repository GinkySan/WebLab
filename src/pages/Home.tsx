import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 rounded-3xl mb-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
            alt="Students learning" 
            className="w-full h-full object-cover opacity-30"
          />
          
        </div>
        <div className="relative text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Найдите своего идеального преподавателя
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Персонализированное обучение с опытными преподавателями. 
            Отслеживайте свой прогресс и достигайте целей вместе с нами.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/courses">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                Начать обучение
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
  <div className="grid md:grid-cols-3 gap-8">
    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <div className="flex justify-center mb-4">
        <img 
          src="/card1.png" 
          alt="Персональный подход" 
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-4 text-center">Персональный подход</h3>
      <p className="text-gray-600 text-center">
        Индивидуальные программы обучения, адаптированные под ваши цели и темп.
      </p>
    </div>

    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <div className="flex justify-center mb-4">
        <img 
          src="/card2.png" 
          alt="Опытные преподаватели" 
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-4 text-center">Опытные преподаватели</h3>
      <p className="text-gray-600 text-center">
        Учитесь у лучших специалистов с подтвержденным опытом преподавания.
      </p>
    </div>

    <div className="p-6 bg-white rounded-lg shadow-sm border">
      <div className="flex justify-center mb-4">
        <img 
          src="/card3.png" 
          alt="Отслеживание прогресса" 
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <h3 className="font-heading text-xl font-semibold mb-4 text-center">Отслеживание прогресса</h3>
      <p className="text-gray-600 text-center">
        Удобные инструменты для мониторинга успеваемости и достижений.
      </p>
    </div>
  </div>
</section>
<footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Колонка 1: О компании */}
      <div>
        <h3 className="font-heading text-xl font-semibold mb-4">О компании</h3>
        <p className="text-gray-400">
          Мы предоставляем персонализированное обучение с опытными преподавателями. 
          Наша цель — помочь вам достичь успеха в учебе и карьере.
        </p>
        <p className="text-gray-400 mt-4">
          <strong>Адрес:</strong> г. Москва, ул. Пушкина, д. 10
        </p>
        <p className="text-gray-400">
          <strong>Телефон:</strong> +7 (495) 123-45-67
        </p>
        <p className="text-gray-400">
          <strong>Email:</strong> info@example.com
        </p>
      </div>

      {/* Колонка 2: Ссылки */}
      <div>
        <h3 className="font-heading text-xl font-semibold mb-4">Ссылки</h3>
        <ul className="text-gray-400">
          <li className="mb-2">
            <a href="/about" className="hover:text-primary-500">О нас</a>
          </li>
          <li className="mb-2">
            <a href="/courses" className="hover:text-primary-500">Курсы</a>
          </li>
          <li className="mb-2">
            <a href="/contact" className="hover:text-primary-500">Контакты</a>
          </li>
          <li className="mb-2">
            <a href="/privacy-policy" className="hover:text-primary-500">Политика конфиденциальности</a>
          </li>
          <li className="mb-2">
            <a href="/terms-of-service" className="hover:text-primary-500">Условия использования</a>
          </li>
        </ul>
      </div>

      {/* Колонка 3: Социальные сети */}
      <div>
        <h3 className="font-heading text-xl font-semibold mb-4">Социальные сети</h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96 5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-9.96-9.96-9.96zm5.15 7.12c.15.34.25.7.25 1.08 0 1.54-1.25 2.78-2.78 2.78-.38 0-.74-.09-1.08-.25.59-.7.97-1.62.97-2.63 0-1.01-.38-1.93-.97-2.63.34-.16.7-.25 1.08-.25 1.53 0 2.78 1.25 2.78 2.78 0 .38-.1.74-.25 1.08zM12 9.15c-.77 0-1.4.63-1.4 1.4 0 .77.63 1.4 1.4 1.4.77 0 1.4-.63 1.4-1.4 0-.77-.63-1.4-1.4-1.4zm-3.63-1.63c-.16.34-.25.7-.25 1.08 0 1.54 1.25 2.78 2.78 2.78.38 0 .74-.09 1.08-.25-.59-.7-.97-1.62-.97-2.63 0-1.01.38-1.93.97-2.63-.34-.16-.7-.25-1.08-.25-1.53 0-2.78 1.25-2.78 2.78 0 .38.1.74.25 1.08zM12 5.5c-3.04 0-5.5 2.46-5.5 5.5 0 3.04 2.46 5.5 5.5 5.5 3.04 0 5.5-2.46 5.5-5.5 0-3.04-2.46-5.5-5.5-5.5z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.225 0z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Название компании. Все права защищены.</p>
    </div>
  </div>
</footer>
    </div>
    
  );
};

export default Home;