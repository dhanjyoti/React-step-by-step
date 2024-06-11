import { lazy, Suspense } from "react";

const ClientIndex = lazy(() => import("client/index"));

const Page = () => {
  useEffect(() => {
    (async () => {
      const x = await (await fetch("/api/hello")).json();
      console.log(x);
    })();
  }, []);
  return (
    <div>
      <Suspense fallback={"Client 1 is loading.."}>
        <ClientIndex />
      </Suspense>
    </div>
  );
};

export default Page;
