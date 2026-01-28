
import React, { useState } from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import MetaPage from './components/MetaPage';
import StrategyAssistant from './components/StrategyAssistant';
import { GUIDES, NEWS } from './constants';
import { BookOpen, Trophy, ShieldAlert, Zap, Clock } from 'lucide-react';

const HomePage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => (
  <div>
    <HeroSection onCtaClick={onNavigate} />
    <StrategyAssistant />
    
    {/* Featured Guides Section */}
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-orbitron font-bold mb-4">MASTER THE <span className="text-mlbb-gold">FUNDAMENTALS</span></h2>
        <p className="text-gray-400">Everything from laning basics to professional macro play.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-mlbb-gold transition-all group">
          <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-mlbb-gold mb-6 group-hover:scale-110 transition-transform">
            <Trophy size={28} />
          </div>
          <h3 className="text-xl font-bold mb-4">Ranked Climbing</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Discover the secrets of the Mythic grind. Learn when to play solo and how to synergize in a duo/trio.
          </p>
          <button onClick={() => onNavigate('tips')} className="text-mlbb-gold font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Read Tips →
          </button>
        </div>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-mlbb-blue transition-all group">
          <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-mlbb-blue mb-6 group-hover:scale-110 transition-transform">
            <ShieldAlert size={28} />
          </div>
          <h3 className="text-xl font-bold mb-4">Avoiding Pitfalls</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Stop making the same mistakes that keep you stuck in Epic. Learn proper positioning and target priority.
          </p>
          <button onClick={() => onNavigate('guides')} className="text-mlbb-blue font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View Guide →
          </button>
        </div>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-purple-500 transition-all group">
          <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
            <Zap size={28} />
          </div>
          <h3 className="text-xl font-bold mb-4">Patch Mastery</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Stay ahead of the curve. We break down complex patch notes into actionable meta shifts.
          </p>
          <button onClick={() => onNavigate('news')} className="text-purple-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            What's New? →
          </button>
        </div>
      </div>
    </section>
  </div>
);

const GuidesPage: React.FC = () => {
  const [activeCat, setActiveCat] = useState<'Beginner' | 'Advanced' | 'All'>('All');
  
  const filtered = activeCat === 'All' ? GUIDES : GUIDES.filter(g => g.category === activeCat);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-orbitron font-bold mb-4">KNOWLEDGE <span className="text-mlbb-gold">BASE</span></h2>
        <div className="flex justify-center gap-4 mt-8">
           {['All', 'Beginner', 'Advanced'].map(cat => (
             <button
               key={cat}
               onClick={() => setActiveCat(cat as any)}
               className={`px-6 py-2 rounded-full font-bold border transition-all ${
                 activeCat === cat 
                   ? 'bg-white text-slate-950 border-white' 
                   : 'text-gray-400 border-slate-700 hover:border-white'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>
      </div>
      <div className="space-y-6">
        {filtered.map(guide => (
          <div key={guide.id} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 flex flex-col sm:flex-row gap-6 items-start">
             <div className="text-4xl">{guide.icon}</div>
             <div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-2 inline-block ${
                  guide.category === 'Beginner' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                }`}>
                  {guide.category}
                </span>
                <h3 className="text-2xl font-bold mb-3">{guide.title}</h3>
                <p className="text-gray-400 leading-relaxed">{guide.content}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TipsPage: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h2 className="text-4xl font-orbitron font-bold mb-12 text-center">TIPS & <span className="text-mlbb-gold">STRATEGIES</span></h2>
    <div className="grid gap-12">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-3xl border border-slate-800">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-mlbb-gold text-slate-950 flex items-center justify-center text-sm font-bold">1</span>
          Ranked Climbing Strategy
        </h3>
        <ul className="space-y-4 text-gray-300">
          <li className="flex gap-4">
             <div className="w-1.5 h-1.5 rounded-full bg-mlbb-gold mt-2 shrink-0"></div>
             <p><strong>Master 2-3 Heroes:</strong> Don't try to play everything. Specialize in one role but have a backup in case you're forced to roam.</p>
          </li>
          <li className="flex gap-4">
             <div className="w-1.5 h-1.5 rounded-full bg-mlbb-gold mt-2 shrink-0"></div>
             <p><strong>Communication:</strong> Use pings effectively. "Enemy Missing" can save a teammate from a 3-man gank.</p>
          </li>
          <li className="flex gap-4">
             <div className="w-1.5 h-1.5 rounded-full bg-mlbb-gold mt-2 shrink-0"></div>
             <p><strong>Stop Loss Streaks:</strong> If you lose 2 games in a row, take a 30-minute break. Tilt is the #1 reason for deranking.</p>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-3xl border border-slate-800">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-mlbb-blue text-white flex items-center justify-center text-sm font-bold">2</span>
          Solo vs Squad Play
        </h3>
        <ul className="space-y-4 text-gray-300">
          <li className="flex gap-4">
             <div className="w-1.5 h-1.5 rounded-full bg-mlbb-blue mt-2 shrink-0"></div>
             <p><strong>Solo Queue:</strong> Play high-impact heroes like Junglers or Gold Laners who can carry if teammates struggle.</p>
          </li>
          <li className="flex gap-4">
             <div className="w-1.5 h-1.5 rounded-full bg-mlbb-blue mt-2 shrink-0"></div>
             <p><strong>Squad Play:</strong> Focus on team-wide CC and combo ultimates (e.g., Terizla + Guinevere + Tigreal).</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const NewsPage: React.FC = () => (
  <div className="max-w-5xl mx-auto px-4 py-16">
    <h2 className="text-4xl font-orbitron font-bold mb-12 text-center">LATEST <span className="text-mlbb-gold">UPDATES</span></h2>
    <div className="space-y-8">
      {NEWS.map(item => (
        <article key={item.id} className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all">
          <div className="p-8">
            <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
               <Clock size={16} />
               {item.date}
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400 mb-6">{item.summary}</p>
            <div className="p-6 bg-slate-950/50 rounded-xl text-gray-400 text-sm border border-slate-800 italic">
               "{item.fullText}"
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'home' && <HomePage onNavigate={setActiveTab} />}
      {activeTab === 'meta' && <MetaPage />}
      {activeTab === 'guides' && <GuidesPage />}
      {activeTab === 'tips' && <TipsPage />}
      {activeTab === 'news' && <NewsPage />}
    </Layout>
  );
};

export default App;
