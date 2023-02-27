import Head from "next/head";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>RealEst.</title>
      </Head>
      <div className="max-w-7xl mx-auto">
        <header><Navbar /></header>
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default Layout;
