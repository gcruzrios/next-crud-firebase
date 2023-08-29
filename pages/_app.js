import Head from "next/head";
import "../styles/globals.css";
import { Title } from "@mui/icons-material";
import { Container } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Crud Next Js Firebase</title>
        <meta name="description" content="Crud next Js Firebase"></meta>
        <meta name="autor" content="www.greiv.in"></meta>
        <meta
          name="keywords"
          content="Next Js, Firebase, Render 2 Web, Colombia"
        ></meta>
      </Head>
      <Container>
        <h1 align="center">Crud Usuarios Next JS / Firebase</h1>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
