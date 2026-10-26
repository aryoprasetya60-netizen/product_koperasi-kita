import { useTheme } from "../../context/ThemeContext";

function ThemeControl() {
  const { state, dispatch } = useTheme();

  const isDark = state.isDark;

  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        className={`p-4 rounded-md ${
          isDark ? "bg-black text-[#000080]" : "bg-[#F5DEB3] text-[#A52A2A]"
        }`}
      >
        Ganti Tema
      </button>
    </div>
  );
}

export default ThemeControl;
