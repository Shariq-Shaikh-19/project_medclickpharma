function Ed() {
  return (
    <>
      {/* Head Div  */}
      <div className="px-4 md:px-8 py-8 max-w-7xl mx-auto">
        {/* h2 Ed */}
        <h2 className="font-serif text-[44px] font-bold text-[#101828]">
          What is ED?
        </h2>
        {/* first paragraph  */}
        <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-4">
          Erectile dysfunction is the persistent inability to achieve or
          maintain an erection sufficient to permit satisfactory sexual
          performance. An erection requires a smooth muscle relaxation cascade
          triggered by nitric oxide, raising cyclic GMP, which lets
          <a href="#" className="text-blue-600 hover:underline">
            blood flood the corpora cavernosa
          </a>
          . Vascular blockage, nerve damage,
          <a href="#" className="text-blue-600 hover:underline">
            hormonal imbalance
          </a>
          . or psychological stress may interrupt this pathway leading to
          Erectile Dysfunction.
        </p>
        {/* Second paragraph  */}
        <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-6">
          It's not just a normal part of aging, though prevalence does rise with
          age.
          <span className="font-bold">
            Affects approx. 30% of men aged 40-70, and up to 70% › 70.
          </span>
        </p>
        {/* Third Paragraph */}
        <p className="text-sm md:text-base font-bold text-gray-900 mb-4">
          What leads to Erectile issue in men?
        </p>
        {/* fourth paragraph  */}
        <p className="text-sm md:text-base font-semibold text-gray-900 mb-2">
          Causes
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm md:text-base text-gray-800 mb-6">
          {/* first li */}
          <li>Vascular: Atherosclerosis, Hypertension, Diabetes, Smoking</li>
          {/* Second li */}
          <li>
            Neurogenic: Spinal Injury, Multiple Sclerosis,
            <a href="#" className="text-blue-600 hover:underline">
              {" "}
              Pelvic surgery
            </a>
            , Peripheral neuropathy
          </li>
          {/* Thidr Li */}
          <li>
            Hormonal:
            <a
              href="
                "
              className="text-blue-600 hover:underline"
            >
              Low testosterone
            </a>
            , Hyperprolactinemia, Thyroid disease
          </li>
          {/* 4th Li */}
          <li>
            Medication induced: Beta-blockers, thiazides, antidepressants,
            anti-psychotics, 5-alpha reductase inhibitor
          </li>
          {/* 5th Li */}
          <li>
            Psychogenic:
            <a href="#">Anxiety</a>, Depression,
            <a href="3" className="text-blue-600 hover:underline">
              {" "}
              Performance stress
            </a>
            ,
            <a href="#" className="text-blue-600 hover:underline">
              {" "}
              Relationship issues
            </a>
            .
          </li>
          {/* 6th li */}
          <li>Mixed: Combination of organic and Psychogenic factors.</li>
        </ul>
        {/* 2nd statement p */}
        <p className="text-sm md:text-base font-semibold text-gray-900 mb-2">
          Treatment
        </p>
        {/* UL */}
        <ul className="list-disc list-inside space-y-1.5 text-sm md:text-base text-gray-800">
          <li>
            PDE5 Inhibitor Medications:
            <a href="#" className="text-blue-600 hover:underline"> Sildenafil

            </a>
            ,
            <a href="#" className="text-blue-600 hover:underline"> Tadalafil
            </a>
            ,
            <a href="#" className="text-blue-600 hover:underline"> Vardenafil
            </a>
            , and
            <a href="#" className="text-blue-600 hover:underline"> Avanafil
            </a>
            .
          </li>
          {/* 2nd Li */}
          <li>
            <span className="font-bold">Topical anesthetics:</span>
            Lidocaine -prilocaine cream or spray to reduce glance sensitivity.
          </li>
          {/* 3rd Li */}
          <li>
            <span className="font-bold">
              SSRIs, Selective serotonin reuptake inhibitors:
            </span> Paroxetine, Sertraline e.g., Dapoxetine
            
          </li>
          {/* 4th li */}
          <li>
            <span className="font-bold">Intra-urethral suppositories:</span> Alprostadil
            
          </li>
          {/* 5th Li */}
          <li>
            <span className="font-bold">Surgical implants:</span> Penile Dorsal-nerve neurolysis
            
          </li>
          {/* 6th li */}
          <li>
            <span className="font-bold">Psychosexual therapy:</span>  Cognitive behavioural therapy,
            
            <a href="#" className="text-blue-600 hover:underline">
              {" "}
              Sex therapy
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Ed;
