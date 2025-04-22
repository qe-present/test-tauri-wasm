import styles from './Header.module.css';
import { AppBar, Toolbar, Typography} from '@mui/material';

export default function Header() {
    return (
        <>
            <AppBar className={styles.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
                        Tauri + WebAssembly 应用
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}