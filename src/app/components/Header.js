import { GiTeapot } from "react-icons/gi";
import { FiSearch, FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <header className="w-full bg-orange-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold font-serif tracking-wide text-orange-300 flex items-center gap-2">
          AMTRA.VN<GiTeapot className="text-4xl text-orange-300" />
        </div>

        {/* Thanh tìm kiếm (ẩn trên màn hình nhỏ) */}
        <div className="flex-1 flex justify-center hidden md:flex">
          <div className="flex items-center rounded-full px-3 py-1 bg-orange-200 w-56 md:w-80">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="bg-transparent text-orange-800 outline-none px-2 text-sm flex-grow"
            />
            <FiSearch className="text-orange-800 text-lg cursor-pointer" />
          </div>
        </div>

        {/* Menu bên phải */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-orange-300 font-medium">
            <li className="hover:text-orange-400 cursor-pointer">Trang chủ</li>
            <li className="hover:text-orange-400 cursor-pointer">Sản phẩm</li>
            <li className="hover:text-orange-400 cursor-pointer">Liên hệ</li>
            <li className="hover:text-orange-400 cursor-pointer">Đăng ký</li>
            <li className="hover:text-orange-400 cursor-pointer">Đăng nhập</li>
          </ul>
        </nav>

        {/* Icon menu thu gọn trên mobile */}
        <div className="md:hidden text-orange-300 text-2xl cursor-pointer">
          <FiMenu />
        </div>
      </div>
    </header>
  );
}
