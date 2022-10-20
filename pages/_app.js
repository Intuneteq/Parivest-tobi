import { NextUIProvider } from "@nextui-org/react"; //next ui provider
import Layout from "../components/Layout";
import AdminLayout from "../components/AdminLayout";

import "../styles/globals.scss";
import { AppProvider } from "../context/AppProvider";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <AppProvider>
        <Layout>
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        </Layout>
      </AppProvider>
    </NextUIProvider>
  );
}

export default MyApp;
