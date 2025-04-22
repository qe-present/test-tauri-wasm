import { Box, CssBaseline } from '@mui/material';
import styles from './MainLayout.module.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { Outlet } from 'react-router';
import Footer from './Footer';

export default function MainLayout() {
    return (
        <Box className={styles.container}>
            <CssBaseline />
            <Header />
            <Box className={styles.contentWrapper}>
                <Sidebar />
                <MainContent>
                    <Outlet/>
                </MainContent>
            </Box>
            <Footer></Footer>

        </Box>
    );
}