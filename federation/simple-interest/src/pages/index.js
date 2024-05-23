import InputField from "@/components/InputField";
import { useState } from "react";

export default function Home() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [si, setSi] = useState(0);

  const calculator = () => {
    const si = (principal * rate * time) / 100;
    setSi(si);
  };
  return (
    <main className="flex flex-col items-center justify-center gap-4 mt-12">
      <h2 className="font-extrabold text-4xl">Simple Interest Calculator</h2>
      <div className="flex flex-col gap-2">
        <InputField
          label="Principal"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        />
        <InputField
          label="Rate"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
        <InputField
          label="Time"
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />
      </div>
        <button className="bg-[#14629C] text-white px-5 py-2 rounded" onClick={calculator}>Calculator</button>
      <div>
        <h3>Simple Interest: {si}</h3>
      </div>
    </main>
  );
}
