import InstantSearch from "./instant-search";

const Search = () => {
  return (
    <div className="relative hidden md:block h-[35px] min-w-[200px] transition-all ease-in-out duration-100 ml-6 mr-auto focus-within:flex-1">
      <div className="focus-within:shadow-main-shadow rounded-md overflow-hidden">
        <InstantSearch />
      </div>
    </div>
  );
};

export default Search;
