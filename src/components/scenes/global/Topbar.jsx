import {Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens,  } from "../../../thems";
import InputBase from "@mui/material/InputBase";
import  LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";
import  NotificationsOutlinedIcon  from "@mui/icons-material/NotificationsOutlined";
import  SettingsOutlinedIcon  from "@mui/icons-material/SettingsOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import  SearchIcon  from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import ToggleButton from '@mui/material/ToggleButton';
import { useSelector, useDispatch } from 'react-redux'
import {setOpen, setIncrement} from '../../../features/sidebarSlice'

// const styledBox = styled(Box)'';
const Topbar = () =>{
    const dispatch = useDispatch();

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const ColorMode = useContext(ColorModeContext);

    return(<Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        <Box display="flex" backgroundColor={colors.primary[400]}>
            <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
            <IconButton type="button" sx={{p: 1}}>
                <SearchIcon />
            </IconButton>
        </Box>

        {/*ICONS*/}
        <Box display="flex">
                <IconButton>
            {/* <IconButton onClick={ColorMode.toggleColorMode}> */}
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
       
            </IconButton>   

             <IconButton>
                < NotificationsOutlinedIcon />
            </IconButton>

             <IconButton onClick={() => {
                dispatch(setIncrement(5));
             }}>
                <SettingsOutlinedIcon />
            </IconButton>

             <IconButton onClick={() => {
                dispatch(setOpen());
             }}>
                < PersonOutlinedIcon  />
            </IconButton>
        </Box>
     
    </Box>);
}

export default Topbar;