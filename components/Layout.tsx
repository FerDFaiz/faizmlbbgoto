
import React, { useState } from 'react';
import { Menu, X, Swords, TrendingUp, BookOpen, Info, Newspaper } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', name: 'Home', icon: <Swords size={20} /> },
    { id: 'meta', name: 'META', icon: <TrendingUp size={20} /> },
    { id: 'guides', name: 'Guides', icon: <BookOpen size={20} /> },
    { id: 'tips', name: 'Tips & Tricks', icon: <Info size={20} /> },
    { id: 'news', name: 'News', icon: <Newspaper size={20} /> },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-mlbb-dark text-white selection:bg-amber-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center rotate-45 group-hover:scale-110 transition-transform">
                <Swords className="text-slate-900 -rotate-45" />
              </div>
              <span className="font-orbitron text-xl font-bold tracking-wider text-mlbb-gold">
                MLBB<span className="text-white">HUB</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === item.id 
                      ? 'text-mlbb-gold border-b-2 border-mlbb-gold' 
                      : 'text-gray-400 hover:text-mlbb-blue'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-md text-base font-medium ${
                    activeTab === item.id
                      ? 'bg-amber-500/10 text-mlbb-gold'
                      : 'text-gray-400 hover:bg-slate-800'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pb-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
             <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center rotate-45">
                <Swords className="text-slate-900 -rotate-45" size={28} />
              </div>
          </div>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
            Your ultimate companion for dominating the Land of Dawn. From META analytics to pro-level guides.
          </p>
          <div className="flex justify-center gap-6 text-gray-400 mb-8">
            <a href="#" className="hover:text-mlbb-gold transition-colors">Discord</a>
            <a href="#" className="hover:text-mlbb-gold transition-colors">YouTube</a>
            <a href="#" className="hover:text-mlbb-gold transition-colors">Facebook</a>
          </div>
          <p className="text-xs text-gray-600">
            © 2024 MLBB Legends Hub. This site is not affiliated with Moonton.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
