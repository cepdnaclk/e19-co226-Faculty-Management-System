import { createBrowserRouter, Route, Routes } from 'react-router-dom';

// Admin UI
import AdminHome from '../containers/admin/Adminhome.jsx';
import StudentDetails from '../containers/admin/StudentDetails.jsx';
import TeacherDetails from '../containers/admin/TeacherDetails.jsx';
import DepartmentDetails from '../containers/admin/DepartmentDetails.jsx';
import CaurseDetails from '../containers/admin/CaurseDetails.jsx';
import ProjectDetails from '../containers/admin/ProjectDetails.jsx';
import AllStudents from '../containers/admin/AllStudents.jsx';
import AllProjects from '../containers/admin/AllProjects.jsx';
import AllTeachers from '../containers/admin/AllTeachers.jsx';
import StudentComment from '../containers/admin/StudentComment.jsx';

// import StudentComment from '../containers/admin/StudentComment.jsx';

// Student UI
import DepartmentDetailsbyStudent from '../containers/student/DepartmentDetails.jsx';
import CaurseDetailsbyStudent from '../containers/student/CaurseDetails.jsx';
import StudentHome from '../containers/student/StudentHome.jsx';
import AllTeachersbystudent from '../containers/student/AllTeachers.jsx';
import InputStudentComment from '../containers/student/MyComments.jsx';

// Home
import Home from "../containers/Home.jsx";
import AdminLayout from "../containers/AdminLayout.jsx";
import StudentLayout from "../containers/StudentLayout.jsx";

const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<Home />} />

        <Route path={"/"} element={<AdminLayout/>}>
            <Route path='/adminhome' element={<AdminHome />} />
            <Route path='/studentdetails' element={<StudentDetails />} />
            <Route path='/teacherdetails' element={<TeacherDetails />} />
            <Route path='/departmentdetails' element={<DepartmentDetails />} />
            <Route path='/caursedetails' element={<CaurseDetails />} />
            <Route path='/projecdetails' element={<ProjectDetails />} />
            <Route path='/allstudents' element={<AllStudents/>}/>
            {/* <Route path='/studentcommentbyadmin' element={<StudentComment/>}/> */}
            <Route path='/allprojects' element={<AllProjects/>}/>
            <Route path='/allteachers' element={<AllTeachers/>}/>
            <Route path='/studentcommentbyadmin' element={<StudentComment/>}/>
        </Route>
        
        <Route path={"/"} element={<StudentLayout/>}>
           <Route path='/studenthome' element={<StudentHome />} />
            <Route path='/departmentdetailsbystudent' element={<DepartmentDetailsbyStudent />} />
            <Route path='/caursedetailsbystudent' element={<CaurseDetailsbyStudent />} />
            <Route path='/allteachersbystudent' element={<AllTeachersbystudent />} /> 
            {/* methenna backend eken all lectures add karann ona, admin ekenma gtta update wenawada check karanna methanath*/}
            <Route path='/comment' element={<InputStudentComment />} />
        </Route>

    </Routes>
};

export default AppRoutes;