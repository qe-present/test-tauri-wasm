import styles from './MainContent.module.css';
import { Box } from '@mui/material';
import React from 'react';


export default function MainContent({ children }:{ children: React.ReactNode }) {
  return (
      <Box component="main" className={styles.main}>
        {children}
      </Box>
  );
}