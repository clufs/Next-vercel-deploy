import React from "react";
import { MainLayaout } from "../../components/layout/MainLayaout";
import Link from 'next/link';

export default function Pricing() {
  return (
    <MainLayaout>
      <h1>Price Page</h1>

      <h1 className={"title"}>
        Ir a <Link href={"/"}>home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/price.jsx</code>
      </p>
    </MainLayaout>
  ) 
};

