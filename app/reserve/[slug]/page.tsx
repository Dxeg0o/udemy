import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function Reserve() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />

        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER*/}
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
            {/* HEADER*/} {/* FORM*/}
            <div className="mt-10 flex flex-wrap justify-between w-[660px] ">
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="First Name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="Email"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="Occasion (optional)"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4 bg-white"
                placeholder="Requests (optional)"
              />
              <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                Complete reservation
              </button>
              <p className="mt-4 text-sm">
                By clicking “Complete reservation” you agree to the OpenTable
                Terms of Use and Privacy Policy. Message & data rates may apply.
                You can opt out of receiving text messages at any time in your
                account settings or by replying STOP.
              </p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
