"use client";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

const Navbar = () => {
  const trackNav = (href: string, label: string) =>
    posthog.capture("nav_link_clicked", { href, label });

  return (
    <header>
      <nav>
        <Link href="/" className="logo" onClick={() => trackNav("/", "logo")}>
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>DevEvents</p>
        </Link>
        <ul>
          <Link href="/" onClick={() => trackNav("/", "home")}>home</Link>
          <Link href="/events" onClick={() => trackNav("/events", "Events")}>Events</Link>
          <Link href="/create-event" onClick={() => trackNav("/create-event", "Create Event")}>Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
