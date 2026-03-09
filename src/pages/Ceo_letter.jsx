import ceo_image from "../assets/ceo_image.jpg";

const Ceo_letter = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Paragraph */}
      <p className="text-gray-700 leading-relaxed mb-12 space-y-4">
        Janarh Infrastructure was founded with a clear and practical belief:
        that India’s next phase of development—particularly in states like
        Bihar—will be shaped by well-executed, locally grounded infrastructure
        across water, sanitation, waste management, waste-to-energy, clean
        energy, and other essential services.

        I am based in Patna and have spent my career working at the
        intersection of infrastructure development, regulatory frameworks,
        and project execution. My experience spans renewable energy, power
        markets, and infrastructure advisory, complemented by an MBA focused
        on power, regulation, and project finance.

        Local presence is central to our model. Being on the ground allows us
        to originate projects early, work closely with communities and
        authorities, and maintain continuous oversight throughout development
        and implementation.

        As Founder and CEO of Janarh Infrastructure, I am personally committed
        to building the firm as a long-term platform rather than a
        transaction-driven business.
      </p>

      {/* Image + CEO Name */}
      <div className="flex items-center gap-6">

        <img
          src={ceo_image}
          alt="CEO"
          className="w-48 h-48 object-cover rounded-lg shadow-md"
        />

        <h3 className="text-xl font-semibold leading-snug">
          Ashish Aman <br />
          <span className="text-gray-600 text-lg">
            Co-Founder & Chief Executive Officer
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

export default Ceo_letter;