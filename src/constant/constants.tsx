import {MenuItems} from "@/constant/Menu.ts";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import CoreIcon  from "@mui/icons-material/Code"
import WindowIcon from '@mui/icons-material/Window'

export const DRAWER_WIDTH = 140;
export const MENUITEMS: MenuItems = [
    {text: 'App', path: '/', icon: <HomeIcon/>},
    {text:'Core',path:"/core",icon:<CoreIcon/>},
    {text: 'Window', path: '/about', icon: <WindowIcon/>},
    {text: 'Menu', path: '/settings', icon: <SettingsIcon/>},
    {text: 'Tray', path: '/help', icon: <HelpIcon/>},
    {text: 'image', path: '/image', icon: <HelpIcon/>},
    {text: '关于我们', path: '/about', icon: <InfoIcon/>},
    {text: '设置', path: '/settings', icon: <SettingsIcon/>},
    {text: '帮助', path: '/help', icon: <HelpIcon/>}
];