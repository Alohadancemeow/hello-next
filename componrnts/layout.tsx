import { Container, Toolbar } from "@material-ui/core";
import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

interface Props {
  children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      paddingLeft: 240,
    },
  })
);

const Layout = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Menu />
      <main className={classes.content}>
        <Toolbar />
        <Container>{children}</Container>
      </main>
      <Footer
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "#FEFEFE",
          color: "black",
          fontSize: 13,
          textAlign: "left",
          height: 30,
          paddingLeft: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      />

      <style jsx global>
        {`
          body {
            margin: 0px;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
