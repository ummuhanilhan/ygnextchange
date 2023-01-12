import "../styles/main.scss";
import React, { ComponentType } from "react";
import { AppInitialProps, AppProps } from "next/app";
import PrimeReact, { addLocale, locale } from "primereact/api";
import Head from "next/head";
import { primeOptions } from "@utils/mock";
import { Provider } from "react-redux";
import { store } from "stores/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modals } from "@shared/modals/useModal";
import { ModalProvider } from "../@shared/contexts/ModalContext";

PrimeReact.ripple = true;

addLocale("tr", primeOptions);

locale("tr");

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { Layout, Title }: any = Component;
  const Container = Layout ? Layout : React.Fragment;
  return (
    <React.Fragment>
      <Modals />
      <Container>
        <Head>
          <title>{Title || "Yükgetir"}</title>
        </Head>
        <Component {...pageProps} />
      </Container>
      <ToastContainer />
    </React.Fragment>
  );
};

const App = (props: AppProps) => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <MyApp {...props} />
      </ModalProvider>
    </Provider>
  );
};

export default App;
