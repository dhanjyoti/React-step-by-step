"use client";

import { useState } from "react";
import Card from "./components/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import StudentList from "./studentlist/page";


export default function Home() {
  const [fruit, setFruit] = useState("mango");
  const apple = () => {
    setFruit("banana");
  };

  const InnerComp = () => {
    return <h2>Hello world</h2>;
  };

  const router = useRouter();

  const navigate=(name)=>{
    router.push(name)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StudentList />
      <User nam="Dj" />
      <User nam="hero" />
      <User nam="rabha" />
      <Card />
      <h1>Home Page {fruit}</h1>
      {InnerComp()}
      <button
        onClick={() => apple()}
        className="bg-gray-600 text-white rounded-md px-6"
      >
        CLick
      </button>
      <Link href="/login">Go to login page</Link>
      <button onClick={()=>navigate("/login")}>Login Button</button>
      <Link href="/about">Go to about page</Link>
      <button onClick={()=>navigate("/about")}>About Button</button>
      <Link href="/study">Study</Link>
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>User name is {props.nam}</h2>
    </div>
  );
};
