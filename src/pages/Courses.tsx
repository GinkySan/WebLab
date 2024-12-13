import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AddCourseModal from "./AddCourseModal"; 

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Получение курсов
  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data); 
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Проверка роли
  const checkRole = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await axios.get("http://localhost:3000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsAdmin(response.data.role === "admin"); 
      } catch (error) {
        console.error("Error checking role:", error);
      }
    }
  };

  // Подписка
  const handleSubscribe = async (courseId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:3000/courses/buy",
        { courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Вы успешно подписались на курс!");
    } catch (error) {
      console.error("Error subscribing to course:", error);
      alert("Ошибка при подписке на курс. Пожалуйста, попробуйте снова.");
    }
  };

  useEffect(() => {
    fetchCourses(); 
    checkRole(); 
  }, []);

  return (
    <div>
      <section className="relative h-64 md:h-96"> 
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Откройте новые горизонты с нашими курсами
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
            Выберите курс, который поможет вам достичь успеха. Наши опытные преподаватели
            обеспечат вас знаниями и навыками для будущего.
          </p>
          {isAdmin && <AddCourseModal onCourseAdded={fetchCourses} />}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl font-bold mb-8">Доступные курсы</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">{course.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">Преподаватель: {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Цена: {course.price} руб.</span>
                    <Button
                      onClick={() => handleSubscribe(course.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                      Подписаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;