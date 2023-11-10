"use client";

import Link from "next/link";
import React from "react";

import styles from "./menuLink.module.css";

import { usePathname } from "next/navigation";

const MenuLink = ({ item, key }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
      key={key}
      href={item.path}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
