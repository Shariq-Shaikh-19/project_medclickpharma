import { useState } from "react";
function MainPage() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    <>
      <div className="bg-white text-black">
        {/* Photo Watermark */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <img
            src="/BG-LOGO.png"
            alt="Logo"
            className="w-125 h-125 object-cover rounded-full opacity-[0.3] "
          />
        </div>
        {/* Navbar Start */}
        <nav className="w-full font-sans relative z-50">
          {/* first nav  section  */}
          <div className="font-bold flex items-center justify-between px-4 md:px-8 py-1.5 text-white text-xs bg-[rgb(49_56_81)]">
            {/* Gmail */}
            <a
              href="
            mailto:medclickpharma@gmail.com"
              className="flex items-center gap-1.5 no-underline hover:underline"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              mailto:medclickpharma@gmail.com
            </a>
            {/* Telephone number  */}
            <a
              href="91 75593 00419"
              className="flex items-center gap-1.5 no-underline hover:underline"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"></path>
              </svg>
              +91 75593 00419
            </a>
          </div>

          {/* second Nav section   */}
          <div className="px-4 md:px-8 py-3 bg-white">
            <div className="flex items-center gap-3">
              {/* logo */}
              <a href="/">
                <img
                  alt="Logo"
                  className="w-36 h-36 object-contain"
                  src="/BG-LOGO.png"
                />
              </a>
              {/* Center search Bar  */}
              <div className="hidden md:flex flex-1 max-w-xl mx-auto">
                <div className="flex w-150 mx-auto">
                  <input
                    placeholder="Search medicines..."
                    className="flex-1 px-4 py-3 text-sm outline-none rounded-l-md bg-white text-gray-700 placeholder-gray-400 border-2 border-[#b6c7d6] foc
                    us:border-[#313851] transition-colors"
                    type="text"
                  />
                  {/* Search Button */}
                  <button className="px-6 py-3 text-sm font-semibold text-white rounded-r-md cursor-pointer hover:opacity-90 transition-opacity bg-[rgb(49_56_81)]">
                    Search
                  </button>
                </div>
              </div>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/917559300419"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white rounded-full py-2 px-3 md:px-4 hover:shadow-md transition-shadow shrink-0 border-2 border-[#313851]"
              >
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#25D366" />

                  <path
                    d="M22.5 9.5C20.8 7.8 18.5 6.9 16 6.9C10.7 6.9 6.4 11.2 6.4 16.5C6.4 18.2 6.9 19.9 7.7 21.3L6.3 25.7L10.8 24.3C12.2 25.1 13.8 25.5 15.5 25.5H16C21.3 25.5 25.6 21.2 25.6 15.9C25.6 13.5 24.2 11.2 22.5 9.5ZM16 23.9C14.5 23.9 13 23.5 11.8 22.8L11.4 22.6L8.4 23.5L9.3 20.6L9.1 20.2C8.3 18.9 7.9 17.4 7.9 15.9C7.9 11.8 11.2 8.5 15.5 8.5C17.6 8.5 19.5 9.3 21 10.8C22.5 12.3 23.3 14.3 23.3 16.4C23.7 20.6 20.3 23.9 16 23.9ZM20.3 18.1C20.1 18 19 17.4 18.8 17.4C18.6 17.3 18.5 17.3 18.3 17.5C18.2 17.7 17.7 18.3 17.5 18.5C17.4 18.7 17.2 18.7 17.1 18.6C16 18.1 15.2 17.6 14.4 16.5C14.2 16.2 14.7 16.2 15.1 15.5C15.2 15.3 15.1 15.2 15 15.1C14.9 15 14.3 13.9 14.1 13.4C13.9 13 13.7 13 13.5 13H13.1C12.9 13 12.6 13.1 12.4 13.3C12.2 13.5 11.5 14.1 11.5 15.2C11.5 16.3 12.4 17.4 12.5 17.5C12.6 17.6 14.3 20.2 16.9 21.1C18.6 21.7 19.3 21.8 20.2 21.6C20.7 21.5 21.8 20.9 22 20.3C22.2 19.6 22.2 19.1 22.1 19C22 18.9 21.9 18.8 20.3 18.1Z"
                    fill="white"
                  />
                </svg>

                <span className="hidden md:inline text-sm font-semibold text-[#313851]">
                  WhatsApp Us
                </span>
              </a>
            </div>
          </div>
          {/* LAST NAVBAR */}
          <div className=" mx-auto px-8 bg-[rgb(49_56_81)] max-w-full text-white ">
            <ul className="flex items-center justify-center gap-10 h-15">
              {/* Men's Health */}
              <li className="relative">
                <button
                  onClick={() => toggleMenu("men")}
                  className="flex items-center gap-2 text-[16px] font-semibold whitespace-nowrap"
                >
                  Men's Health
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openMenu === "men" ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {openMenu === "men" && (
                  <div className="absolute left-0 top-full w-57.5 bg-white text-gray-700 shadow-xl z-50">
                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Avanafil
                    </a>

                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Dapoxetine
                    </a>

                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Sildenafil
                    </a>

                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Tadalafil
                    </a>

                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Vardenafil
                    </a>
                  </div>
                )}
              </li>

              {/* Women's Health */}
              <li className="relative">
                <button
                  onClick={() => toggleMenu("women")}
                  className="flex items-center gap-2 text-[16px] font-semibold whitespace-nowrap"
                >
                  Women's Health
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openMenu === "women" ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {openMenu === "women" && (
                  <div className="absolute left-0 top-full w-57.5 bg-white text-gray-700 shadow-xl z-50">
                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Contraceptives
                    </a>
                  </div>
                )}
              </li>

              {/* Normal Links */}
              <li>
                <a
                  href="#"
                  className="text-[16px] font-semibold whitespace-nowrap"
                >
                  Pain Killer
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[16px] font-semibold whitespace-nowrap"
                >
                  Weight Loss
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[16px] font-semibold whitespace-nowrap"
                >
                  Steroid
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[16px] font-semibold whitespace-nowrap"
                >
                  Sleeping Pills
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[16px] font-semibold whitespace-nowrap"
                >
                  Modafinil & Armodafinil
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[16px] font-semibold whitespace-nowrap"
                >
                  Antiviral & Antibiotic
                </a>
              </li>

              {/* Other Categories */}
              <li className="relative">
                <button
                  onClick={() => toggleMenu("other")}
                  className="flex items-center gap-2 text-[16px] font-semibold whitespace-nowrap"
                >
                  Other Categories
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openMenu === "other" ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {openMenu === "other" && (
                  <div className="absolute right-0 top-full w-57.5 bg-white text-gray-700 shadow-xl z-50">
                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Hair Loss Treatment
                    </a>

                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Skin Cream
                    </a>

                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Eye-Ear-Drops
                    </a>

                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Kamagra All Range
                    </a>

                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Best Seller
                    </a>

                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Others
                    </a>

                    <a
                      href="#"
                      className="block px-5 py-3 text-sm hover:bg-gray-100"
                    >
                      Drop Shipping
                    </a>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
export default MainPage;
