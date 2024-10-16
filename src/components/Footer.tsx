const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold lg:text-2xl">VIP Method</h2>
          <p className="text-gray-400">© {new Date().getFullYear()} VIP Method. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
