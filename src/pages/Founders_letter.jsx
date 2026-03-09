import founder_image from "../assets/founder_image.jpeg";

const Founders_letter = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Paragraph */}
      <p className="text-gray-700 leading-relaxed mb-12">
        I was born in Patna, Bihar — a state often defined by what it lacks rather
        than what it can become. In 1990, I left Bihar to study civil engineering
        at IIT Kanpur, eventually building a global career across infrastructure
        research, environmental engineering, project finance, infrastructure fund,
        and technology.

        I have had the privilege of financing and investing billions of dollars
        into infrastructure assets around the world and working with some of the
        most sophisticated institutions globally. Yet one question stayed with me
        throughout this journey:

        Why should opportunity always flow out of Bihar, when infrastructure
        itself exists to bring opportunity closer to people?

        Janarh Infrastructure is my attempt to answer that question — practically,
        patiently, and with discipline.

        We are starting small: villages, towns, decentralized systems, clean
        energy, waste, water, sanitation, and jobs. If we get the fundamentals
        right, these solutions can scale across Bihar.

        This is a long-term effort. We are not building for headlines, but for
        outcomes.
      </p>

      {/* Image + Founder Name */}
      <div className="flex items-center gap-8">

        <img
          src={founder_image}
          alt="Founder"
          className="w-48 h-48 object-cover rounded-lg shadow-md"
        />

        <h3 className="text-xl font-semibold leading-snug">
          Ashutosh Aman <br />
          <span className="text-gray-600 text-lg">
            Founder & Chairman
          </span>
          <br />
          <span className="text-gray-600 text-lg">
            Janarh Infrastructure
          </span>
        </h3>

      </div>

    </div>
  );
};

export default Founders_letter;