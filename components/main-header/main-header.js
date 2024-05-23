'use client'
import Link from "next/link";
import logoImg from '@/assets/logo.png'
import classses from "@/components/main-header/main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "./main-header-pageground";
import NavLink from "./nav-link";
export default function Mainheader() {
  return (
    <>
    <MainHeaderBackground/>
    <header className={classses.header}>
        <Link  className={classses.logo} href="/">
            <Image src={logoImg} alt="A plate with food on it "  priority/>
            NextLevel Food
        </Link>
        <nav className={classses.nav}>
            <ul>
                <li>
                    <NavLink href={"/meals"}>Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href={"/community"}>Foodies community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}
