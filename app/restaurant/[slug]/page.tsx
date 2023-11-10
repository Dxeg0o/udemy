import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen text-black">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl capitalize text-center text-white text-shadow">
              Donde el Wilson (Santiago)
            </h1>
          </div>
        </div>
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESTAURANT NAVBAR */}
            <nav className="flex text-reg border-b pb-2">
              <Link href="/restaurant/blablabla" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/blablabla/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* RESTAURANT NAVBAR */} {/* TITLE */}
            <div className="my-4 pb-4 border-b">
              <h1 className="font-bold text-6xl capitalize">
                {" "}
                Donde el Wilson
              </h1>
            </div>
            {/* TITLE */} {/* RATINGS */}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 Reviews</p>
              </div>
            </div>
            {/* RATINGS */} {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
                De la mano del concepto "New Chilean Cuisine", trasladamos a
                nuestra cocina los mejores productos locales, respetando la
                temporada de los ingredientes, apoyando a los productores
                artesanales, utilizando pesca responsable y potenciando los
                productos orgánicos. Todo esto hace que Estró hoy tenga el
                estilo que lo caracteriza: relajado, cálido, responsable y con
                una cocina enriquecida con sabores y técnicas del mundo. **
                Discover the wide coastline and extensive geography reflected in
                the culinary treasures of Chile, from our rooted origins to the
                renowned concept of “New Chilean Cuisine”. Sustainable
                farm-to-table products that guarantee the freshness and purity
                of each ingredient which provide new flavor combinations that
                invite our guests to savor a delightful culinary experience
                through our Country.
              </p>
            </div>
            {/* DESCRIPTION */} {/* IMAGES */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                5 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/55924224.webp"
                  alt=""
                  className="w-56 h-44 mb-1 mr-1"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/1/24713929.webp"
                  alt=""
                  className="w-56 h-44 mb-1 mr-1"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/1/51625286.webp"
                  alt=""
                  className="w-56 h-44 mb-1 mr-1"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/55924174.webp"
                  alt=""
                  className="w-56 h-44 mb-1 mr-1"
                />
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/2/55924227.webp"
                  alt=""
                  className="w-56 h-44 mb-1 mr-1"
                />
              </div>
            </div>
            {/* IMAGES */} {/* REVIEWS */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b p-5">
                What 100 people are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="w1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">DS</h2>
                      </div>
                      <p className="text-center">Diego Soler</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="flex mr-5">*****</div>
                      </div>
                      <div className="mt-5">
                        <p className="text-lg font-light">
                          Comida exquisita, el ambiente y la atención es muy
                          buena. Eso si no estaba disponible el pulpo ni el
                          salmón cuando fuimos y nos quedamos con las ganas,
                          pero salvo eso todo lo demás excelente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* REVIEW CARD */}
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="" className="">
                  {" "}
                  Party size{" "}
                </label>
                <select
                  name=""
                  id=""
                  className="py-3 border-b font-light bg-white"
                >
                  <option value="">1 person</option>
                  <option value="">2 people</option>
                </select>
              </div>
              <div className="justify-between flex">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="py-3 border-b font-light w-28 bg-white"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Time</label>
                  <select
                    name=""
                    id=""
                    className="py-3 border-b font-light bg-white "
                  >
                    <option value="">7:30AM</option>
                    <option value="">9:30AM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16 text-2xl">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
        {/* RESERVATION
    CARD PORTION */}
      </main>
    </main>
  );
}
