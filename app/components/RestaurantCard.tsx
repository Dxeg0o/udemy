import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/blablabla">
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/52968190.webp"
          alt=""
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">Donde el Wilson</h3>
          <div className="flex items-start ">
            <div className="flex mb-2">****</div>
            <p className="ml-2 "> 77 reviews</p>
          </div>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className="mr-3">Chilean</p>
          <p className="mr-3">$$$$</p>
          <p className="">Santiago</p>
        </div>
        <p className="text-sm mt-1 font-bold">Booked 3 times ago</p>
      </Link>
    </div>
  );
}
