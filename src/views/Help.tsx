import { Typography, Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Help() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>帮助中心</Typography>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>如何使用此应用？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            本应用是一个演示Tauri与WebAssembly集成的示例。在首页，您可以点击按钮来测试WebAssembly功能，
            通过侧边栏可以导航到不同的页面。
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>应用无法启动怎么办？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            如果应用无法启动，请尝试以下步骤：
            <br />1. 确保您的系统满足最低要求
            <br />2. 尝试重新安装应用
            <br />3. 检查系统日志以获取更多信息
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>如何联系技术支持？</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            如有任何问题，请发送邮件至：support@example.com
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
} 