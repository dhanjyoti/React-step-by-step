import PersonDetail from "@/components/PersonDetail";
import HomeCOM from "../components/HomeCOM"
import Teams from "@/components/Teams";
<<<<<<< HEAD
=======
import Signin from "@/components/signin";
import Counter from "@/components/Counter";
import Content from "@/Context/Content";
>>>>>>> e8caacf (updated)

export default function Home() {
  const Details = {
    FName: "Dhanjyti",
    LName: "Rabha",
    Age: 35,
    isVegan: true
  }
  const IPL = [{
    team: "CSK",
    Clr: "yellow"
  },
  {
    team: "MI",
    Clr: "Blue"
  },
  {
    team: "RCB",
    Clr: "Red"
  }]
  return (
    <main>
<<<<<<< HEAD
      <Teams IPL={IPL} />
=======
      <Content />
      {/* <Counter />  */}
      {/* <Signin/> */}
      {/* <Teams IPL={IPL} /> */}
>>>>>>> e8caacf (updated)
      {/* <PersonDetail Details={Details} /> */}
      {/* <HomeCOM name="Dhanjyoti" age={30} isEligible={true}/> */}
    </main>
  );
}
