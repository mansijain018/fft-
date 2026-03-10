
import { MapPin, Phone, Mail } from "lucide-react";
import Contact_img from "../assets/contact.avif";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side Content */}
        <div>


          <p className="text-gray-600 mb-10">
            Connect with Jinfra through our key contact details for prompt
            support.
          </p>

          {/* Contact Details */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <MapPin className="text-green-600" size={22} />
              <p className="text-gray-700">
                Patna, Bihar, India
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-green-600" size={22} />
              <p className="text-gray-700">
                +91-612-3456789
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-green-600" size={22} />
              <p className="text-gray-700">
                enquiries@jinfra.ltd
              </p>
            </div>

          </div>

        </div>

        {/* Right Side Image */}
        <div>
          <img
            src={Contact_img}
            alt="Contact"
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

      </div>

    </div>
  );
};

export default Contact;