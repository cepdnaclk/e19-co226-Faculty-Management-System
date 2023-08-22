import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined'; import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'; import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined'; import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import TeacherIcon from '@mui/icons-material/Person';
// import StudentIcon from '@mui/icons-material/SupervisorAccount';
import CourseIcon from '@mui/icons-material/CollectionsBookmark';
import CommentIcon from '@mui/icons-material/Comment';


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
            <MenuItem active={window.location.pathname === "/studenthome"} component={<Link to="/studenthome" />} icon={<HomeOutlinedIcon />}> <Typography variant="body2">Home</Typography> </MenuItem>
            {/* <MenuItem active={window.location.pathname === "/studentdetails"} component={<Link to="/studentdetails" />} icon={<StudentIcon />}> <Typography variant="body2">Students Details </Typography></MenuItem> */}
            <MenuItem active={window.location.pathname === "/allteachersbystudent"} component={<Link to="/allteachersbystudent" />} icon={<TeacherIcon />}> <Typography variant="body2">Lecturers </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/departmentdetailsbystudent"} component={<Link to="/departmentdetailsbystudent" />} icon={<WarehouseIcon />}> <Typography variant="body2">Department Details </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/caursedetailsbystudent"} component={<Link to="/caursedetailsbystudent" />} icon={<CourseIcon />}> <Typography variant="body2">Course Details </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/comment"} component={<Link to="/comment" />} icon={<CommentIcon />}> <Typography variant="body2">My comments </Typography></MenuItem>



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