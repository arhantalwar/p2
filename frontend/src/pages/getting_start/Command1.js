const Command1 = (props) => {
  return (
    <>
      <div
        class="coding inverse-toggle px-5  shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-gray-950  pb-6 pt-4 rounded-lg leading-normal overflow-hidden"
      >
        <div class="mt-4 grid gap-2">
          <div className="flex">
            <span class="text-green-400">computer:~$</span>
            <p class="flex-1 typing items-center pl-2">{props.CommandA}</p>
          </div>
          <div className="flex">
            <span class="text-green-400">computer:~$</span>
            <p class="flex-1 typing items-center pl-2">{props.CommandB}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Command1;
