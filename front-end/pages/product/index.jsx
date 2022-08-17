import React from "react";
import Categories from "./Categories";
import Head from "next/head";

export default function Product() {
  return (
    <>
      {" "}
      <Head>
        <title>Product</title>
      </Head>
      <div>
        <Categories />
      </div>
    </>
  );
}
