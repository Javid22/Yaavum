export default function Footer() {
  return (
    <footer className="bg-black-deep border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)]">
              <span className="text-gold">யா</span>
              <span className="text-white-soft">vum</span>
              <span className="text-gold/70 text-sm ml-2">Atho Kadai</span>
            </h3>
            <p className="text-white-soft/50 text-sm mt-3 leading-relaxed">
              Serving authentic Burmese street food with love since day one.
              Every bowl tells a story of tradition and taste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Reviews", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white-soft/50 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm tracking-wider uppercase">
              Visit Us
            </h4>
            <div className="space-y-3 text-sm text-white-soft/50">
              <p>
                <span className="text-gold/80">Address:</span>
                <br />
                No. 592, Chennai-Tiruvallur High Road,
                <br />
                Pattabiram, Chennai - 600072
              </p>
              <p>
                <span className="text-gold/80">Timings:</span>
                <br />
                10:00 AM - 10:00 PM (All days)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="section-divider mt-8 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white-soft/30 text-xs">
            &copy; {new Date().getFullYear()} Yaavum Atho Kadai. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.zomato.com/chennai/yavum-atho-kadai-avadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-soft/30 hover:text-gold text-xs transition-colors"
            >
              Zomato
            </a>
            <a
              href="https://www.swiggy.com/restaurants/yavum-atho-kadai-avadi-deena-dayalan-nagar-chennai-343443"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-soft/30 hover:text-gold text-xs transition-colors"
            >
              Swiggy
            </a>
            <a
              href="https://www.justdial.com/Chennai/Yavum-Atho-Kadai-Snacks-Pattabiram-Pattabiram/044PXX44-XX44-220619041549-R3F6_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-soft/30 hover:text-gold text-xs transition-colors"
            >
              JustDial
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
