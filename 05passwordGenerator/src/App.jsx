import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [containNum, setContainNum] = useState(false);
  const [containChar, setContainChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  // useRef hook
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 10); // to select values only in the specified range
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (containNum) str += "0123456789";
    if (containChar) str += "~!@#$%^&*()_{}[]";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, containChar, containNum, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, containChar, containNum, passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-gray-900 to-indigo-900 p-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-6 shadow-2xl">
        <h1 className="text-2xl font-semibold text-white text-center mb-4">
          Password Generator
        </h1>

        <div className="flex mb-4 shadow-sm rounded-lg overflow-visible bg-gray-800 relative">
          <input
            type="text"
            value={password}
            className="w-full py-3 px-4 bg-transparent text-amber-100 placeholder-amber-200 font-mono text-sm focus:outline-none rounded-l-lg"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-white px-5 py-2 font-medium rounded-r-lg shadow-md hover:shadow-lg transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="w-56 accent-amber-400 cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <div className="text-amber-200">
                Length: <span className="font-medium text-white">{length}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                id="numberInput"
                className="h-4 w-4 accent-amber-400"
                onChange={() => {
                  setContainNum((prev) => !prev);
                }}
              />
              <span className="text-amber-100">Numbers</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                id="characterInput"
                className="h-4 w-4 accent-amber-400"
                onChange={() => {
                  setContainChar((prev) => !prev);
                }}
              />
              <span className="text-amber-100">Characters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
