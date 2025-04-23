import { useEffect, useState } from "react";
import { CourseData } from "../data/CourseData";
import { IoMdAdd } from "react-icons/io";

function CourseManagement() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false); // track if editing or adding

  useEffect(() => {
    setData(CourseData);
  }, []);

  const handleEdit = (courseId) => {
    const course = data.find((item) => item.id === courseId);
    if (course) {
      setId(course.id);
      setName(course.name);
      setEditMode(true);
      setShowModal(true);
    }
  };

  const handleDelete = (courseId) => {
    if (window.confirm(`Are you sure to delete course no. ${courseId}?`)) {
      const updatedData = data.filter((item) => item.id !== courseId);
      setData(updatedData);
    }
  };

  const handleSave = () => {
    if (editMode) {
      const index = data.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedData = [...data];
        updatedData[index] = { ...updatedData[index], id, name };
        setData(updatedData);
      }
    } else {
      const newCourse = { id, name };
      setData((prevData) => [...prevData, newCourse]);
    }
    clearForm();
    setShowModal(false);
  };

  const handleCancel = () => {
    clearForm();
    setShowModal(false);
  };

  const clearForm = () => {
    setId("");
    setName("");
    setEditMode(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Course Management</h2>
        <button
          onClick={() => {
            clearForm();
            setShowModal(true);}}
          
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          <IoMdAdd className="mr-1" />
          New Course
        </button>
      </div>

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <td className="font-semibold">Course Id</td>
            <td className="font-semibold">Course Name</td>
            <td className="font-semibold">Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-slate-100">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td className="space-x-2">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="w-[100px] bg-green-300 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-[100px] bg-red-400 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-[400px] shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              {editMode ? "Edit Course" : "Add New Course"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block">Course ID</label>
                <input
                  type="text"
                  value={id}
                  className="border p-1 w-full"
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div>
                <label className="block">Course Name</label>
                <input
                  type="text"
                  value={name}
                  className="border p-1 w-full"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-1 rounded-md"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-400 text-white px-4 py-1 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseManagement;