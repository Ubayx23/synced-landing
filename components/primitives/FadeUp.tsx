"use client";

import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

export function FadeUp({
  children,
  delay = 0,
  triggerOnMount = false,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  triggerOnMount?: boolean;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (triggerOnMount) {
      const id = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(id);
    }
  }, [triggerOnMount]);

  const visible = triggerOnMount ? mounted : inView;
  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-500 ease-out will-change-[opacity,transform]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className,
      )}
    >
      {children}
    </Component>
  );
}
