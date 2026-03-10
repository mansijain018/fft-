const Impact = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      <div className="grid md:grid-cols-2 gap-20">

        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-semibold mb-6">
            Janarh Village Pilot
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            <span className="font-semibold">Janarh village</span> will serve as a pilot location to
            demonstrate solutions that can be replicated across Bihar.
          </p>

          <p className="text-gray-700 mb-4">
            Janarh village is envisioned as a living laboratory for decentralized infrastructure solutions:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Local waste processing and waste-to-value systems</li>
            <li>Clean power through solar and energy storage</li>
            <li>Improved water and sanitation infrastructure</li>
            <li>Local employment for operations and maintenance</li>
          </ul>

          <p className="text-gray-700">
            The goal is simple:{" "}
            <span className="font-semibold">
              design once, replicate many times.
            </span>
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h1 className="text-4xl font-semibold mb-6">
            Scaling Across Bihar
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Successful pilot projects will be scaled through standardized
            project templates, lower-cost financing structures, and training
            of local engineers and operators.
          </p>

          <p className="text-gray-700">
            Impact is measured in{" "}
            <span className="font-semibold">
              jobs created, talent retained, and communities strengthened.
            </span>
          </p>
        </div>

      </div>

    </section>
  );
};

export default Impact;