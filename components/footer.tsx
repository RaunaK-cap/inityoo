import React from "react";
import { Sparkles, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12">
        
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl [font-family:var(--font-pixel)] text-yellow-300">
                Inityo
              </span>
            </div>

            <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-5">
              Empowering businesses with AI-driven automation, custom web
              development, and strategic digital growth.
            </p>

      
            <div className="flex gap-3 mb-5">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-md bg-slate-900 text-white
                     hover:bg-yellow-300/40 
                    transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

       
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Mail size={16} className="text-yellow-300" />
              <span>inityotech@gmail.com</span>
            </div>
          </div>

       
          <div
            className="grid grid-cols-2 gap-10 md:grid-cols-2 md:gap-12 md:col-span-2">
            <div>
              <h4 className=" text-white mb-3">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    AI Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </div>


            <div>
              <h4 className=" text-white mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="border-t border-slate-800 pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Inityo Agency. All rights reserved.
          </p>

          <div className="flex gap-5 text-xs text-slate-400">
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
