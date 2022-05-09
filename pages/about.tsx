import Link from "next/link";
import { DarkLayout } from "../components/layout/DarkLayout";
import { MainLayaout } from "../components/layout/MainLayaout";

//se tiene que exportar por defecto
export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>

        <h1 className={"title"}>
          Ir a <Link href={"/"}>home</Link>
        </h1>

        <p className={"description"}>
          Get started by editing <code className={"code"}>pages/about.jsx</code>
        </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page:JSX.Element) {
  return (
    <MainLayaout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayaout>
  );
};
