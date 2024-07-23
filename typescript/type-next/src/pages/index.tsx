import PersonDetail from "@/components/PersonDetail";
import HomeCOM from "../components/HomeCOM"
import Teams from "@/components/Teams";

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
      <Teams IPL={IPL} />
      {/* <PersonDetail Details={Details} /> */}
      {/* <HomeCOM name="Dhanjyoti" age={30} isEligible={true}/> */}
    </main>
  );
}
