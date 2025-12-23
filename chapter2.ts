import { Scene, WorldState } from './types';

export const chapter2: Scene = {
  id: 'ch2_temple',
  chapterIndex: 2,
  title: '九姑娘廟的儀式',
  outlinePhase: 'Chapter 2｜儀式與中斷',
  description: '在九姑娘跟各路黑影的注視下完成了奇怪的儀式（放花、進香、擲聖筊）。突然有藤蔓怪開始襲擊會場。',
  imageUrl: 'https://images.unsplash.com/photo-1518131342598-f5449e79432f?auto=format&fit=crop&q=80&w=1200',
  world: WorldState.DREAM,
  interactiveElements: [
    { id: 'vines', label: '藤蔓怪', description: '扭曲的黑色植物突然瘋狂生長，試圖吞噬這場儀式。' }
  ],
  dialogues: [
    { speaker: '燕', text: '唔...這是什麼！？這些黑影...！' },
    { speaker: '某人的低語', text: '（在半夢半醒中）快停下...這是不被允許的...' },
    { speaker: '燕', text: '（感到昏沉，意識逐漸模糊）' }
  ],
  choices: [
    { text: '在火車站醒來', nextSceneId: 'ch3_station' }
  ]
};