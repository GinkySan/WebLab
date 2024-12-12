import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Профиль пользователя</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Аватар и информация о пользователе */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center">
                  <img 
                    src="/cat.png" 
                    alt="Аватар пользователя" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Александр Петров</h2>
                  <p className="text-gray-600">student@example.com</p>
                </div>
              </div>

              {/* Статистика пользователя */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Моя статистика</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h4 className="text-gray-800 font-semibold">Курсов</h4>
                    <p className="text-gray-600">3</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h4 className="text-gray-800 font-semibold">Достижений</h4>
                    <p className="text-gray-600">5</p>
                  </div>
                </div>
              </div>

              {/* Мои курсы */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Мои курсы</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">У вас пока нет активных курсов</p>
                  <Button className="mt-4 bg-primary-600 hover:bg-primary-700">Найти курсы</Button>
                </div>
              </div>

              {/* Достижения */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Достижения</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Завершил 3 урока</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-600">Получил сертификат</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
};

export default Profile;