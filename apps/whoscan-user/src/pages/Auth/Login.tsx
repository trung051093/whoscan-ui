import AuthLayout from "../../layouts";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useForm } from "react-hook-form";
import { FormInputText } from "@whoscan/core/components/Form/FormInputText";
import { LoginRequest } from "../../models";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "../../hooks/useAuth";
import classes from "./AuthPage.module.css";

const LoginPage = () => {
  const { t } = useTranslation();
  const validateSchema = yup.object().shape({
    username: yup
      .string()
      .email(t("EMAIL_INVALID"))
      .required(t("EMAIL_REQUIRE")),
    password: yup
      .string()
      .min(8, t("PASSWORD_REQUIRE_LENGTH"))
      .required(t("PASSWORD_REQUIRE")),
  });

  const loginMutation = useLogin();
  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(validateSchema),
  });
  const onSubmit = (data: LoginRequest) => loginMutation.mutate(data);

  return (
    <AuthLayout>
      <Card sx={{ width: 480 }} className={classes.centerCard}>
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={24}>
              <Typography component="h1">{t("LOGIN")}</Typography>
            </Grid>
            <Grid item xs={24}>
              <FormInputText
                fullWidth
                name="username"
                control={control}
                label="Username"
                variant="outlined"
                size="small"
                disabled={loginMutation.isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <FormInputText
                fullWidth
                name="password"
                type="password"
                control={control}
                label="Password"
                variant="outlined"
                size="small"
                disabled={loginMutation.isLoading}
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2}>
                <Button
                  disabled={loginMutation.isLoading}
                  variant="contained"
                  onClick={handleSubmit(onSubmit)}
                >
                  {t("LOGIN")}
                </Button>
                <Button
                  disabled={loginMutation.isLoading}
                  onClick={() => reset()}
                  variant={"outlined"}
                >
                  {t("RESET")}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default LoginPage;
