import { Link } from 'react-router-dom';
import logoImage from '@/assets/logo.png';
export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <img src={logoImage} alt="AI Model Guide Logo" className="h-16 w-16" />
            <p className="text-center text-base text-muted-foreground">
              &copy; {new Date().getFullYear()} AI Model Guide. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground/80">
          Built with ❤️ at Cloudflare
        </div>
      </div>
    </footer>
  );
}