import { User, CalendarDays, MessageCircle, ArrowRight } from "lucide-react";

import news1 from "../assets/news1.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ArticleDetail = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Image */}
      <img
        src={news1}
        alt="Waste Management"
        className="w-full h-[400px] object-cover rounded-lg mb-10"
      />

      {/* Article Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed">

        <p>
          Waste management is often viewed as a “city problem,” but as Bihar’s
          peri-urban areas and large villages grow, the traditional “dump and
          burn” method is creating a silent crisis. The solution isn’t larger
          landfills; it’s <span className="font-semibold">Decentralized Waste Management and Processing.</span>
        </p>

        <h2 className="text-2xl font-semibold text-black">
          The Jinfra Approach
        </h2>

        <p>
          At Jinfra, we view waste not as a liability, but as a resource. Our
          advisory and development platform focuses on circular economy
          principles. Instead of transporting waste across districts to a
          central hub—which is expensive and carbon-intensive—we advocate for
          processing it where it is generated.
        </p>

        <h2 className="text-2xl font-semibold text-black">
          The Benefits of Local Processing
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Resource Recovery:</span> Converting
            organic waste into high-quality compost for Bihar’s agricultural
            heartland.
          </li>

          <li>
            <span className="font-semibold">Energy Generation:</span> Small-scale
            bio-methanation plants can power streetlights or community centers.
          </li>

          <li>
            <span className="font-semibold">Job Creation:</span> Local processing
            units require local operators, creating green jobs within the
            community.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black">
          Engineering Sustainability
        </h2>

        <p>
          Success in waste management requires more than just machinery; it
          requires a marriage of engineering excellence and social behavioral
          change. Jinfra works on the ground in Patna and surrounding districts
          to ensure that our systems are culturally integrated and technically
          robust.
        </p>

        <p>
          We are committed to building a cleaner Bihar, one decentralized unit
          at a time, ensuring that our towns are as efficient as they are
          vibrant.
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

      <Link to="/article/2">
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

export default ArticleDetail;