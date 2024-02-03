import hero from "../assets/image.png";

const Hero = () => {
  return (
    <div className="mt-20 w-full">
      <div className="lg:flex items-center justify-between lg:text-left text-center ">
        {/* Text */}
        <div className="">
          <h1 className="text-4xl lg:text-5xl font-bold mb-5">
            Find freelance and fulltime remote jobs.
          </h1>
          <p className="text-secondary mb-10">
            Glumos is your one-stop-center for thousands of digital freelance
            and fulltime jobs.
          </p>
        </div>
        {/* Image */}
        <div className="flex items-center">
          <img
            src={hero}
            alt="hero"
            className="object-contain flex-1"
            width={550}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
