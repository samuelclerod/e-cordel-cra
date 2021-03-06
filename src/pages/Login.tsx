import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { SignInCredentials } from "../contexts/AuthProvider";
import { useToast } from "../hooks/useToast";

export default function Login() {
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const theme = useTheme();
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data: SignInCredentials) => {
    // e.preventDefault();
    try {
      await signIn(data);
      console.table(data);
      addToast({ message: "credenciais Ok!", type: "success" });
      history.push("/");
    } catch (error) {
      addToast({ message: "credenciais inválidas", type: "error" });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div
        style={{
          marginTop: theme.spacing(8),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form
          style={{
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(1),
          }}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            autoComplete="username"
            autoFocus
            {...register("username")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password")}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ margin: theme.spacing(3, 0, 2) }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
