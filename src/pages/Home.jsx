import home_image from "../assets/home_image.png";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={home_image}
            alt="home"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Building World Class Infrastructure, Rooted in Bihar
          </h1>

          <p className="text-gray-700 leading-relaxed">
            Janarh Infrastructure (Jinfra) is an infrastructure advisory and development platform focused on delivering sustainable, efficient, and scalable infrastructure solutions in Bihar.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            We bring together international engineering, finance, and investment experience with strong onground execution in Patna to address one of India’s most important development challenges.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            From villages to cities, from clean energy to waste and water systems, Jinfra works at the intersection of capital, engineering, and local execution.
          </p>

          <p className="mt-4 font-semibold">
            Our belief: world class infrastructure should not be limited by geography.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;