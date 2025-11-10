import CardPortfolio from "./cardPortfolio";
export default function Portfolio() {
  return (
    <div id="projects" className="min-h-screen pt-14 pb-5 flex flex-col items-center justify-center gap-y-5">
      <div className="text-center w-max">
        <h1 className="text-[36px] lg:text-[48px] xl:text-[62px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x from-primary to-secondary">
          Crafted By Me
        </h1>
        <h2 className="text-[24px] lg:text-[32px] xl:text-[41px] -mt-3">Powered by Passion</h2>
        <hr class="h-[2px]  border-0 bg-gradient-to-r from-primary bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-x to-secondary rounded-full" />
      </div>
      {/* cardPortfolio */}
      <CardPortfolio />
    </div>
  );
}
