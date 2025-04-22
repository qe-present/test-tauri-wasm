import { Typography, Box, Button, Stack } from "@mui/material";
import {get_name, get_tauri_version, get_version} from "../../src-wasm/app/pkg/app";

export default function TauriApp() {
  async function greet(num: number) {
    switch (num) {
      case 1:
        let name = await get_name();
        console.log(name);
        break;
      case 2:
        let v = await get_version();
        console.log(v);
        break;
      case 3:
        let tauri_version = await get_tauri_version();
        console.log(tauri_version);
        break;
      default:
        console.log("default");
        break;
    }
  }

  return (
    <Box sx={{ p: 5 }}>
      <Typography >
        App 接口
      </Typography>
      <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
        <Button variant="contained" onClick={() => greet(1)}>Get Name</Button>
        <Button variant="contained" onClick={() => greet(2)}>Get Version</Button>
        <Button variant="contained" onClick={() => greet(3)}>Get Tauri version</Button>
      </Stack>
    </Box>
  );
} 