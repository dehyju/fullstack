import logo from "../../assets/logo.svg"

type BannerProps = {
    size?: string
}

const Banner = ({size = "text-2xl"}: BannerProps) => {
  return (
    <div className={`flex justify-center items-center gap-x-4 ${size}`}>
      <img className="flex h-[2em] rounded-2xl" src={logo} />
      <h1 className="text-[1.1em]">
        <span className="font-bold">Stephen</span>Leong
      </h1>
    </div>
  );
};

export default Banner;
