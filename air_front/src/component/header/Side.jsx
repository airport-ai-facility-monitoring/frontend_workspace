import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ErrorIcon from "@mui/icons-material/Error";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WarningIcon from "@mui/icons-material/Warning";
import CommuteIcon from "@mui/icons-material/Commute";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 220;

const navItems = [
  { text: "Home", icon: <HomeIcon />, selected: false },
  { text: "Dashboard", icon: <DashboardIcon />, selected: false },
  { text: "Alert", icon: <ErrorIcon />, selected: true },
  { text: "Notifications", icon: <NotificationsIcon />, selected: false },
  { text: "Anomaly", icon: <WarningIcon />, selected: false },
  { text: "Facility", icon: <CommuteIcon />, selected: false },
  { text: "Daily Log", icon: <DescriptionIcon />, selected: false },
];

const Side = (props) => {
  return (
    <Drawer
        variant="temporary"       // temporary로 바꿔서 임시 열림 상태로 변경
        open={open}               // 상태에 따라 열림 여부 결정
        onClose={toggleDrawer}    // 외부 클릭 시 닫힘 처리

      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#1f263d",
          color: "white",
        },
      }}
    >
      <Box sx={{ p: 2, height: 70, display: "flex", alignItems: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Quick Access
        </Typography>
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              height: 40,
              bgcolor: item.selected ? "rgba(255, 255, 255, 0.08)" : "transparent",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.12)" },
            }}
            onClick={() => {}}
          >
            <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: 13,
                opacity: item.selected ? 1 : 0.65,
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.12)", my: 2 }} />

      <Typography
        variant="subtitle2"
        sx={{ px: 2, py: 1, opacity: 0.7, fontSize: 13 }}
      >
        Account
      </Typography>

      <List>
        <ListItem button onClick={() => {}}>
          <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Settings"
            primaryTypographyProps={{
              fontSize: 13,
              opacity: 0.65,
            }}
          />
        </ListItem>
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <List sx={{ marginTop: "auto" }}>
        <ListItem button onClick={() => {}}>
          <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Log Out"
            primaryTypographyProps={{
              fontSize: 13,
              opacity: 0.65,
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Side;