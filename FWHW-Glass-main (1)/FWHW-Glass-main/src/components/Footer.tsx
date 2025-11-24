export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">FWHW Glass Technology PLC</h3>
            <p className="text-sm text-primary-foreground/80">
              Premier Ethiopian-owned manufacturer and importer of architectural and safety glass solutions. Innovating Ethiopia's Glass Industry.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Float Glass</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Laminated Glass</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tempered Glass</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mirror Glass</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/certifications" className="hover:text-accent transition-colors">Certifications</a></li>
              <li><a href="/news" className="hover:text-accent transition-colors">News</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Email: fekaduglass@gmail.com</li>
              <li>Phone: 0911 227658</li>
              <li>Phone: +251-91-122-6756</li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} FWHW Glass Technology PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
