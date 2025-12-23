import { Scene, WorldState } from './types';

export const chapter5: Scene = {
  id: 'ch5_teashop',
  chapterIndex: 5,
  title: '紅茶店內：真相大白',
  outlinePhase: 'Chapter 5｜藥方與詛咒',
  description: '燕進店後拿出繼承信。他好奇想不起來的過往，且醫生檢查出他生病需大筆錢。他在店內找到了一紙藥方。',
  imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200',
  world: WorldState.REAL,
  interactiveElements: [
    { id: 'prescription', label: '神秘藥方', description: '記載了需要特定藥材與「九姑娘廟潭中水」方可根治。' }
  ],
  dialogues: [
    { speaker: '燕', text: '九姑娘的詛咒...？搞了半天居然不是醫學問題而是超自然嗎！' },
    { speaker: '燕', text: '怎麼就沒人早點告訴我呢！' },
    { speaker: '燕(內心)', text: '（門外傳來騷動）外面發生什麼事了？' }
  ],
  choices: [
    { text: '出去看看（夜晚出門違反規則）', nextSceneId: 'ch6_night' }
  ]
};