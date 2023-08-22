import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import TeacherIcon from '@mui/icons-material/Person';
import StudentIcon from '@mui/icons-material/SupervisorAccount';
import CourseIcon from '@mui/icons-material/CollectionsBookmark';
import ProjectIcon from '@mui/icons-material/Book';
import HomeIcon from '@mui/icons-material/Home';

function SideNav() {
    const { collapsed } = useProSidebar();
    const theme = useTheme();

    return <Sidebar
        style={{ height: "100%", top: 'auto' }}
        breakPoint="md"
        backgroundColor={theme.palette.neutral.light}

    >
        <Box sx={styles.avatarContainer}>
            <Avatar sx={styles.avatar} alt="Logo" src="src/assets/avatars/logo.jpg" />
            {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Faculty Management System</Typography> : null}
            {/* {!collapsed ? <Typography variant="overline"> -- Farmer Name -- </Typography> : null} */}
        </Box>

        <Menu
            menuItemStyles={{
                button: ({ level, active }) => {
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined,
                    };
                },
            }}>
            <MenuItem active={window.location.pathname === "/adminhome"} component={<Link to="/adminhome" />} icon={<HomeIcon />}> <Typography variant="body2">Home</Typography> </MenuItem>
            <MenuItem active={window.location.pathname === "/studentdetails"} component={<Link to="/studentdetails" />} icon={<StudentIcon />}> <Typography variant="body2">Students Details </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/teacherdetails"} component={<Link to="/teacherdetails" />} icon={<TeacherIcon />}> <Typography variant="body2">Lecturers Details </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/departmentdetails"} component={<Link to="/departmentdetails" />} icon={<WarehouseIcon />}> <Typography variant="body2">Department Details </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/caursedetails"} component={<Link to="/caursedetails" />} icon={<CourseIcon />}> <Typography variant="body2">Course Details </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/projecdetails"} component={<Link to="/projecdetails" />} icon={<ProjectIcon />}> <Typography variant="body2">Project Details </Typography></MenuItem>

        </Menu >
    </Sidebar >; 
}

export default SideNav;

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }

}