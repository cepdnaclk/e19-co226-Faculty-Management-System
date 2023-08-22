
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useProSidebar } from "react-pro-sidebar";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

function AppHeader() {

    const navigate = useNavigate();
    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();

    const Signout = () => {
        navigate('/');
    };

    return <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar >
            <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()} color="secondary">
                <MenuIcon />
            </IconButton>
            <Box component={TextField} sx={{ ...styles.appLogo, width: '18%', height: '50px' }} value="Faculty Management System" />


            <Box
                sx={{ flexGrow: 1 }} />
            <IconButton title="Sign Out" color="secondary" onClick={Signout}>
                <LogoutIcon />
            </IconButton>
        </Toolbar>
    </AppBar>;
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: '#3366cc'
    },
    appLogo: {
        borderRadius: 5,
        width: 120,
        marginLeft: 2,
        cursor: 'pointer'
    }
}

export default AppHeader;