import React from "react";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field } from "formik";
import Router from "next/router";

interface Props {}

const useStyles = makeStyles((theme) => ({
  contianer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const onLoginClick = () => {
  Router.push("/stock");
};

const Login = ({}: Props) => {
  const classes = useStyles();

  const showForm = (props) => {
    return (
      <Form>
        <Field
          component={TextField}
          name="username"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          autoComplete="email"
          autoFocus
        />
        <Field
          component={TextField}
          name="password"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          // onClick={onLoginClick}
        >
          Sign In
        </Button>
        <Button
          fullWidth
          size="small"
          color="primary"
          onClick={() => {
            Router.push("/register");
          }}
        >
          Register
        </Button>
      </Form>
    );
  };

  return (
    <>
      <div className={classes.contianer}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="static/img/next2.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={(values) => {
                alert(JSON.stringify(values));
              }}
            >
              {(props) => showForm(props)}
            </Formik>
          </CardContent>
        </Card>

        <style jsx global>
          {`
            body {
              min-height: 100vh;
              position: relative;
              margin: 0;
              background-size: cover;
              background-image: url("/static/img/bg.jpg");
              text-align: center;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Login;
