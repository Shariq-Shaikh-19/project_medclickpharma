function Pe(){
return (
    <>
    <section className="px-4 md:px-8 py-8 max-w-7xl mx-auto font-sans text-gray-800">
          {/* Primary Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 text-gray-900">
            What is PE?
          </h1>

          {/* first para */}
          <p className="text-sm sm:text-base leading-relaxed mb-6 text-gray-700">
            Premature ejaculation (PE) is one of the most prevalent sexual
            disorders that afflict countless men across the globe. Premature
            ejaculation is a condition in which a man ejaculates earlier during
            sexual intercourse than he or his partner desires. Premature
            ejaculation can be divided into two forms: lifelong (primary) and
            acquired (secondary). Lifelong PE is when the man has constantly had
            PE, whereas acquired PE occurs after some period of normal sexual
            functioning.
          </p>

          {/* Second heading */}
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-gray-900">
            What leads to Premature ejaculation in Mens
          </h2>

          {/* Third heading */}
          <h3 className="text-sm sm:text-base font-semibold mb-2 text-gray-900">
            Causes
          </h3>

          {/* Unordered lists of items */}
          <ul className="list-disc list-outside pl-5 space-y-2 mb-6">
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">Biological : </span>
              Hypersensitivity, Serotonin Imbalance, Thyroid problems, and
              inflammation (Prostatitis).
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">
                Psychological :{" "}
              </span>
              Anxiety, Stress, Depression, Performance Pressure.
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">Behavioural : </span>
              Infrequent Sex, Learned Pattern, Lack of awareness.
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">Medical : </span>
              Erectile Dysfunction, Certain medications, SSRIs.
            </li>
          </ul>

          {/* Paragraph */}
          <p className="text-sm sm:text-base font-bold mb-3 text-gray-900">
            Affects approximately 20–30% of men at any time in their lives.
          </p>
          <p className="text-sm sm:text-base font-bold mb-3 text-gray-900">
            SSRIs (Selective serotonin reuptake inhibitors) have effects on
            ejaculation because they increase serotonin levels within the brain.
            Daily or on-demand SSRIs — that is paroxetine, sertraline,
            {/* link */}
            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-800 transition-colors"
            >
              — are frequently used to delay ejaculation and for treating
              premature ejaculation.
            </a>
          </p>

          {/* Third Heading */}
          <h3 className="text-sm sm:text-base font-semibold mb-3 text-gray-900">
            Treatment
          </h3>

          {/* unordered list */}
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">Medications : </span>
              <span>
                <span>
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    Priligy 30 mg
                  </a>
                  ,
                </span>
                <span>
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    Dapoforce 30 mg
                  </a>
                  ,
                </span>
                <span>
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    Vidalista 80 mg
                  </a>
                  ,
                </span>
                <span>
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    Poxet 60 mg
                  </a>
                  ,
                </span>
                <span>
                  <a
                    href="#"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors"
                  >
                    Super Krrista
                  </a>
                </span>
              </span>
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">Daily SSRIs :</span>
              Selective serotonin reuptake inhibitors that increase serotonin
              and leads to delay ejaculation.
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">
                PDE-5 Inhibitor :
              </span>
              Useful when Premature ejaculation co-exists along with erectile
              dysfunction.
            </li>
            <li className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">
                Psychosexual therapy :
              </span>
              Cognitive-behavioural therapy, couples' therapy, or sex therapy
              focused on anxiety and relationship dynamics.
            </li>
          </ul>
        </section>
    </>

);
}
export default Pe;