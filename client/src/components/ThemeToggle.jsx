import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch"; // Ensure correct import path

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement; // Ensure correct application
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-700 dark:text-gray-300">☀️</span>
      <Switch
        checked={darkMode} // Radix UI expects `checked` for controlled components
        onCheckedChange={(checked) => setDarkMode(checked)} // Ensure correct event handling
      />
      <span className="text-sm text-gray-700 dark:text-gray-300">🌙</span>
    </div>
  );
}
