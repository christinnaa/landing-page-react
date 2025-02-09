import { Switch } from "@headlessui/react";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function Toggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setEnabled(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggle = (enabled) => {
    setEnabled(enabled);
    if (enabled) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
      className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${
        enabled ? "bg-primaryColor" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute flex h-5 w-5 items-center justify-center transform rounded-full bg-white transition ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {enabled ? <Moon size={14} className="text-primaryColor" /> : <Sun size={14} className="text-yellow-500" />}
      </span>
    </Switch>
  );
}

export default Toggle;
