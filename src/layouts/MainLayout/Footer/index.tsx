// src/layouts/MainLayout/Footer/index.tsx
import styles from './Footer.module.css';
import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box className={styles.footer}>
            <Typography variant="body2" color="text.secondary">
               Tauri2+ WebAssembly 应用
            </Typography>
        </Box>
    );
}