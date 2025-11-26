import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Grid,
  IconButton,
  InputAdornment,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";

import logo from "../assets/logo.svg";
import { loginUser } from "../services/auth";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const theme = useTheme();
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgcolor={"#e0eff0"}
    >
      <Card sx={{ maxWidth: 360, p: 4, borderRadius: 0, boxShadow: 0 }}>
        <CardContent>
          {/* LOGO */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: 70,
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setApiError("");
              try {
                const res = await loginUser(values);

                localStorage.setItem("token", res.data.access);
                localStorage.setItem("name", values.username);

                navigate("/");
              } catch (err) {
                setApiError(
                  err?.response?.data?.detail || "Invalid credentials"
                );
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              isSubmitting,
            }) => (
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  name="username"
                  label="Username"
                  value={values.username}
                  onChange={handleChange}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{ mb: 3 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {apiError && (
                  <Alert severity="error" sx={{ mb: 2 }}>
                    {apiError}
                  </Alert>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  startIcon={
                    isSubmitting ? (
                      <CircularProgress size={18} color="inherit" />
                    ) : null
                  }
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </Box>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Grid>
  );
}
