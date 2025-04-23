import { useEffect, useState } from "react";
import { StudentData } from "../data/StudentData";
import { CourseData } from "../data/CourseData";
import { IoMdAdd } from "react-icons/io";

function StudentManagement() {
  const [data, setData] = useState([]);
  const [Sid, setSid] = useState("");
  const [Sname, setSname] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [studentDetails, setStudentDetails] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setData(StudentData); 
  }, []);

  const handleEdit = (studentId) => {
    const student = data.find((item) => item.Sid === studentId);
    if (student) {
      setSid(student.Sid);
      setSname(student.Sname);
      setAddress(student.address);
      setId(student.id);
      setIsEditMode(true);
      setIsModalOpen(true);
    }
  };

  const handleDelete = (studentId) => {
    if (window.confirm(`Are you sure to delete student no. ${studentId}?`)) {
      const updatedData = data.filter((item) => item.Sid !== studentId);
      setData(updatedData);
    }
  };

  const handleSave = () => {
    const newStudent = { Sid, Sname, address, id };
    if (isEditMode) {
      const index = data.findIndex((item) => item.Sid === Sid);
      if (index !== -1) {
        const updatedData = [...data];
        updatedData[index] = newStudent;
        setData(updatedData);
      }
    } else {
      setData([...data, newStudent]);
    }
    clearForm();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    clearForm();
    setIsModalOpen(false);
  };

  const handleDetails = (studentId) => {
    const student = data.find((item) => item.Sid === studentId);
    if (student) {
      const course = CourseData.find((course) => course.id === student.id);
      setStudentDetails({ ...student, courseName: course?.name });
    }
  };

  const clearForm = () => {
    setSid("");
    setSname("");
    setAddress("");
    setId("");
    setIsEditMode(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Student Management</div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <IoMdAdd className="mr-1" /> New Student
        </button>
      </div>

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <td>Student Id</td>
            <td>Student Name</td>
            <td>Address</td>
            <td>Enrolled Course ID</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-slate-100">
              <td>{item.Sid}</td>
              <td>{item.Sname}</td>
              <td>{item.address}</td>
              <td>{item.id}</td>
              <td className="space-x-2">
                <button
                  onClick={() => handleEdit(item.Sid)}
                  className="w-[100px] bg-green-300 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.Sid)}
                  className="w-[100px] bg-red-400 rounded-md"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleDetails(item.Sid)}
                  className="w-[100px] bg-blue-300 rounded-md"
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {studentDetails && (
        <div className="mt-4 p-4 border bg-gray-100 rounded-md">
          <h3 className="font-semibold">Student Details</h3>
          <p><strong>Student Id:</strong> {studentDetails.Sid}</p>
          <p><strong>Student Name:</strong> {studentDetails.Sname}</p>
          <p><strong>Address:</strong> {studentDetails.address}</p>
          <p><strong>Enrolled Course:</strong> {studentDetails.courseName}</p>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">
              {isEditMode ? "Edit Student" : "Add New Student"}
            </h2>

            <label className="block mb-2">
              Student Id
              <input
                type="text"
                value={Sid}
                onChange={(e) => setSid(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </label>

            <label className="block mb-2">
              Student Name
              <input
                type="text"
                value={Sname}
                onChange={(e) => setSname(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </label>

            <label className="block mb-2">
              Address
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </label>

            <label className="block mb-4">
              Enrolled Course
              <select
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              >
                <option value="">Select Course</option>
                {CourseData.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </label>

            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCancel}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentManagement;