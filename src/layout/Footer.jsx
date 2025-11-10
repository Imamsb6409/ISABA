export default function footer() {
  return (
    <div className="min-h-[50vh] bg-gradient-to-b from-white to-primary flex flex-col items-center justify-center border rounded-t-2xl text-white text-center py-4 w-full">
      <div className="w-full">
        <h2>Navigation</h2>
        <div className="flex flex-col">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">contact</a>
        </div>
      </div>
      <h3 className="font-pacifico">Copyright © <span>ISABA</span>  2025</h3>
      <h1 className="font-pacifico">ISABA</h1>
    </div>
  );
}
