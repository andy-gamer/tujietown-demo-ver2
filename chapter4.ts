import { Scene, WorldState } from './types';

export const chapter4: Scene = {
  id: 'ch4_street',
  chapterIndex: 4,
  title: '紅茶店門口的老頭',
  outlinePhase: '【承】麵包屑調查',
  description: '燕抵達了泡沫紅茶店。門口站著一個神祕的老頭，他看起來一點也不像去世的樣子。',
  imageUrl: '',
  world: WorldState.REAL,
  interactiveElements: [
    { id: 'key', label: '備用鑰匙', description: '燕憑直覺在花盆下找到了鑰匙。' }
  ],
  dialogues: [
    { speaker: '燕', text: '（小聲）車站的人不是說他死了嗎...？' },
    { speaker: '老頭(梅洛川)', text: '這家店一直經營不起來，之前發生過一點不好的事情。' },
    { speaker: '老頭(梅洛川)', text: '你去那邊看看，屋主留了備用鑰匙。' },
    { speaker: '燕', text: '（找到了鑰匙）真的是這支...這是我家的鑰匙？' },
    { speaker: '老頭(梅洛川)', text: '（在燕進門前，細心提醒了一遍土界鎮的生存規則）' }
  ],
  choices: [
    { text: '進入泡沫紅茶店', nextSceneId: 'ch5_teashop' }
  ]
};