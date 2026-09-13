import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export function LineSidebar() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const sections = items
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55%", threshold: [0.1, 0.4, 0.8] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="line-sidebar" aria-label="Section shortcuts">
      <div className="line-sidebar__rail" aria-hidden="true" />
      <div className="line-sidebar__items">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn("line-sidebar__item", active === item.href && "is-active")}
          >
            <span className="line-sidebar__dot" aria-hidden="true" />
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
