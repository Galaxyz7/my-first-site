import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom"
import { tokens } from "../../theme"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import InfoIcon from '@mui/icons-material/Info';
import BackupIcon from '@mui/icons-material/Backup';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import WebIcon from '@mui/icons-material/Web';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import userImage from './image.png';



const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem 
            active={selected === title} 
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )

}
const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard")

    return (
        <Box sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
               
                "& .pro-icon-wrapper": {
                    background: "transparent !important",
                },
                "& .pro-inner-item": {
                    background: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    background: "#6870fa !important",
                },
                "& .pro-menu-item.active": {
                    background: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square" >
                {/* LOGO AND MENU ICON */}
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{
                    margin: "10px 0 20px 0",
                    color: colors.grey[100],
                    }}
                >
                    {!isCollapsed && (
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        ml="15px"
                    >
                        <Typography variant="h3" color={colors.grey[100]}>
                        IT By Alex
                        </Typography>
                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                        <MenuOutlinedIcon />
                        </IconButton>
                    </Box>
                    )}
                </MenuItem>

                {!isCollapsed && (
                    <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center" >
                            <img
                            alt="profile-user"
                            width="100px"
                            height="100px"
                            src={userImage}
                            style={{ cursor: "pointer", borderRadius: "50%" }}
                            />
                        </Box>
                        <Box textAlign="center">
                            <Typography
                            variant="h2"
                            color={colors.grey[100]}
                            fontWeight="bold"
                            sx={{ m: "10px 0 0 0" }}
                            >
                            Welcome
                            </Typography>
                            <Typography variant="h5" color={colors.greenAccent[500]}>
                            A thoughtful website for IT
                            </Typography>
                        </Box>
                    </Box>
                )}

                {<Box paddingLeft={isCollapsed ? undefined : "10%"}>
                    <Item
                    title="Home"
                    to="/"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant="h5"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 10px" }}
                    >
                    Writeups
                    </Typography>
                    <Item
                    title="All Posts"
                    to="/writeups"
                    icon={<LibraryBooksIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={isCollapsed ? { m: "5px 0 5px 15px" } : { m: "5px 0 5px 30px" }}
                    >
                    Newest
                    </Typography>
                    <Item
                    title="My First Blog Post"
                    to="/writeups/my_first_blog_post"
                    icon={<ReceiptOutlinedIcon  />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Apache 2 with SSL"
                    to="/writeups/apache_2_with_ssl"
                    icon={<WebIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Raspberry Pi NAS"
                    to="/writeups/raspberry_pi_nas"
                    icon={<BackupIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant="h5"
                    color={colors.grey[300]}
                    sx={isCollapsed ? { m: "5px 0 5px 20px" } :{ m: "15px 0 5px 10px" }}
                    >
                    Info
                    </Typography>
                    <Item
                    title="About"
                    to="/about"
                    icon={<InfoIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="Contact Form"
                    to="/contact"
                    icon={<ContactSupportIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item
                    title="FAQ Page"
                    to="/faq"
                    icon={<HelpOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                </Box>}
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar;