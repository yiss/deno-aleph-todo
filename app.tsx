import React, { ComponentType } from "https://esm.sh/react";
import { Head } from "https://deno.land/x/aleph/mod.ts";
import "https://esm.sh/tailwindcss/dist/tailwind.min.css";

export default function App({
  Page,
  pageProps,
}: {
  Page: ComponentType<any>;
  pageProps: any;
}) {
  return (
    <>
      <Head>
        <title>Hello World - Aleph.js</title>
      </Head>
      <div className="h-screen bg-gray-100">
        <Page {...pageProps} />
      </div>
    </>
  );
}
