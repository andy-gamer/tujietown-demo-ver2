import { Scene, WorldState } from './types';

export const chapter1: Scene = {
  id: 'ch1_road',
  chapterIndex: 1,
  title: '夢境道路與九姑娘',
  outlinePhase: '【起】噩夢與約定',
  description: '往前走時遇見了很多詭異的東西。巨大的「鹿子百合」高聳入雲。走到「大榕樹」前，燕感到身體在全力拒絕。',
  imageUrl: '',
  world: WorldState.DREAM,
  canSoulSee: true,
  soulSeeDescription: '九姑娘要求你找回三顆種子。進入「看取」狀態，找出隱藏在虛幻中的靈魂火種。',
  interactiveElements: [
    { 
      id: 'lilies', 
      label: '巨大的鹿子百合', 
      description: '燕一邊吐槽說不定是某種神明托夢，關於六合彩的預兆，一邊記錄著花瓣上的紋理。' 
    },
    { 
      id: 'banyan', 
      label: '大榕樹', 
      description: '走到這裡燕開始頭痛，似乎要想起什麼了，但有個聲音告訴他絕對不可以。' 
    },
    {
      id: 'seed_1',
      label: '百合中的靈火',
      description: '在看取的視野中，百合花心中跳動著微弱的光芒。這是第一顆種子。',
      requiresSoulSee: true,
      effect: (s) => s.inventory.includes('seed_1') ? {} : { inventory: [...s.inventory, 'seed_1'] }
    },
    {
      id: 'seed_2',
      label: '根部的靈火',
      description: '大榕樹糾纏的氣根深處，藏著第二顆靈魂之火。',
      requiresSoulSee: true,
      effect: (s) => s.inventory.includes('seed_2') ? {} : { inventory: [...s.inventory, 'seed_2'] }
    },
    {
      id: 'seed_3',
      label: '迷霧的靈火',
      description: '空氣中凝結的並非水氣，而是濃稠的能量。你找到了最後一顆種子。',
      requiresSoulSee: true,
      effect: (s) => s.inventory.includes('seed_3') ? {} : { inventory: [...s.inventory, 'seed_3'] }
    }
  ],
  dialogues: [
    { speaker: '九姑娘', text: '燕，你終於到了。幫我個忙吧？' },
    { speaker: '燕', text: '我不認識妳，憑什麼幫妳？' },
    { speaker: '九姑娘', text: '（亮出一張寫著數字的紙條）集齊「三顆種子」，這張六合彩必中號碼就是你的。' },
    { speaker: '燕(內心)', text: '那一串數字...如果是真的...我就能翻身了。' },
    { speaker: '九姑娘', text: '用你的「看取」能力，去找出隱藏的真實吧。' }
  ],
  choices: [
    { 
      text: '集齊種子，帶往九姑娘廟', 
      nextSceneId: 'ch2_temple',
      condition: (s) => s.inventory.filter(i => i.startsWith('seed_')).length >= 3,
      conditionMessage: '妳還沒收集完「三顆黃金種子」。開啟「看取」模式！',
      effect: (s) => ({ soulSeeingUnlocked: true }) 
    }
  ]
};