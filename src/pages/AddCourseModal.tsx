import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

const AddCourseModal = ({ onCourseAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [instructor, setInstructor] = useState("");

  const handleSubmit = async () => {

    if (!title || !description || !price || !instructor) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3000/courses", 
        { title, description, price: parseFloat(price), instructor }, 
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      onCourseAdded(); 
      setTitle("");
      setDescription("");
      setPrice("");
      setInstructor("");
      alert("Курс успешно добавлен!");
    } catch (error) {
      console.error("Ошибка при добавлении курса:", error);
      alert("Ошибка при добавлении курса. Пожалуйста, попробуйте снова.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Добавить курс
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-lg shadow-lg max-w-md">
        <DialogTitle className="text-2xl font-bold text-gray-800 mb-6">
          Добавить новый курс
        </DialogTitle>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-gray-700">
              Название курса
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="description" className="text-gray-700">
              Описание курса
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="price" className="text-gray-700">
              Цена курса
            </Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="instructor" className="text-gray-700">
              Преподаватель
            </Label>
            <Input
              id="instructor"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Сохранить
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCourseModal;