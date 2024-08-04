<<<<<<< HEAD


export default function Home() {
  
  return (
    <main>
      <h1>SSR in Nextjs</h1>
=======
import { API_BASE_URL } from "@/config/constant";


export default function Home() {
  console.log(process.env.SERVER_PASSWORD)
  
  return (
    <main>
      {process.env.NODE_ENV == "development" ?
      <h1>You are on development mode</h1> :
      <h1>You are on production mode</h1>}
      <h1>SSR in Nextjs</h1>

      {API_BASE_URL}
>>>>>>> e8caacf (updated)
    </main>
  );
}
