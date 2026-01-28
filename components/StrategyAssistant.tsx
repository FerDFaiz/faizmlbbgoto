
import React, { useState } from 'react';
import { BrainCircuit, Sparkles, Loader2 } from 'lucide-react';
import { getHeroStrategy } from '../services/geminiService';

const StrategyAssistant: React.FC = () => {
  const [heroInput, setHeroInput] = useState('');
  const [strategy, setStrategy] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroInput.trim()) return;

    setIsLoading(true);
    const result = await getHeroStrategy(heroInput);
    setStrategy(result);
    setIsLoading(false);
  };

  return (
    <section className="py-16 bg-slate-900/30 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex p-3 rounded-2xl bg-mlbb-blue/10 text-mlbb-blue mb-6 border border-mlbb-blue/20">
          <BrainCircuit size={32} />
        </div>
        <h2 className="text-3xl font-orbitron font-bold mb-4">AI STRATEGY <span className="text-mlbb-blue">ADVISOR</span></h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Need specific tips for a certain hero or matchup? Our AI assistant analyzes pro patterns to give you the upper hand instantly.
        </p>

        <form onSubmit={handleAnalyze} className="flex flex-col sm:flex-row gap-4 mb-10">
          <input 
            type="text"
            value={heroInput}
            onChange={(e) => setHeroInput(e.target.value)}
            placeholder="Enter Hero Name (e.g., Fanny, Hayabusa)..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-6 py-4 focus:outline-none focus:border-mlbb-blue focus:ring-1 focus:ring-mlbb-blue transition-all"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="px-8 py-4 bg-mlbb-blue hover:bg-blue-600 disabled:bg-slate-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 blue-glow"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
            Analyze Matchup
          </button>
        </form>

        {strategy && (
          <div className="bg-slate-950/50 border border-slate-800 p-8 rounded-2xl text-left relative animate-in zoom-in-95 duration-500">
            <div className="absolute -top-3 left-8 bg-mlbb-blue px-3 py-1 rounded text-[10px] font-bold tracking-widest text-white uppercase">
              AI Insight
            </div>
            <p className="text-lg text-gray-200 leading-relaxed italic">
              "{strategy}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default StrategyAssistant;
