import { useTheme } from "../../context/ThemeContext";

function ThemeDisplay() {
  const { state } = useTheme();

  const isDark = state.isDark;

  return (
    <div
      className={`p-8 rounded-md ${
        isDark ? "bg-black text-[#000080]" : "bg-[#F5DEB3] text-[#A52A2A]"
      }`}
    >
      <h1 className="text-2xl font-bold">
        {isDark ? "Dark Mode" : "Light Mode"}
      </h1>
    </div>
  );
}

export default ThemeDisplay;
