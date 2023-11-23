const SearchInput = ({search}) => {
  return (
    <input
      placeholder="cari film"
      className="rounded-md px-2 py-[2px] xl:px-4 xl:py-2 xl:rounded-lg text-slate-800 box-border text-based"
      onChange={({target}) => search(target.value)}/>
  )
}
export default SearchInput