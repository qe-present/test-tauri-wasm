import { Typography, Box, List, ListItem, ListItemText, Switch, Divider } from "@mui/material";
import { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    autoUpdate: true
  });

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting]
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>设置</Typography>
      
      <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemText primary="深色模式" secondary="切换应用的深色/浅色主题" />
          <Switch
            edge="end"
            checked={settings.darkMode}
            onChange={() => handleToggle('darkMode')}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="通知" secondary="启用或禁用应用通知" />
          <Switch
            edge="end"
            checked={settings.notifications}
            onChange={() => handleToggle('notifications')}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="自动更新" secondary="应用启动时自动检查更新" />
          <Switch
            edge="end"
            checked={settings.autoUpdate}
            onChange={() => handleToggle('autoUpdate')}
          />
        </ListItem>
      </List>
    </Box>
  );
} 