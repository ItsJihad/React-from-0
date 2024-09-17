import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [NumberAllowed, setAllowNumber] = useState(false);
  const [CharAllowed, setAllowChar] = useState(true);
  const [password, setpassword] = useState();
 //------------------CLipboardFeature-----------------------//
  const passReff = useRef(null);
  const CopytoClipBoard = useCallback(() => {
    passReff.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  
  //----------------PasswordGenerator----------------------//

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (NumberAllowed) string += "0123456789";
    if (CharAllowed) string += "!@#$%^&*-_+=[]{}~`";

    for (let pg = 1; pg <= length; pg++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass = pass + string.charAt(char);
    }
    setpassword(pass);
  }, [length, NumberAllowed, CharAllowed, setpassword]);
//-------------------Autoregenerate-----------------------//
  useEffect(() => {
    passwordGenerator();
  }, [length, NumberAllowed, CharAllowed, passwordGenerator]);




  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full items-center mx-4  transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-4xl font-bold mb-6 text-center text-red-500">
            Password Generator
          </h1>
          <div className="relative mb-6">
            <input
              type="text"
              value={password}
              placeholder="password"
              readOnly
              ref={passReff}
              className="w-full py-3 px-4 bg-yellow-100 rounded-full text-xl font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <button
              id="copy"
              onClick={CopytoClipBoard}
              className="absolute right-2 top-2 bg-green-500 text-white rounded-full p-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          <div className="mb-6">
            {" "}
            {/* length */}
            <input
              type="range"
              className="w-full appearance-none bg-blue-200 h-3 rounded-full outline-none opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
              min={10}
              max={69}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <label>Length : {length}</label>
          </div>
          <div className="flex justify-between mb-6">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-red-500 rounded focus:ring-red-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
                defaultChecked={NumberAllowed}
                onChange={(e) => {
                  setAllowNumber((prev) => !prev);
                }}
              ></input>
              <label className="mx-2">Numbers</label>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
                defaultChecked={CharAllowed}
                onChange={(e) => {
                  setAllowChar((prev) => !prev);
                }}
              ></input>
              <label className="mx-2"> Characters</label>
            </label>
          </div>
          <button
            id="generate"
            onClick={(e) => {
              passwordGenerator();
            }}
            className="w-full bg-red-500 text-white py-3 rounded-full text-xl font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-300 transform hover:scale-105"
          >
            Generate
          </button>
        </div>



        {/* <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full items-center mx-4  transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="relative mb-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-red-500">
              Coppied Password
            </h1>
            <input
              type="text"
              value={password}
              placeholder="password"
              readOnly
              className="w-full py-3 px-4 bg-yellow-100 rounded-full text-xl font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
