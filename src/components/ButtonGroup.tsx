import {Box, Button, Stack, Typography} from "@mui/material";

export default function ButtonGroup() {
    return (
        <Box sx={{ p: 5 }}>
            <Typography>
                App 接口
            </Typography>
            <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
                <Button variant="contained">Get Name</Button>
            </Stack>
        </Box>
    )
}