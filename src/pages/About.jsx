import about_image_1 from "../assets/about_image_1.png";
import about_image_2 from "../assets/about_image_2.png";
import about_image_3 from "../assets/about_image_3.png";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">
        From Bihar to the World — and Back
      </h1>

      {/* Paragraphs above images */}
      <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
        <p>
          Jinfra was founded by Ashutosh Aman, an infrastructure investor and
          engineer originally from Patna, Bihar, after more than 25 years of
          global experience across engineering, project finance, private equity,
          and infrastructure investing.
        </p>

        <p>
          After financing and investing in infrastructure projects across the
          United States, Europe, Africa, Middle East, and emerging markets,
          the journey has come full circle — to bring global best practices
          back to Bihar and help build long-term local capacity.
        </p>

        {/* Paragraph below images */}
      <p className="text-gray-700 leading-relaxed">
        Janarh Infrastructure is named after the founder’s ancestral village,
        reflecting a commitment that starts at the grassroots and scales
        outward.
      </p>
      </div>

      {/* Image Layout */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">

        {/* Big Image */}
        <img
          src={about_image_1}
          alt="about1"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />

        {/* Right Side Images */}
        <div className="grid grid-rows-2 gap-6">
          <img
            src={about_image_2}
            alt="about2"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />

          <img
            src={about_image_3}
            alt="about3"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

      </div>

      

    </div>
  );
};

export default About;