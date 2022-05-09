import React, { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
  
};

interface props{
  href: string;
  text: string;
};

export const ActiveLink = ({ href, text }: props) => {

  const {asPath} = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
