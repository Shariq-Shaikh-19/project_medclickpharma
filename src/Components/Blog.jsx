function Blog() {
  return (
    <>
      {/* Docotor Section  */}
      <section className="w-full px-4 md:px-16 lg:px-30 py-8">
        {/* Latest Blogs And See All Div  */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Latest Blogs
          </h2>
          <a
            href="#"
            className="text-teal-600 text-sm font-semibold hover:underline"
          >
            See All
          </a>
        </div>
        {/* Docotor Image head Div */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1st image card */}
          <div className="bg-white rounded-2xl border border-[#313851] overflow-hidden flex flex-col h-full z-10 ">
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src="Doctor1.avif"
                alt="Doctor Image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Discription */}
            <div className="flex flex-col flex-1 p-4 gap-3">
              <h3 className="text-base font-bold text-gray-900">
                What Doctors have to tell you about MedClickPharma's Medicines
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                MedclickPharma is truly delivering what it promises.
              </p>
              <a
                href="#"
                className="mt-2 block text-center border border-[#313851] rounded-full py-2.5 px-4 text-sm font-medium text-gray-800 hover:bg-[#313851] hover:text-white transition-colors duration-200"
              >
                Continue Reading
              </a>
            </div>
          </div>
          {/* 2nd image card */}
          <div className="bg-white rounded-2xl border border-[#313851] overflow-hidden flex flex-col h-full z-10 ">
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src="Doctor2.avif"
                alt="Docotr Image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Discription */}
            <div className="flex flex-col flex-1 p-4 gap-3">
              <h3 className="text-base font-bold text-gray-900">
                MedClickPharma have a wide range of products for men's health.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                Explore the products of MedClickPharma and find the best
                solution for your health needs.
              </p>
              <a
                href="#"
                className="mt-2 block text-center border border-[#313851] rounded-full py-2.5 px-4 text-sm font-medium text-gray-800 hover:bg-[#313851] hover:text-white transition-colors duration-200"
              >
                Continue Reading
              </a>
            </div>
          </div>
          {/* 3rd image card */}
          <div className="bg-white rounded-2xl border border-[#313851] overflow-hidden flex flex-col h-full z-10 ">
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src="Doctor3.avif"
                alt="Docotor Image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Discription */}
            <div className="flex flex-col flex-1 p-4 gap-3">
              <h3 className="text-base font-bold text-gray-900">
                Ever had a hairy, itchy, irritated eye? Cyclomune 0.05% Eye
                Drops can help.
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                Hair loss can be treated well with medclickpharma's products.
              </p>
              <a
                href="#"
                className="mt-2 block text-center border border-[#313851] rounded-full py-2.5 px-4 text-sm font-medium text-gray-800 hover:bg-[#313851] hover:text-white transition-colors duration-200"
              >
                Continue Reading
              </a>
            </div>
          </div>
          {/* 4th Image card */}
          <div className="bg-white rounded-2xl border border-[#313851] overflow-hidden flex flex-col h-full z-10 ">
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src="Doctor4.avif"
                alt="Docotor Image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Discription */}
            <div className="flex flex-col flex-1 p-4 gap-3">
              <h3 className="text-base font-bold text-gray-900">
                Tired of Dry, Irritated Eyes? Order Cyclomune 0.05% Eye Drops
                Online Today
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                It often starts as something small, something you can dismiss at
                first. You've been scrolling
              </p>
              <a
                href="#"
                className="mt-2 block text-center border border-[#313851] rounded-full py-2.5 px-4 text-sm font-medium text-gray-800 hover:bg-[#313851] hover:text-white transition-colors duration-200"
              >
                Continue Reading
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blog;
