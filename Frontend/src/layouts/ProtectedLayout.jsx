import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useTheme,
  alpha,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import logo from "../assets/logo.svg"; // <— import your logo here
import { getUser } from "./../services/user";

export default function ProtectedLayout() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState();
  const theme = useTheme();

  const fetchUser = async () => {
    let user = await getUser();
    user = user.data[0];
    setUserInfo(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login");
  };

  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          boxShadow: 0,
        }}
        position="static"
        color="primary"
      >
        <Toolbar>

          {/* LOGO + NAME */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: 30,
                width: "auto",
                marginRight: 10,
                objectFit: "contain",
              }}
            />

            <Typography
              variant="body1"
              component="div"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {userInfo ? `${userInfo.first_name} ${userInfo.last_name}` : "–"}
            </Typography>
          </Box>

          {/* LOGOUT BUTTON */}
          <IconButton
            sx={{ color: theme.palette.primary.main }}
            onClick={handleLogout}
            title="Logout"
          >
            <LogoutIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      <main style={{ padding: 30 }}>
        <Outlet />
      </main>
    </div>
  );
}
