import about_image_1 from "../assets/about_image_1.png";
import about_image_2 from "../assets/about_image_2.png";
import about_image_3 from "../assets/about_image_3.png";

const WhatWeDo = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Services */}
      <div className="grid md:grid-cols-3 gap-14 mb-20">

        {/* Financial Advisory */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Financial Advisory
          </h2>

          <p className="text-gray-700 mb-4">
            We provide end-to-end advisory services for small and midsized
            infrastructure and energy projects, including:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Project concept development and feasibility analysis</li>
            <li>Technical, environmental, and regulatory assessment</li>
            <li>Financial structuring and investor readiness</li>
            <li>Transaction support and documentation</li>
            <li>Advisory for public sector and PPP style projects</li>
          </ul>

          <p className="text-gray-700 mt-4">
            Our focus is on reducing transaction costs and complexity,
            which is critical for making smaller projects viable.
          </p>
        </div>

        {/* Infrastructure Investment Advisory */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Infrastructure Investment Advisory
          </h2>

          <p className="text-gray-700 mb-4">
            Bihar is ready for investment and is at an inflection point:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
            <li>Supportive state policies including capital subsidies</li>
            <li>Growing demand for power and infrastructure</li>
            <li>A large, young and trainable workforce</li>
            <li>Strategic access to eastern and northern India</li>
          </ul>

          <p className="text-gray-700 mb-4">
            Jinfra supports national and international companies exploring
            investments in Bihar including:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Battery Energy Storage Systems (BESS)</li>
            <li>Solar and hybrid renewable projects</li>
            <li>Manufacturing linked to energy transition</li>
            <li>Digital infrastructure</li>
            <li>Water and wastewater</li>
          </ul>
        </div>

        {/* Sustainable Infrastructure Development */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Sustainable Infrastructure Development
          </h2>

          <p className="text-gray-700 mb-4">
            We support the development of infrastructure that delivers
            measurable environmental and social outcomes:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Decentralized waste management and processing</li>
            <li>Water and wastewater treatment systems</li>
            <li>Renewable energy and hybrid solutions</li>
            <li>Energy-efficient infrastructure for towns and villages</li>
          </ul>
        </div>

      </div>

      {/* Images */}
      <div className="grid md:grid-cols-3 gap-8">
        <img
          src={about_image_1}
          alt="about1"
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />
        <img
          src={about_image_2}
          alt="about2"
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />
        <img
          src={about_image_3}
          alt="about3"
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />
      </div>

    </section>
  );
};

export default WhatWeDo;