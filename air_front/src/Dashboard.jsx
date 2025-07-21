import React from "react";
import CommuteIcon from "@mui/icons-material/Commute";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TodayIcon from "@mui/icons-material/Today";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 219,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 219,
            bgcolor: "#1f263d",
            color: "white",
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
          <Avatar src="/image-2.png" sx={{ width: 30, height: 30 }} />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" sx={{ px: 2, py: 1 }}>
            Quick Access
          </Typography>

          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button sx={{ bgcolor: "rgba(255, 255, 255, 0.1)" }}>
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Box
                  sx={{ width: 20, height: 20, bgcolor: "url(/shape-2.svg)" }}
                />
              </ListItemIcon>
              <ListItemText primary="Alert" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Box sx={{ width: 20, height: 20 }}>
                  <Box
                    component="img"
                    src="/shape-3.svg"
                    sx={{ width: 16, height: 20 }}
                  />
                </Box>
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <Box
                  component="img"
                  src="/shape.svg"
                  sx={{ width: 20, height: 19 }}
                />
              </ListItemIcon>
              <ListItemText primary="Anomaly" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <CommuteIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Facility" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <TodayIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Daily Log" />
            </ListItem>
          </List>

          <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.1)", my: 2 }} />

          <Typography variant="subtitle2" sx={{ px: 2, py: 1 }}>
            Account
          </Typography>

          <List>
            <ListItem button>
              <ListItemIcon>
                <Box sx={{ width: 20, height: 20 }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        {/* Header */}
        <AppBar position="static" elevation={0} sx={{ bgcolor: "white" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Avatar sx={{ width: 32, height: 32, mr: 2 }} />
            <Badge badgeContent={3} color="error" sx={{ mr: 2 }}>
              <NotificationsIcon />
            </Badge>
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
          {/* Main Chart */}
          <Grid item xs={12} lg={8}>
            <Paper
              sx={{
                height: 470,
                backgroundImage: "url(/chart.svg)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>

          {/* CCTV Thumbnails */}
          <Grid item xs={12} lg={4}>
            <Stack spacing={2}>
              <Paper component="img" src="/image-9.png" sx={{ width: "100%", height: 100 }} />
              <Paper component="img" src="/image.png" sx={{ width: "100%", height: 110 }} />
              <Paper component="img" src="/image-10.png" sx={{ width: "100%", height: 98 }} />
              <Paper component="img" src="/image-10-2.png" sx={{ width: "100%", height: 105 }} />
            </Stack>
          </Grid>

          {/* 공지사항 */}
          <Grid item xs={12} lg={4}>
            <Paper sx={{ height: 377 }}>
              <Box sx={{ p: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
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
          <Grid item xs={12} lg={4}>
            <Paper sx={{ height: 377 }}>
              <Box sx={{ p: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
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