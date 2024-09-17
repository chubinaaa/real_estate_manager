import Carousel from "./carousel/Carousel";

export default function Suggestions() {
  return (
    <div className="w-full flex flex-col justify-center items-start mt-[67px] gap-12 mb-[250px]">
      <h1 className="font-medium text-[32px]">ბინები მსგავს ლოკაციაზე</h1>
      <Carousel />
    </div>
  );
}
