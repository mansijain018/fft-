import about_image_1 from "../assets/about_image_1.png";
import about_image_2 from "../assets/about_image_2.png";
import about_image_3 from "../assets/about_image_3.png";

const WhatWeDo = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Services Section */}
      <div className="grid md:grid-cols-3 gap-10 mb-16">

        {/* Section 1 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Financial Advisory
          </h1>

          <p className="text-gray-700 leading-relaxed">
            We provide end-to-end advisory services for small and mid-sized
            infrastructure and energy projects including project concept
            development, feasibility analysis, technical and regulatory
            assessments, financial structuring, transaction support and
            advisory for public sector and PPP projects. Our focus is on
            reducing transaction costs and complexity.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Infrastructure Investment Advisory
          </h1>

          <p className="text-gray-700 leading-relaxed">
            Bihar is ready for investment and is at an inflection point with
            supportive policies, growing power demand and a young workforce.
            Jinfra supports national and international companies exploring
            investments in BESS, solar projects, manufacturing, digital
            infrastructure and water systems.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Sustainable Infrastructure Development
          </h1>

          <p className="text-gray-700 leading-relaxed">
            We support development of infrastructure that delivers measurable
            environmental and social outcomes including decentralized waste
            management, water and wastewater treatment systems, renewable
            energy and energy-efficient infrastructure.
          </p>
        </div>

      </div>

      {/* Images */}
      <div className="grid md:grid-cols-3 gap-8">
        <img
          src={about_image_1}
          alt="about1"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={about_image_2}
          alt="about2"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={about_image_3}
          alt="about3"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

    </div>
  );
};

export default WhatWeDo;