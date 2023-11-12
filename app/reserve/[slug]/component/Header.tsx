export default function Header() {
  return (
    <div className="">
      <h3 className="font-bold">Estás casi</h3>
      <div className="mt-5 flex">
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/2/50549066.webp"
          alt=""
          className="w-32 h-18 rounded"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">Donde el Wilson</h1>
          <div className="flex mt-3">
            <p className="mr-6">Mar, 22, 2023</p>
            <p className="mr-6">7:30pm</p>
            <p className="mr-6">3 people</p>
          </div>
        </div>
      </div>
    </div>
  );
}
