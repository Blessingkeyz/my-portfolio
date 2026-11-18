import { motion } from "motion/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://github.com/blessingkeyz",
    icon: AiFillGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/blessingkome",
    icon: AiFillLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/blessingkeyzz",
    icon: FaXTwitter,
    label: "X (Twitter)",
  },
];

const Footer = () => (
  <footer id="contact" className="scroll-mt-20 border-t border-slate-200 dark:border-white/10 mt-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-content mx-auto px-4 md:px-12 py-10"
    >
      {/* Main row on lg, stacked on mobile */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-light.png"
            alt="KomeTheDev"
            className="h-10 w-auto sm:h-11 md:h-12 dark:hidden"
          />
          <img
            src="/logo-dark.png"
            alt="KomeTheDev"
            className="h-10 w-auto sm:h-11 md:h-12 hidden dark:block"
          />
          <span className="text-heading font-semibold text-slate-800 dark:text-white">
            KomeTheDev
          </span>
        </div>

        {/* Social icons — centered on mobile, center on lg */}
        <div className="flex gap-1">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full text-slate-600 dark:text-white/80 hover:text-accent-cyan dark:hover:text-accent-cyan hover:bg-slate-100 dark:hover:bg-white/10 transition-all hover:scale-110"
            >
              <Icon size="1.8rem" />
            </a>
          ))}
        </div>

        {/* Contact — stacked on mobile, right-aligned on lg */}
        <div className="flex flex-col items-center md:items-end gap-1 text-small text-slate-600 dark:text-white/60">
          <a
            href={`mailto:umukoroblessing@gmail.com?subject=${encodeURIComponent("Project Inquiry — KomeTheDev")}&body=${encodeURIComponent("Hi Blessing,\n\nI came across your portfolio and I'd like to discuss a project with you.\n\nProject details:\n\n\nBudget/Timeline:\n\n\nLooking forward to hearing from you!")}`}
            className="hover:text-accent-cyan transition-colors"
          >
            umukoroblessing@gmail.com
          </a>
          <a
            href="tel:2347058498008"
            className="hover:text-accent-cyan transition-colors"
          >
            +234 705 849 8008
          </a>
        </div>
      </div>

      {/* Copyright — always centered below */}
      <p className="text-caption text-slate-500 dark:text-white/50 text-center mt-8">
        &copy; {new Date().getFullYear()} KomeTheDev. All rights reserved.
      </p>
    </motion.div>
  </footer>
);

export default Footer;
