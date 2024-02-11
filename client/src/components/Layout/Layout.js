import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {/* header of page */}
      <Header />

      {/* body part of page */}
      <main style={{ minHeight: "75vh" }}>
        <Toaster />
        {/*  vh means veiwport height. that means 80% height of the vh*/}
        {/* show the child element with the help of props  */}
        {children}
      </main>

      {/* footer of page */}
      <Footer />
    </div>
  );
};

// set default value if not done manually
Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern, react, node, mongodb",
  author: "asqre",
};

export default Layout;
