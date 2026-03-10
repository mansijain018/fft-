import { User, CalendarDays, MessageCircle, ArrowRight } from "lucide-react";
import news2 from "../assets/news2.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Article2Detail = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Image */}
      <img
        src={news2}
        alt="Energy Development"
        className="w-full h-[400px] object-cover rounded-lg mb-10"
      />

      {/* Article Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          Energy is the lifeblood of development, but in Bihar’s unique
          topography, a “one-size-fits-all” grid approach often falls short.
          As the state moves toward a greener future, the integration of
          <span className="font-semibold"> Renewable Energy and Hybrid Solutions </span>
          is no longer a luxury—it is a necessity.
        </p>

        <h2 className="text-2xl font-semibold text-black">
          Why Hybrid?
        </h2>

        <p>
          Bihar’s geography is diverse, ranging from the flood-prone plains
          of the north to the heat-intensive zones of the south. Relying
          solely on solar or wind can lead to intermittency issues. Hybrid
          systems—combining solar PV with battery storage or biomass—ensure
          a steady, 24/7 power supply.
        </p>

        <p>
          Jinfra specializes in designing these systems to be:
        </p>

        <ul className="list-decimal pl-6 space-y-2">
          <li>
            <span className="font-semibold">Resilient:</span> Built to withstand
            local climatic shifts.
          </li>

          <li>
            <span className="font-semibold">Scalable:</span> Designed to grow
            as the village or town’s energy demand increases.
          </li>

          <li>
            <span className="font-semibold">Cost-Effective:</span> By optimizing
            the mix of energy sources, we lower the long-term operational costs
            for local governance.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black">
          Decentralization as a Strength
        </h2>

        <p>
          The old model of centralized power plants requires massive
          investment in transmission lines that are prone to loss and
          damage. By focusing on decentralized energy infrastructure,
          Jinfra helps Bihar’s towns become self-reliant.
        </p>

        <p>
          We are bridging the gap between global capital and local execution,
          ensuring that the latest in clean-tech reaches the person at the
          end of the line.
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

      <Link to="/article/3">
        <div className="mt-10 flex items-center justify-between bg-gray-100 p-5 rounded-lg hover:bg-gray-200 transition cursor-pointer">

          <div>
            <p className="text-sm text-gray-500 mb-1">Next Article</p>

            <p className="font-medium text-gray-800">
              Turning Waste into Worth: The Decentralized Revolution
            </p>
          </div>

          <ArrowRight size={20} className="text-green-600" />

        </div>
      </Link>  

      {/* Comment Section */}
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
            <label className="block font-medium mb-2">
              Comment *
            </label>

            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block font-medium mb-2">
              Name *
            </label>

            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-2">
              Email *
            </label>

            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block font-medium mb-2">
              Website
            </label>

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

export default Article2Detail;