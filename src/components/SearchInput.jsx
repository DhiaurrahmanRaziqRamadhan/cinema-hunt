import { FaSearch } from "react-icons/fa";

const SearchInput = ({ search }) => {
  return (
    <div className="focus-within:outline-primary focus-within:ring-primary relative flex h-12 w-80 items-center justify-center rounded-md bg-neutral-900 text-xl text-slate-200 duration-100 focus-within:border-transparent focus-within:ring-2 hover:bg-neutral-800 xl:h-16 xl:w-96 xl:rounded-xl xl:px-2 xl:py-[2px]">
      <div className="absolute inset-y-1 left-5 flex items-center">
        <FaSearch />
      </div>
      <input
        placeholder="Cari film..."
        className="w-full bg-transparent pl-14 outline-none"
        onChange={({ target }) => search(target.value)}
      />
    </div>
  );
};
export default SearchInput;
