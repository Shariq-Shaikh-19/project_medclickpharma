function Review() {
  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 md:px-16 lg:px-24 py-10">
        {/* Customer Review  */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          Customer Reviews
        </h2>
        {/* Head Div Start */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 z-10">
          {/* First Card */}
          <div className="bg-gray-100 z-10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full">
            {/* Image */}
            <img
              src="Review1.jpg"
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
              alt="John Deo"
            />
            {/* text */}
            <h3 className="text-base font-bold text-gray-900">John Deo</h3>
            <div className="flex items-center gap-0.5">
              {/* Paragraph */}
              <p className="text-sm text-gray-600 leading-relaxed">
                After using Silditop, there is a significant improvement in
                erectile function and sexual performance, which also helped me
                boost up confidence.
              </p>
            </div>
          </div>
          {/* 2nd card */}
          <div className="bg-gray-100 z-10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full">
            {/* Image */}
            <img
              src="Review2.jpg"
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
              alt="John Deo"
            />
            {/* text */}
            <h3 className="text-base font-bold text-gray-900">Maria Mak</h3>
            <div className="flex items-center gap-0.5">
              {/* Paragraph */}
              <p className="text-sm text-gray-600 leading-relaxed">
                Sildigra 25 mg was a great starting dose, worked smoothly
                without any harsh effects. Felt more relaxed and confident, as
                it worked pretty fast.
              </p>
            </div>
          </div>
          {/* 3rd Card */}
          <div className="bg-gray-100 z-10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full">
            {/* Image */}
            <img
              src="Review3.jpg"
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
              alt="John Deo"
            />
            {/* text */}
            <h3 className="text-base font-bold text-gray-900">Mark Milligan</h3>
            <div className="flex items-center gap-0.5">
              {/* Paragraph */}
              <p className="text-sm text-gray-600 leading-relaxed">
                Tried Fildena 100 mg, honestly, it worked better than I
                expected. Within 40 minutes, I felt more confident, as it really
                helped bring back my spark.
              </p>
            </div>
          </div>
          {/* 4th card */}
          <div className="bg-gray-100 z-10 rounded-2xl p-6 flex flex-col items-center text-center gap-3 h-full">
            {/* Image */}
            <img
              src="Review4.jpg"
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
              alt="John Deo"
            />
            {/* text */}
            <h3 className="text-base font-bold text-gray-900">Lucas</h3>
            <div className="flex items-center gap-0.5">
              {/* Paragraph */}
              <p className="text-sm text-gray-600 leading-relaxed">
                I'm Lucas, about to reach my 40s, suffering from ED. I've got to
                know about Vidalista, amazed by the results, all of my ED
                problems being solved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Review;
