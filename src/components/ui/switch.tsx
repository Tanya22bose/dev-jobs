import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer relative data-[state=checked]:bg-white data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 cursor-pointer dark:data-[state=unchecked]:bg-white inline-flex h-[1.5rem] w-12 shrink-0 items-center rounded-full border-[4px] border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "absolute top-1/2 left-[2px] h-[0.9rem] w-[0.9rem] -translate-y-1/2 rounded-full bg-[#5a65e0] hover:bg-[#939BF4] transition-all duration-200 data-[state=checked]:left-[calc(100%-1.1rem)] data-[state=unchecked]:left-0.5"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
