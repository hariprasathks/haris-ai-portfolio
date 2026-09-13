import { useEffect, useRef } from "react";

export function LightRays() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      node.style.setProperty("--ray-x", `${x * 1.8}%`);
      node.style.setProperty("--ray-y", `${y * 1.2}%`);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div ref={ref} className="light-rays" aria-hidden="true">
      <span className="light-rays__beam light-rays__beam--one" />
      <span className="light-rays__beam light-rays__beam--two" />
      <span className="light-rays__beam light-rays__beam--three" />
    </div>
  );
}
