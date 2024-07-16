import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative text-white xl:py-10">
      <div className="background-image"></div>
      <div className="z-100 relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Discover the World with Us
        </h1>
        <p className="mt-6 max-w-3xl text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa
          accusamus reprehenderit amet magnam provident eum molestias esse
          soluta eveniet nisi ut, adipisci laborum fugiat, commodi expedita,
          earum dolore rerum?
        </p>
        <div className="mt-10">
          <a
            href="#booking"
            className="rounded-full bg-slate-500/40 px-6 py-3 font-bold text-white transition-all duration-500 ease-in-out hover:bg-white/20"
          >
            Book Your Adventure
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
