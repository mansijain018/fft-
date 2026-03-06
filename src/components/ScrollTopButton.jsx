import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-[#018A5E] hover:opacity-90 text-white p-3 rounded-md shadow-lg"
      >
        <ChevronUp size={22} />
      </button>
    </div>
  );
};

export default ScrollTopButton;