import './App.css';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import CourseManagement from './pages/CourseManagement';
import StudentManagement from './pages/StudentManagement';
import Home from './pages/Home';

function App() {
  return (
    <>
    <div className='relative w-full'><NavBar/></div>
    <div className='flex'>
      <SideBar />
      <div className="p-5 w-full">
        <Routes>
          <Route path="course" element={<CourseManagement />} />
          <Route path="student" element={<StudentManagement />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>

    
    </>
  )
}

export default App