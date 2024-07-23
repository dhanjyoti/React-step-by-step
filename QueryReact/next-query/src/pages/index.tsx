import  {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Demo from "./Demo";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries:  {
      refetchOnWindowFocus: false,
    }
  }
});

export default function Home() {
  const [showDemo, setShowDemo] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={()=> setShowDemo(!showDemo)}>Toggle Demo</button>
      {showDemo && <Demo />}
    </QueryClientProvider>
  );
}
