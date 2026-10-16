function SkinCare (){
    return (
        <>
        {/* Main first two sections */}
      <main className="flex-1 relative z-10">
        {/* first section */}
        <section className="w-full px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto ">
            {/* div for heading and cards */}
            <div className="flex-1 rounded-2xl p-5 border-[1.5px] border-[#313851]">
              {/* div for heading */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-extrabold text-gray-900 font-[Georgia,serif]">
                  BestSeller
                </h2>
                <a
                  href="#"
                  className="text-sm font-semibold no-underline hover:underline text-[rgb(23,184,197)]"
                >
                  See All
                </a>
              </div>
              {/* div for cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  {/* 1st card */}
                  <div className="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-35">
                    <img
                      src="Bestseller1.jpg"
                      alt=""
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1">
                    Cenforce-100
                  </p>
                  <a
                    href="#"
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
              {/* 2nd Card */}
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <div className="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-35">
                    <img src="Bestsaller2.png" alt="" />{" "}
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1">
                    Ivermectin 12
                  </p>
                  <a
                    href="#"
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
              {/* 3rd card */}
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <div className="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-35">
                    <img src="Bestsaller3.png" alt="" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1">
                    Nervigesic-300
                  </p>
                  <a
                    href="#"
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
              {/* 4th Card */}
                <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <div className="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-35">
                    <img src="Bestsaller4.png" alt="" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1">
                    Artvigil-150
                  </p>
                  <a
                    href="#"
                    className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 bg-[rgb(49,56,81)]"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
{/* ================================================================================= */}

            {/* side div section */}
            <div className="w-full md:w-72 lg:w-80 shrink-0">
              <div className="rounded-2xl p-6 flex flex-col gap-5 bg-[rgb(254,251,232)] border border-[rgb(232,216,122)]">
                <h2 className="text-xl font-extrabold text-gray-900 leading-snug font-[Georgia,serif]">
                  How to Order Medicines online?
                </h2>
                <div className="flex flex-col gap-4">
                  {/* first div 1 */}
                  <div className="flex items-start gap-3">
                    {/* div for circle and number */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 border-2 justify-center shrink-0 border-[rgb(23_184_197)] font-bold text-sm text-[rgb(23_184_197)] rounded-full flex items-center">
                        1
                      </div>
                      {/* div for dashes */}
                      <div className="w-px mt-1 h-7 border-l-2 border-dashed border-l-[rgb(23,184,197)]"></div>
                    </div>
                    {/* div for text */}
                    <div className="pt-0.5">
                      <p className="text-sm font-bold text-gray-900">
                        Search your meds
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Compare prices & brands.
                      </p>
                    </div>
                  </div>

                  {/* second div 2 */}
                  <div className="flex items-start gap-3">
                    {/* div for circle and number */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 border-2 justify-center shrink-0 border-[rgb(23_184_197)] font-bold text-sm text-[rgb(23_184_197)] rounded-full flex items-center">
                        2
                      </div>
                      {/* div for dashes */}
                      <div className="w-px mt-1 h-7 border-l-2 border-dashed border-l-[rgb(23,184,197)]"></div>
                    </div>
                    {/* div for text */}
                    <div className="pt-0.5">
                      <p className="text-sm font-bold text-gray-900">
                        Place your order
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        We'll get your prescriptions.
                      </p>
                    </div>
                  </div>

                  {/* third div 3 */}
                  <div className="flex items-start gap-3">
                    {/* div for circle and number */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 border-2 justify-center shrink-0 border-[rgb(23_184_197)] font-bold text-sm text-[rgb(23_184_197)] rounded-full flex items-center">
                        3
                      </div>
                      {/* div for dashes */}
                      <div className="w-px mt-1 h-7 border-l-2 border-dashed border-l-[rgb(23,184,197)]"></div>
                    </div>
                    {/* div for text */}
                    <div className="pt-0.5">
                      <p className="text-sm font-bold text-gray-900">
                        Satisfaction Guaranteed
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Meds delivered on your terms.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-semibold text-[rgb(23,184,197)]">
                  Please provide a valid prescription at checkout for a seamless
                  experience
                </p>
              </div>
            </div>
          </div>
        </section>
{/* ================================================================================== */}
{/* Shop by Health corner  */}
        {/* second section */}
        <section className="w-full py-8 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-6 font-[Georgia,serif]">
            Shop By Health Concerns
          </h2>

          {/* div for 5 sections */}
          <div className="hidden md:grid grid-cols-5 gap-4 max-w-7xl mx-auto">
            {/* first Image  */}
            <a
              href="#"
              className="block relative rounded-2xl overflow-hidden no-underline group bg-[rgb(200,230,192)] h-50 w-full border border-gray-400"
            >
              <img
                src="Shop1.jpeg"
                alt="Skin Care"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-start gap-2">
                <p className="text-white font-extrabold text-sm leading-tight">
                  Skin Care
                </p>
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full transition-opacity duration-200 group-hover:opacity-90 bg-[#111111] tracking-wider">
                  SHOP NOW
                </span>
              </div>
            </a>
            {/* Second Image  */}
            <a
              href="#"
              className="block relative rounded-2xl overflow-hidden no-underline group bg-[rgb(200,230,192)] h-50 w-full border border-gray-400"
            >
              <img
                src="Shop2.jpg"
                alt="Problem"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-start gap-2">
                <p className="text-white font-extrabold text-sm leading-tight">
                  ERECTILE DYSFUNCTION
                </p>
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full transition-opacity duration-200 group-hover:opacity-90 bg-[#111111] tracking-wider">
                  SHOP NOW
                </span>
              </div>
            </a>
              {/* Third Image  */}
            <a
              href="#"
              className="block relative rounded-2xl overflow-hidden no-underline group bg-[rgb(200,230,192)] h-50 w-full border border-gray-400"
            >
              <img
                src="Shop3.jpg"
                alt="Problem-2"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-start gap-2">
                <p className="text-white font-extrabold text-sm leading-tight">
                  PREMATURE EJACUALATION
                </p>
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full transition-opacity duration-200 group-hover:opacity-90 bg-[#111111] tracking-wider">
                  SHOP NOW
                </span>
              </div>
            </a>
            {/* Fourth Image */}
            <a
              href="#"
              className="block relative rounded-2xl overflow-hidden no-underline group bg-[rgb(200,230,192)] h-50 w-full border border-gray-400"
            >
              <img
                src="shop4.jpg"
                alt="Eye Care"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-start gap-2">
                <p className="text-white font-extrabold text-sm leading-tight">
                  EYE CARE
                </p>
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full transition-opacity duration-200 group-hover:opacity-90 bg-[#111111] tracking-wider">
                  SHOP NOW
                </span>
              </div>
            </a>
          {/* fifth Image */}
            <a
              href="#"
              className="block relative rounded-2xl overflow-hidden no-underline group bg-[rgb(200,230,192)] h-50 w-full border border-gray-400"
            >
              <img
                src="Shop5.jpg"
                alt="Hair issue"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-start gap-2">
                <p className="text-white font-extrabold text-sm leading-tight">
                  HAIR PROBLEM
                </p>
                <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full transition-opacity duration-200 group-hover:opacity-90 bg-[#111111] tracking-wider">
                  SHOP NOW
                </span>
              </div>
            </a>
          </div>
        </section>
      </main>
{/* =============================================================================== */}

      {/* third section */}
      <section className="w-full px-4 md:px-8 py-8 ">
        <div className="max-w-7xl mx-auto">
          {/* div for link and heading */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-[Georgia,serif]">
              Skin Care
            </h2>
            <a
              href="#"
              className="text-sm font-semibold no-underline hover:underline text-[rgb(23,184,197)]"
            >
              See All
            </a>
          </div>

          {/* div for images */}
          <div className="hidden md:grid grid-cols-5 gap-4">
            <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
      {/* 1st image */}
              <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40 ">
                <img src="Skin1.jpg" alt="GLYCO 6.jpg" className="object-contain w-full h-full transition-transform duration-300 cursor-pointer" />
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                GLYCO 6%
              </p>
              <a
                href=""
                className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
              >
                Enquire Now
              </a>
            </div>
{/* Second img  */}
            <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
              <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                <img src="Skin2.jpg" alt="Tretiheal 0.05 cream" className="object-contain w-full h-full transition-transform duration-300 cursor-pointer"/>
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                Tretiheal 0.05% cream
              </p>
              <a
                href=""
                className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
              >
                Enquire Now
              </a>
            </div>
{/* 3rd Img */}
            <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
              <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                <img src="Skin5.jpg" alt="Tretiheal 0.1 cream" className="object-contain w-full h-full transition-transform duration-300 cursor-pointer" />
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                Tretiheal 0.1% cream
              </p>
              <a
                href=""
                className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
              >
                Enquire Now
              </a>
            </div>
{/* 4th Img */}
            <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
              <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                <img src="Skin4.jpg" alt="Skinlite" className="object-contain w-full h-full transition-transform duration-300 cursor-pointer" />
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                Skinlite
              </p>
              <a
                href=""
                className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
              >
                Enquire Now
              </a>
            </div>
{/* 5th Img */}
            <div className="flex flex-col items-center rounded-2xl border-2 border-[#313851] bg-white p-4 gap-3 hover:shadow-lg transition-shadow duration-200 h-full w-full justify-center overflow-hidden opacity-100 relative z-10">
              <div class="w-full flex items-center justify-center rounded-xl overflow-hidden bg-gray-50 h-40">
                <img src="Skin5.jpg" alt="Tretiheal 0.025 cream" className="object-contain w-full h-full transition-transform duration-300 cursor-pointer" />
              </div>
              <p className="text-sm font-semibold text-gray-800 text-center leading-snug mt-1 flex-1">
                Tretiheal 0.025% cream
              </p>
              <a
                href=""
                className="w-full text-center text-sm font-bold text-gray-200 no-underline rounded-lg py-2 px-4 transition-opacity duration-150 hover:opacity-90 active:scale-95 block bg-[rgb(49,56,81)]"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}
export default SkinCare;