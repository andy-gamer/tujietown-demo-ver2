
import React, { useState, useEffect } from 'react';
import { SCENES, INITIAL_STATE, CHAPTER_NAMES } from './constants';
import { GameState, WorldState, InteractiveElement } from './types';
import { ShieldAlert, Heart, ChevronRight, MapPin, History, Sparkles, X, BrainCircuit, Flame, BookOpen, Search } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dialogueIdx, setDialogueIdx] = useState(0);
  const [interactionMessage, setInteractionMessage] = useState<string | null>(null);
  const [errorToast, setErrorToast] = useState<string | null>(null);

  const currentScene = SCENES[gameState.currentSceneId] || SCENES['ch0_train'];

  const isCh1Tutorial = currentScene.id === 'ch1_road' && dialogueIdx >= 3;
  const canUseSoulSee = currentScene.canSoulSee && (gameState.soulSeeingUnlocked || isCh1Tutorial);

  const toggleSoulSee = () => {
    if (!canUseSoulSee) return;
    setGameState(prev => ({ ...prev, soulSeeingActive: !prev.soulSeeingActive }));
  };

  const handleChoice = (choice: any) => {
    if (choice.condition && !choice.condition(gameState)) {
      setErrorToast(choice.conditionMessage || '條件不足');
      setTimeout(() => setErrorToast(null), 3000);
      return;
    }

    setIsTransitioning(true);
    setInteractionMessage(null);
    
    setTimeout(() => {
      const effectUpdates = choice.effect ? choice.effect(gameState) : {};
      setGameState(prev => ({
        ...prev,
        ...effectUpdates,
        currentSceneId: choice.nextSceneId,
        world: SCENES[choice.nextSceneId]?.world || prev.world,
        soulSeeingActive: false
      }));
      setDialogueIdx(0);
    }, 450);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 900);
  };

  const nextDialogue = () => {
    if (dialogueIdx < currentScene.dialogues.length - 1) {
      setDialogueIdx(prev => prev + 1);
    }
  };

  const handleInteraction = (el: InteractiveElement) => {
    if (el.requiresSoulSee && !gameState.soulSeeingActive) return;
    setInteractionMessage(el.description);
    if (el.effect) {
      const updates = el.effect(gameState);
      setGameState(prev => ({ ...prev, ...updates }));
    }
  };

  const getBackgroundColor = () => {
    if (gameState.soulSeeingActive) {
        if (currentScene.id.startsWith('ch8_')) return 'from-red-950 via-black to-red-900';
        return 'from-fuchsia-950 via-purple-900 to-indigo-950';
    }
    switch (gameState.world) {
      case WorldState.DREAM: return 'from-stone-900 via-stone-800 to-stone-900';
      case WorldState.OTHERWORLD: return 'from-indigo-950 via-slate-900 to-black';
      case WorldState.REAL: return 'from-slate-900 via-stone-900 to-black';
      default: return 'from-black to-stone-900';
    }
  };

  const renderDescription = () => {
    const elements = currentScene.interactiveElements || [];
    const visibleElements = elements.filter(el => !el.requiresSoulSee);
    let text = currentScene.description;
    
    // 收集所有匹配項並排序
    const matches: { index: number; length: number; el: InteractiveElement }[] = [];
    visibleElements.forEach(el => {
      const target = `「${el.label}」`;
      let pos = text.indexOf(target);
      while (pos !== -1) {
        matches.push({ index: pos, length: target.length, el });
        pos = text.indexOf(target, pos + 1);
      }
    });
    matches.sort((a, b) => a.index - b.index);

    const parts: (string | React.ReactNode)[] = [];
    const usedElIds = new Set<string>();
    let lastIndex = 0;

    matches.forEach((m, i) => {
      if (m.index > lastIndex) {
        parts.push(text.substring(lastIndex, m.index));
      }
      parts.push(
        <button
          key={`${m.el.id}-${i}`}
          onClick={(e) => { e.stopPropagation(); handleInteraction(m.el); }}
          className={`px-1.5 py-0.5 rounded border text-[10px] font-bold inline-flex items-center gap-1 mx-0.5 transition-all ${
            gameState.inventory.includes(m.el.id) 
              ? 'bg-white/5 border-white/10 text-white/30' 
              : 'bg-white/10 border-white/30 text-white hover:bg-white/30 shadow-sm'
          }`}
        >
          {m.el.label}
          {gameState.inventory.includes(m.el.id) && <Sparkles size={8} />}
        </button>
      );
      usedElIds.add(m.el.id);
      lastIndex = m.index + m.length;
    });
    parts.push(text.substring(lastIndex));

    // 容錯機制：如果有些元素沒被嵌入文字，直接顯示在下方
    const leftoverElements = visibleElements.filter(el => !usedElIds.has(el.id));

    return (
      <div className="mb-4">
        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1 flex items-center gap-1">
          <BookOpen size={10} /> 場景描述
        </div>
        <div className="text-[11px] leading-relaxed text-stone-300 italic border-l border-white/20 pl-3 mb-3">
          {parts}
        </div>
        {leftoverElements.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 pl-3">
            {leftoverElements.map(el => (
              <button
                key={el.id}
                onClick={(e) => { e.stopPropagation(); handleInteraction(el); }}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 hover:bg-white/10"
              >
                <Search size={10} /> 搜查：{el.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const currentSpeaker = currentScene.dialogues[dialogueIdx]?.speaker || '敘事';
  const isSystem = currentSpeaker.includes('系統');
  const seedCount = gameState.inventory.filter(i => i.startsWith('seed_')).length;
  const memoCount = gameState.inventory.filter(i => i.startsWith('memo_')).length;

  const soulSeeElements = (currentScene.interactiveElements || []).filter(
    el => el.requiresSoulSee && !gameState.inventory.includes(el.id)
  );

  return (
    <div className={`relative w-full h-screen overflow-hidden flex flex-col transition-all duration-1000 bg-gradient-to-b ${getBackgroundColor()} text-white font-serif select-none`}>
      
      <div className="absolute inset-0 opacity-10 pointer-events-none soul-noise" />
      <div className="absolute inset-0 opacity-20 pointer-events-none oil-painting-texture" />
      
      {gameState.soulSeeingActive && (
        <div className={`absolute inset-0 z-10 pointer-events-none soul-scanline opacity-30 ${currentScene.id.startsWith('ch8_') ? 'glitch-anim' : ''}`} />
      )}

      <div className="relative z-50 w-full px-6 pt-6 flex flex-col gap-2">
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">
            {currentScene.outlinePhase}
          </span>
          <div className="flex gap-1.5 items-center">
            {CHAPTER_NAMES.map((_, idx) => (
              <div key={idx} className={`h-1 rounded-full transition-all duration-500 ${
                idx === currentScene.chapterIndex ? 'bg-white w-4' : idx < currentScene.chapterIndex ? 'bg-white/40 w-1' : 'bg-white/10 w-1'
              }`} />
            ))}
          </div>
        </div>
        <div className="h-[1px] w-full bg-white/10" />
      </div>

      <div className="relative z-40 w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin size={12} className="text-white/60" />
          <span className="text-sm font-bold tracking-widest">{currentScene.title}</span>
        </div>
        <div className="flex gap-3 text-[10px] font-bold">
           <span className="flex items-center gap-1 text-red-400"><Heart size={10} /> {gameState.hp}</span>
           {seedCount > 0 && <span className="flex items-center gap-1 text-fuchsia-400"><Sparkles size={10} /> {seedCount}/3</span>}
           {gameState.inventory.includes('jiahao_photo') && <span className="flex items-center gap-1 text-amber-400"><History size={10} /> 取得大頭照</span>}
        </div>
      </div>

      <main className="relative z-30 flex-1 flex flex-col items-center justify-center px-6">
        <div className={`w-full max-w-lg transition-all duration-700 ${isTransitioning ? 'opacity-0 scale-98 blur-sm' : 'opacity-100 scale-100'}`}>
          
          <div 
            onClick={nextDialogue}
            className={`relative p-8 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-2xl min-h-[320px] flex flex-col transition-all cursor-pointer ${
              gameState.soulSeeingActive ? (currentScene.id.startsWith('ch8_') ? 'border-red-500/50 bg-red-950/20 soul-active-ui' : 'border-fuchsia-500/50 bg-fuchsia-950/20') : ''
            }`}
          >
            {canUseSoulSee && (
              <div className="absolute top-4 right-6">
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleSoulSee(); }}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-bold border transition-all flex items-center gap-2 ${
                    gameState.soulSeeingActive ? 'bg-fuchsia-600 border-white text-white shadow-lg' : 'bg-black/40 border-white/20 text-white/60'
                  }`}
                >
                  <BrainCircuit size={12} /> {gameState.soulSeeingActive ? '看取：釋放強光' : '凝聚心神'}
                </button>
              </div>
            )}

            <div className={`text-[11px] font-bold tracking-widest uppercase mb-6 px-3 py-1 inline-block rounded border ${
              isSystem ? 'bg-amber-600 border-white' : gameState.soulSeeingActive ? 'bg-fuchsia-700 border-fuchsia-400' : 'bg-white/5 border-white/10 text-white/80'
            }`}>
              {currentSpeaker}
            </div>

            <div className="flex-1">
              {dialogueIdx === 0 && renderDescription()}
              <p className={`text-lg sm:text-xl leading-relaxed tracking-wide ${
                isSystem ? 'text-amber-400 font-bold' : 
                gameState.soulSeeingActive ? 'text-fuchsia-100 font-black drop-shadow-sm' : 'text-white'
              }`}>
                {currentScene.dialogues[dialogueIdx]?.text}
              </p>
            </div>

            {dialogueIdx < currentScene.dialogues.length - 1 && (
              <div className="mt-8 flex justify-center">
                <div className="text-[10px] text-white/20 animate-pulse tracking-widest">
                  —— 點擊對話框繼續 ——
                </div>
              </div>
            )}
          </div>

          {(dialogueIdx === currentScene.dialogues.length - 1) && !interactionMessage && (
            <div className="mt-8 space-y-3 pb-20">
              {currentScene.choices.map((choice, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); handleChoice(choice); }}
                  className="w-full p-5 rounded-3xl bg-white/5 border border-white/10 text-left flex items-center justify-between hover:bg-white/10 transition-all active:scale-95"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-wider">{choice.text}</span>
                    {choice.condition && !choice.condition(gameState) && (
                      <span className="text-[10px] text-red-400 mt-1 opacity-80">{choice.conditionMessage}</span>
                    )}
                  </div>
                  <ChevronRight size={16} className="text-white/30" />
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      {gameState.soulSeeingActive && soulSeeElements.length > 0 && !interactionMessage && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-8 backdrop-blur-sm animate-in fade-in duration-500 ${currentScene.id.startsWith('ch8_') ? 'bg-red-950/40' : 'bg-fuchsia-950/30'}`}>
          <div className="flex flex-col gap-6 w-full max-w-xs">
            <div className="text-center mb-4">
              <Sparkles className={`mx-auto mb-2 animate-pulse ${currentScene.id.startsWith('ch8_') ? 'text-red-400' : 'text-fuchsia-400'}`} />
              <div className="text-xs font-bold tracking-[0.2em] uppercase">
                {currentScene.id.startsWith('ch8_') ? '窺視被封印的記憶核心' : '發現遺落的靈魂之火'}
              </div>
            </div>
            {soulSeeElements.map(el => (
              <button
                key={el.id}
                onClick={(e) => { e.stopPropagation(); handleInteraction(el); }}
                className={`group relative w-full p-6 rounded-[2rem] shadow-xl flex items-center gap-4 transform active:scale-90 transition-transform ${currentScene.id.startsWith('ch8_') ? 'bg-red-600 text-white' : 'bg-white text-fuchsia-900'}`}
              >
                <Flame size={28} className="animate-bounce" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-black uppercase tracking-tighter opacity-60">
                    {currentScene.id.startsWith('ch8_') ? 'MEMORY FRAGMENT' : 'SOUL SEED'}
                  </span>
                  <span className="text-lg font-black">{el.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {interactionMessage && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-black/95" />
          <div className="relative w-full max-w-sm p-10 bg-white/5 rounded-[3rem] border border-white/10 text-center animate-in zoom-in duration-300">
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-white/10">
                <History size={32} className="text-amber-500" />
              </div>
            </div>
            <p className="text-white text-lg leading-relaxed mb-10 font-medium italic">「{interactionMessage}」</p>
            <button 
              onClick={(e) => { e.stopPropagation(); setInteractionMessage(null); }}
              className="px-12 py-4 bg-white text-black rounded-full text-xs font-black tracking-widest uppercase hover:scale-105 active:scale-95 transition-all"
            >
              承受這份痛楚
            </button>
          </div>
        </div>
      )}

      {errorToast && (
        <div className="fixed bottom-10 left-0 w-full flex justify-center z-[200] px-6">
          <div className="bg-red-600 text-white px-6 py-3 rounded-2xl text-xs font-bold border border-white/20 shadow-2xl animate-in slide-in-from-bottom-4">
            {errorToast}
          </div>
        </div>
      )}

      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-700 z-[90] bg-black ${isTransitioning ? 'opacity-80' : 'opacity-0'}`} />
    </div>
  );
};

export default App;
