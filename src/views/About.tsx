import { Typography, Box, Paper } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>关于我们</Typography>
      <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
        <Typography paragraph>
          这是一个使用Tauri、React和WebAssembly构建的示例应用。
        </Typography>
        <Typography paragraph>
          Tauri是一个构建跨平台桌面应用的框架，可以使用Web技术构建轻量级、安全的桌面应用。
        </Typography>
        <Typography paragraph>
          WebAssembly允许我们在浏览器中运行高性能的代码，这个应用使用Rust编写的WebAssembly模块来提供功能。
        </Typography>
      </Paper>
    </Box>
  );
} 