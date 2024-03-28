import Image from "next/image";
import Timetable from "./components/Timetable/Timetable";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import TableHistory from "./components/TableHistory/TableHistory";

export default function Home() {
  return (
    // <main className="w-full h-92  ">
    // 


    // </main>
    <div className="w-full h-full flex">


      <Menu />
      <div className="w-84 h-full bg-zinc-100">


        <Header />



        <main className="w-full h-92  ">

          <Timetable />

        </main>

      </div>
      <div className="w-14 h-full">
        <TableHistory />
      </div>
    </div>
  );
}
