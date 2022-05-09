import Link from "next/link";
import { MainLayaout } from "../components/layout/MainLayaout";

  //se tiene que exportar por defecto


export default function Home() {
  return (
    <MainLayaout>
      <h1>Home Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/about">about</Link>
      </h1>
      <p className={'description'}>
        Get started by editing{" "}
        <code className={'code'}>pages/index.js</code>
      </p>
    </MainLayaout>
  );
}
