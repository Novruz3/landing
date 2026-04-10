import CallIcon from "@/src/shared/ui/icons/CallIcon";

function Header() {
  return (
    <header className="py-4 border-b bg-white relative px-2">
      <input id="menu-toggle" type="checkbox" className="hidden peer" />
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-purple-600">
          ШК
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#">Courses</a>
          <a href="#">How Learning</a>
          <a href="#">Reviews</a>
          <a href="#">FAQ</a>
        </nav>
        <div className="hidden md:flex text-sm font-medium items-center gap-2">
          <CallIcon/>
          <a href="tel:+79504256908" className="text-purple-600">+7 950 425-69-08</a>
        </div>
        <label
          htmlFor="menu-toggle"
          className="md:hidden flex flex-col gap-1 cursor-pointer"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </label>
      </div>
      <div className="
        absolute left-0 top-full w-full 
        bg-white shadow-md 
        hidden peer-checked:flex 
        flex-col gap-4 p-4 
        md:hidden z-50
      ">
        <a href="#">Courses</a>
        <a href="#">How Learning</a>
        <a href="#">Reviews</a>
        <a href="#">FAQ</a>
        <span className="pt-2 border-t">
          <a href="tel:+79504256908" className="text-purple-600">+7 950 425-69-08</a>
        </span>
      </div>
    </header>
  );
}

export default Header;
