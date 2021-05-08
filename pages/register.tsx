import React, { useState } from "react";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
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

interface IAccount {
  username: String;
  password: String;
}

const Register = (props: Props) => {
  const classes = useStyles();
  const [account, setAccount] = useState<IAccount>({
    username: "",
    password: "",
  });

  return (
    <>
      <div className={classes.contianer}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="static/img/next5.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                autoComplete="email"
                autoFocus
                value={account.username}
                onChange={(e) =>
                  setAccount({ ...account, username: e.target.value })
                }
              ></TextField>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={account.password}
                onChange={(e) =>
                  setAccount({ ...account, password: e.target.value })
                }
              ></TextField>

              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => alert(JSON.stringify(account))}
              >
                Register
              </Button>

              <Button
                fullWidth
                size="small"
                color="primary"
                onClick={() => Router.push("/login")}
              >
                Cancel
              </Button>
            </form>
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

export default Register;
