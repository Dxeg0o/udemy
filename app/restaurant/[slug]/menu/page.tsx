import NavBar from "../../../components/NavBar";
import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";

export default function menuPage() {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Menu />
        </div>
      </div>
    </>
  );
}
