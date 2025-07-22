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
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f3f6fe" }}>
      <Box sx={{ flexGrow: 1, overflow: "auto", width: "100%" }}>

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

        {/* 메인 콘텐츠 */}
        <Box sx={{ px: 2 }}>
          <Grid container spacing={2}>
            {/* 왼쪽 큰 박스 */}
            <Grid item xs={12} md={8}>
              <Paper
                sx={{
                  height: 200,
                  width: 500,
                  p: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "#e0e7ff",
                }}
              >
                <Typography variant="h6">왼쪽 상단 박스 (예: 차트/지도)</Typography>
              </Paper>

              {/* 아래 3 x 2 박스 */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {Array.from({ length: 6 }).map((_, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Paper
                      sx={{
                        height: 200,
                        width: 150,
                        bgcolor: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2">빈 박스 {idx + 1}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* 오른쪽: 알림 로그만 단독 표시 */}
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  height: 500,
                  p: 3,
                  bgcolor: "#fefefe",
                }}
              >
                <Box
                  sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
                >
                  <Typography variant="h6">알림 로그</Typography>
                  <IconButton size="small">
                    <MoreVertIcon />
                  </IconButton>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  연결된 알림 로그가 여기에 표시됩니다.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MainHomeMg;
