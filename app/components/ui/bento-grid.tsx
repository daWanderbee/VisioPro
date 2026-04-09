import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-none p-6 md:p-10 bg-[#000000] border-white/10 border flex flex-col justify-end hover:border-white/20 hover:bg-[#060608] relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-10 right-10 group-hover/bento:-translate-y-2 group-hover/bento:translate-x-2 transition duration-200 opacity-50 group-hover/bento:opacity-100 mix-blend-screen mix-blend-plus-lighter">
         {/* Subtle icon background effect */}
         {icon}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 z-10">
        <div className="mb-4">
          {icon}
        </div>
        <div className="font-sans font-semibold text-white mb-2 tracking-tight text-xl md:text-2xl">
          {title}
        </div>
        <div className="font-sans font-normal text-[#a1a1a6] text-sm md:text-base leading-relaxed max-w-sm">
          {description}
        </div>
      </div>
    </div>
  );
};
