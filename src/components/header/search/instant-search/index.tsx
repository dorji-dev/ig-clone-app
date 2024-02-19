import { TbSearch } from "react-icons/tb";

const InstantSearch = () => {
  return (
    <>
      <div className="absolute flex pl-3 items-center pointer-events-none h-[35px] inset-y-0">
        <TbSearch className="w-5 h-5 text-gray-500" />
      </div>
      <input
        className="block w-full h-[35px] bg-[#e8eaed] border-0 focus:ring-0 focus:outline-0 pl-10 pr-5"
        aria-label="Search people"
        placeholder="Search people"
      />
    </>
  );
};

export default InstantSearch;
