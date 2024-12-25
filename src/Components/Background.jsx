const Background = () => {
  return (
    <div className="w-full h-screen fixed z-2 bg-gradient-to-r from-indigo-800 via-gray-800 to-black">
      <div className="absolute top-5 w-full py-10 flex justify-center text-zinc-100 text-xl font-semibold">
        <h1>Arpit Kumar's Project</h1>
      </div>
      <h1 className="absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] text-zinc-100 leading-none tracking-tighter">
        Docs
      </h1>
    </div>
  );
};

export default Background;
