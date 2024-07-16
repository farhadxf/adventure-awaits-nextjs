import "./credit/Credit";
import Credit from "./credit/Credit";
const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold">About Us</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci nulla earum doloremque nihil animi illum maxime sint
                perspiciatis
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <p className="text-gray-400">Email: info@wadventureawait.com</p>
              <p className="text-gray-400">Phone: +44 123 456-7890</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  TripAdvisor
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  X
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="m-2 border-t border-gray-700 py-2 text-center text-gray-400">
            <p> 2024 Adventure Await. All rights reserved.</p>
          </div>
        </div>
        <Credit />
      </footer>
    </>
  );
};

export default Footer;
