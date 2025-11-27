"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        isScrolled ? "px-6 pt-2" : "px-4 pt-2"
      }`}
    >
      <motion.div
        animate={{
          scaleX: isScrolled ? 0.92 : 1,
        }}
        style={{ originX: 0.5 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className={`mx-auto w-full max-w-[1200px] rounded-2xl backdrop-blur-2xl  transition-all duration-200 
          ${
            isScrolled
              ? "bg-[#0f0f0f]/80 border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
              : "bg-[#0f0f0f]/50 shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-15"
          }`}
        >
          <motion.a
            href="#"
            className="text-xl [font-family:var(--font-pixel)] bg-linear-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(250,204,21,0.45)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            INITYO
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="relative text-sm font-bold text-muted-foreground transition-colors hover:text-yellow-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-yellow-300 via-amber-400 to-yellow-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="hidden md:inline-flex rounded-full bg-linear-to-r from-yellow-300 via-amber-400 to-yellow-500 px-6 font-semibold text-slate-900 shadow-[0_20px_45px_rgba(250,204,21,0.35)] transition-all hover:shadow-[0_25px_55px_rgba(250,204,21,0.45)]">
                Book Free Call
              </Button>
            </motion.div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full text-yellow-300 hover:bg-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className={`md:hidden mt-1 mx-4 rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden 
              ${isScrolled ? "bg-[#0f0f0f]/90" : "bg-[#0f0f0f]/80"}`}
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="block text-sm font-medium text-muted-foreground hover:text-yellow-300 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Button className="w-full rounded-full bg-linear-to-r from-yellow-300 via-amber-400 to-yellow-500 text-slate-900">
                  Book Free Call
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
