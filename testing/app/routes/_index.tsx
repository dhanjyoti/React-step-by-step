import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import FilesDetail from "~/component/filesDetail";
import NewDrawer from "~/component/newDrawer";
import NTextAreaComponent from "~/component/newTextarea";
import TextAreaComponent from "~/component/textarea";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className="text-green-500">Hi File</div>
        <NewDrawer show={isOpen} showChange={setIsOpen}>
          <FilesDetail/>
        </NewDrawer>
        <button onClick={()=>setIsOpen(true)}>Open</button>
        <TextAreaComponent />
        <NTextAreaComponent/>
    </div>
  );
}
