import { User, CalendarDays, MessageCircle, ArrowRight } from "lucide-react";
import news3 from "../assets/news3.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Article3Detail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Article Image */}
      <img
        src={news3}
        alt="Infrastructure Development"
        className="w-full h-[400px] object-cover rounded-lg mb-10"
      />

      {/* Article Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          For decades, the narrative of infrastructure development in India has
          been dominated by “mega-projects”—massive highways and sprawling
          industrial corridors. However, for a state like Bihar, where the
          heartbeat of the economy lies in its towns and villages, the real
          transformation happens at the mid-sized level.
        </p>

        <p>
          At Janarh Infrastructure (Jinfra), we believe that the next decade of
          growth in Bihar won’t just be built on grand scales, but on
          <span className="font-semibold">
            {" "}bankable, scalable, and sustainable mid-sized projects.
          </span>
        </p>

        <h2 className="text-2xl font-semibold text-black">
          The Missing Link
        </h2>

        <p>
          Small to mid-sized infrastructure—such as decentralized waste units or
          localized water treatment—often falls into a “development gap.”
          They are too small for international conglomerates but too complex
          for local contractors without specialized engineering and financial
          backing.
        </p>

        <p>
          Jinfra occupies this vital middle ground. By bringing international
          engineering standards and structured finance to Patna and beyond,
          we make these essential projects viable.
        </p>

        <h2 className="text-2xl font-semibold text-black">
          Impact Over Output
        </h2>

        <p>
          Infrastructure is more than just concrete; it is a catalyst for
          social equity. When a village in Bihar receives an energy-efficient
          cold storage unit or a hybrid power solution, the impact is immediate:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Economic Stability:</span> Farmers
            reduce post-harvest losses.
          </li>

          <li>
            <span className="font-semibold">Health:</span> Clean water systems
            reduce the burden of water-borne diseases.
          </li>

          <li>
            <span className="font-semibold">Empowerment:</span> Reliable energy
            allows local businesses to thrive after sunset.
          </li>
        </ul>

        <p>
          Our mission is to prove that “world-class” is not a synonym for
          “metropolitan.” Bihar deserves infrastructure that is built to last,
          designed with local nuances in mind, and backed by global best
          practices.
        </p>

      </div>

      {/* Footer Info */}
      <div className="mt-10 border-t pt-6 flex items-center gap-6 text-gray-500 text-sm">

        <div className="flex items-center gap-2">
          <User size={16} />
          <span>admin</span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={16} />
          <span>February 6, 2026</span>
        </div>

        <div className="flex items-center gap-2">
          <MessageCircle size={16} />
          <span>Leave a Comment</span>
        </div>
      </div>

      <Link to="/article/1">
        <div className="mt-10 flex items-center justify-between bg-gray-100 p-5 rounded-lg hover:bg-gray-200 transition cursor-pointer">

          <div>
            <p className="text-sm text-gray-500 mb-1">Next Article</p>

            <p className="font-medium text-gray-800">
              Beyond the Grid: The Rise of Hybrid Energy in Rural Bihar
            </p>
          </div>

          <ArrowRight size={20} className="text-green-600" />

        </div>
      </Link> 

      {/* Leave Reply Section */}
      <div className="mt-14">

        <h2 className="text-2xl font-semibold mb-3">
          Leave a Reply
        </h2>

        <p className="text-gray-600 mb-6">
          Your email address will not be published. Required fields are marked *
        </p>

        <form className="space-y-5">

          {/* Comment */}
          <div>
            <label className="block font-medium mb-2">Comment *</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block font-medium mb-2">Name *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-2">Email *</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block font-medium mb-2">Website</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <label className="text-sm text-gray-600">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Post Comment
          </button>

        </form>

      </div>

    </div>
  );
};

export default Article3Detail;