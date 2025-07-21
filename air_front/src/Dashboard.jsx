import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const MainHomeMg = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        bgcolor: "#f3f6fe",
      }}
    >
      {/* Main content only */}
      <Box sx={{ flexGrow: 1, overflow: "auto", width: "100%" }}>
        {/* Header - 알림과 프로필 제거됨 */}
        <AppBar position="static" elevation={0} sx={{ bgcolor: "white" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            {/* 알림/프로필 제거됨 */}
          </Toolbar>
        </AppBar>

        {/* Breadcrumb */}
        <Box sx={{ px: 3, py: 2, display: "flex", alignItems: "center" }}>
          <Typography variant="caption" color="textSecondary">
            Welcome
          </Typography>
          <Box
            component="img"
            src="/path2.svg"
            sx={{ width: 8, height: 8, mx: 1 }}
          />
          <Typography variant="caption" color="primary" fontWeight="bold">
            Dashboard
          </Typography>
        </Box>

        {/* Main Grid */}
        <Grid container spacing={2} sx={{ px: 3 }}>
          {/* 공지사항 */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ height: 500 }}>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
                >
                  <Typography variant="h6">공지사항</Typography>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Box>
                <Stack spacing={1}>
                  <Typography variant="body2" color="textSecondary">
                    연결된 공지사항이 여기에 표시됩니다.
                  </Typography>
                </Stack>
              </Box>
            </Paper>
          </Grid>

          {/* 알림 로그 */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ height: 500 }}>
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
                >
                  <Typography variant="h6">알림 로그</Typography>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Box>
                <Stack spacing={1}>
                  <Typography variant="body2" color="textSecondary">
                    연결된 알림 로그가 여기에 표시됩니다.
                  </Typography>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainHomeMg;
