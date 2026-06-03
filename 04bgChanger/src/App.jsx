import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("green");
  return (
    <div
      className="min-h-screen w-full transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_42%)] px-4 py-6 md:px-8 md:py-10">
        <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col gap-6 lg:flex-row">
          <aside className="w-full rounded-3xl border border-white/50 bg-white/60 p-5 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.55)] backdrop-blur-xl lg:w-80 lg:p-6">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Background Changer
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Pick a color from this sidebar to update the canvas instantly.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => setBgColor("red")}
                className={`outline-none rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all ${
                  bgColor === "red"
                    ? "ring-2 ring-red-200 shadow-lg"
                    : "hover:scale-[1.01]"
                }`}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Red
              </button>
              <button
                onClick={() => setBgColor("blue")}
                className={`outline-none rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all ${
                  bgColor === "blue"
                    ? "ring-2 ring-blue-200 shadow-lg"
                    : "hover:scale-[1.01]"
                }`}
                style={{ backgroundColor: "blue", color: "white" }}
              >
                Blue
              </button>
              <button
                onClick={() => setBgColor("black")}
                className={`outline-none rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all ${
                  bgColor === "black"
                    ? "ring-2 ring-slate-300 shadow-lg"
                    : "hover:scale-[1.01]"
                }`}
                style={{ backgroundColor: "black", color: "white" }}
              >
                Black
              </button>
              <button
                onClick={() => setBgColor("violet")}
                className={`outline-none rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all ${
                  bgColor === "violet"
                    ? "ring-2 ring-violet-200 shadow-lg"
                    : "hover:scale-[1.01]"
                }`}
                style={{ backgroundColor: "violet", color: "white" }}
              >
                Violet
              </button>
              <button
                onClick={() => setBgColor("lavender")}
                className={`outline-none rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all ${
                  bgColor === "lavender"
                    ? "ring-2 ring-purple-200 shadow-lg"
                    : "hover:scale-[1.01]"
                }`}
                style={{ backgroundColor: "lavender", color: "#2e1065" }}
              >
                Lavender
              </button>
            </div>
          </aside>

          <main className="flex-1">
            <div className="relative flex h-full min-h-105 items-center justify-center overflow-hidden rounded-3xl border border-white/50 bg-white/30 p-6 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.65)] backdrop-blur-lg md:p-10">
              <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/40 blur-2xl" />
              <div className="absolute -bottom-14 -right-14 h-52 w-52 rounded-full bg-black/10 blur-2xl" />

              <div className="relative w-full max-w-2xl rounded-3xl border border-white/60 bg-white/80 p-8 text-center shadow-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                  Live Preview
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                  Current Color: {bgColor}
                </h2>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
