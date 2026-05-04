import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[18rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  description,
  Icon,
  cta,
  className,
  background,
}: {
  name: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  cta?: string;
  className?: string;
  background?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-syn-card border border-syn-border bg-syn-surface/60 backdrop-blur",
        "transition duration-200 hover:-translate-y-0.5 hover:border-white/20",
        className,
      )}
    >
      {background && (
        <div className="absolute inset-0 opacity-60 transition group-hover:opacity-100">
          {background}
        </div>
      )}
      <div className="relative flex h-full flex-col justify-end gap-3 p-6">
        <Icon
          className="h-8 w-8 text-syn-cyan transition group-hover:scale-105"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-syn-text">{name}</h3>
          <p className="text-sm text-syn-text-dim leading-relaxed">
            {description}
          </p>
        </div>
        {cta && (
          <div className="pt-1 text-xs font-medium text-syn-cyan/90 inline-flex items-center gap-1">
            {cta}
            <ArrowRightIcon className="h-3 w-3" aria-hidden />
          </div>
        )}
      </div>
    </div>
  );
}
