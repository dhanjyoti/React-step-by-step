import React from "react";

import { lazy, Suspense, useEffect, useState } from "react";
let RemoteTitle = () => null;
if (process.browser) {
  //useCustomHook = require('shop/customHook').default;
  RemoteTitle = lazy(() => {
    return import("weather/Home");
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
      <div className="bg-red-400">helo</div>
    </div>
  );
}
