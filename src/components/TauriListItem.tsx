import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import styles from "./item.module.css";
import {useLocation, useNavigate} from "react-router";
import {MenuItem,MenuItems} from "@/constant/Menu.ts";
import {MENUITEMS} from "@/constant/constants.tsx";

interface InputProps {
    menuItems: MenuItems;
    zero?: boolean;
    slice?: number;

}

export default function TauriListItem({menuItems,slice,zero}:InputProps) {
    const navigate = useNavigate();
    const location = useLocation();
    let content=zero?(<List>
        {menuItems.slice(0, slice).map((item:MenuItem) => (
            <ListItem key={item.text} disablePadding className={styles.listItemContainer}>
                <ListItemButton
                    className={styles.menuItem}
                    onClick={() => navigate(item.path)}
                    selected={location.pathname === item.path}
                >
                    <ListItemIcon className={styles.menuIcon}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>):(
        <List className={styles.secondList}>
            {MENUITEMS.slice(slice).map((item) => (
                <ListItem key={item.text} disablePadding className={styles.listItemContainer}>
                    <ListItemButton
                        className={styles.menuItem}
                        onClick={() => navigate(item.path)}
                        selected={location.pathname === item.path}
                    >
                        <ListItemIcon className={styles.menuIcon}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
    return content
}