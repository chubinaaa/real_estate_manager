import Area from "./Area";
import Location from "./Location";
import PostalCode from "./PostalCode";
import Price from "./Price";
import Rooms from "./Rooms";

export default function EstateDetails() {
  return (
    <div className="w-fit flex flex-col justify-center items-start gap-2">
      <Price value={80568} />
      <Location value={{ address: "შარტავას 2", city: "თბილისი" }} />
      <Area value={58} />
      <Rooms value={2} />
      <PostalCode value="0156" />
    </div>
  );
}
