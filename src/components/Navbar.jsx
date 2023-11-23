import SearchInput from "./SearchInput"

const Navbar = ({search}) => {
  return (
    <header className="bg-slate-900 fixed w-full top-0 left-0 z-50">
      <div className="text-white flex justify-between items-center px-5 py-2" >
        <div>
          <p className="text-based md:text-xl xl:text-2xl font-semibold">Cinema Hunt</p>
        </div>
        <div className="py-2">
          <SearchInput search={search}/>
        </div>
      </div>
    </header>
  )
}

export default Navbar