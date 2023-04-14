const MidRight= () => {
    return (
        <>
        <div className="shadow-2xl">
        <div className="grid gap-4  justify-items-center pt-20 pb-12 px-20">
          <h1 className="text-4xl font-extrabold pb-4">Rendering</h1>
          <p className="py-2 text-gray-400">To Download iso click below</p>
          <button
            class="text-gray-500 border border-gray-700 hover:bg-gray-100 active:bg-gray-300 font-bold uppercase px-28 py-3 rounded outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-100"
            type="button"
          >
            Download
          </button>
        </div>

        <div className="bg-gray-100 h-96">
          <ul className="px-8 py-4">
            <li className="text-lg font-semibold text-gray-700 py-2 flex">
              TMUX
            </li>
            <li className="text-lg font-semibold text-gray-700 py-2">NVIM</li>
            <li className="text-lg font-semibold text-gray-700 py-2">Libs</li>
          </ul>
        </div>
        </div>
    
        </>
    )
}

export default MidRight;
