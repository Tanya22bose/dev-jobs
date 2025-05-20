import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Switch } from "./ui/switch";

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  const toggleSwitch = ({
    nativeEvent: {
      srcElement: {
        dataset: { state },
      },
    },
  }: never) => {
    state === "unchecked" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="flex items-center gap-3">
      <Sun className="h-5 w-5" fill="white" />
      <Switch
        id="theme-switch"
        checked={theme === "dark"}
        onClick={(e) => toggleSwitch(e as never)}
      />
      <Moon className="h-5 w-5" fill="white" />
    </div>
  );
}
