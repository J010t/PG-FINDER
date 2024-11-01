import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="w-full sm:w-auto">
            <div className="flex items-center justify-center sm:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div className="w-full sm:w-auto text-center">
            <div className="text-sm">&copy; PgFinder. All Rights reserved.</div>
          </div>
          
          <div className="w-full sm:w-auto">
            <div className="flex items-center justify-center sm:justify-end space-x-4">
              <a href="/about" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;