const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-center">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Janarh Infrastructure. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;