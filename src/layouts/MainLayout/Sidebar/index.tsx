// src/layouts/MainLayout/Sidebar/index.tsx
import styles from './Sidebar.module.css';
import {Box, Divider} from '@mui/material';
import TauriListItem from '@/components/TauriListItem';
import {MENUITEMS} from '@/constant/constants'


export default function Sidebar() {


    return (
        <Box className={styles.sidebarContainer}>
            <Box className={styles.sidebarContent}>
                <TauriListItem menuItems={MENUITEMS} slice={5} zero={true}/>
                <Divider/>
                <TauriListItem menuItems={MENUITEMS} slice={5} zero={false}/>
            </Box>
        </Box>
    );
}