export default function SearchSideBar() {
  return (
    <div className="w-1/5">
      <div className="border b-pb-4">
        <h1 className="mb-2">Region</h1>
        <p className="font-light text-reg">Santiago</p>
        <p className="font-light text-reg">Los Lagos</p>
        <p className="font-light text-reg">Valparaiso</p>
        <p className="font-light text-reg">Arica y Parinacota</p>
        <p className="font-light text-reg">Los Rios</p>
        <p className="font-light text-reg">Magallanes</p>
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        <p className="font-light text-reg">Mexican</p>
        <p className="font-light text-reg">Italian</p>
        <p className="font-light text-reg">Chinese</p>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            $
          </button>
          <button className="border-t border-b border-r w-full text-reg font-light p-2">
            $$
          </button>
          <button className="border-t border-b border-r w-full text-reg font-light rounded-r p-2">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
