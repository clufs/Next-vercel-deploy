import Link from "next/link";
import { MainLayaout } from "../components/layout/MainLayaout";

//se tiene que exportar por defecto
export default function Settings() {
  return (
    <MainLayaout>
      <h1>Settings Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">home</Link>
      </h1>
      <p className={'description'}>
        Get started by editing{" "}
        <code className={'code'}>pages/settings.jsx</code>
      </p>
    </MainLayaout>
  );
}
