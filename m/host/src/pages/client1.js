import { lazy, Suspense } from "react";

const ClientIndex = lazy(() => import("client/index"));

const Page = () => {
  return (
    <div>
      <Suspense fallback={"Client 1 is loading.."}>
        <ClientIndex />
      </Suspense>
    </div>
  );
};

export default Page;
