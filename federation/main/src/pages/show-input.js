import React from "react";

import dynamic from "next/dynamic";
import { lazy, Suspense, useEffect, useState } from "react";
import Layout from "./layout";
let useCustomHook;
let RemoteTitle = () => null;
if (process.browser) {
  //useCustomHook = require('shop/customHook').default;
  RemoteTitle = lazy(() => {
    return import("show_input/Home");
  });
}

export default function Page() {
  const [remoteTitle, setRemoteTitle] = useState(null);

  useEffect(() => {
    setRemoteTitle(true);
  }, []);
  return (
    <div>
      {remoteTitle ? (
        <Suspense fallback={<div>Loading...</div>}>
          <RemoteTitle />
        </Suspense>
      ) : null}
    </div>
  );
}
