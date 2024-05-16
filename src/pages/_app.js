import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Layout } from "../Components";
// import { StateContext } from "../../context/StateContex

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <StateContext> */}
      <Layout>
        <Toaster />
        <Component {...pageProps} />;
      </Layout>
      {/* </StateContext> */}
    </>
  );
}
