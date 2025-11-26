"use client"
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';


export const FinalCtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-yellow-100/40 via-transparent to-transparent shadow-2xl px-8 py-16 md:px-16 text-center">
            
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>

            <h2 className="relative text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to scale your business?
            </h2>
            <p className="relative text-indigo-100 text-sm mb-10 max-w-2xl mx-auto">
              Let's discuss how Inityo can transform your digital presence with AI-powered solutions. Book a discovery call today.
            </p>

            <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-2 text-sm bg-blue-600 text-white  rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
                Book a Quick call
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-5 py-2 text-sm border border-neutral-400/30 text-white  rounded-full hover:bg-neutral-900 transition-all backdrop-blur-sm flex items-center">
                <Mail className="mr-2 w-5 h-5 " />
                Contact Support
              </button>
            </div>
          </div>
        
      </div>
    </section>
  );
};