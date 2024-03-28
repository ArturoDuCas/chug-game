"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LinkTransitionProps {
  href: string;
  className?: string;
  children: React.ReactNode;

}

function LinkTransition({href, children, className} : LinkTransitionProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    // @ts-ignore
    if (!document.startViewTransition) {
      // browser does not support view transition. Continue the default behavior.
      return;
    } else {
      // browser supports view transition. Animate the transtion.
      e.preventDefault();
      // @ts-ignore
      document.startViewTransition(() => {
        router.push(href);
      });
    }
  };

  return (
      <Link onClick={handleClick} href={href} className={className}>
        {children}
      </Link>
  );
}
export default LinkTransition;