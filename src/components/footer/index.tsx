
import {
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";


const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechBlog</h3>
            <p className="text-gray-400">
              Your source for the latest technology news and insights.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-gray-400" />
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-gray-400" />
                <a href="mailto:contact@techblog.com">contact@techblog.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-gray-400" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Tech+Street,Silicon+Valley"
                  target="_blank"
                >
                  123 Tech Street, Silicon Valley
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TechBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer