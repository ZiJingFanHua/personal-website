export function SearchButton() {
  return (
    <button
      className="size-9 rounded-full shadow-lg shadow-zinc-800/5 border border-primary bg-white/50 dark:bg-zinc-800/50 backdrop-blur"
      type="button"
      aria-label="Search"
      onClick={openModal}
    >
      <i className="iconfont icon-search"></i>
    </button>
  )
}