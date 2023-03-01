import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Realty.</title>
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <header><Navbar /></header>
        <main>{children}</main>
        <footer><Footer /></footer>
      </div>
    </>
  );
}

export default Layout;
