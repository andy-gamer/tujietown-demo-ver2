import { Scene, WorldState } from './types';

export const chapter9: Scene = {
  id: 'ch9_exit',
  chapterIndex: 13,
  title: '校門之外：命運的分叉',
  outlinePhase: '【合】擊敗九姑娘',
  description: '燕踉蹌地走出學校。校門口，九姑娘正以一種看戲的神情注視著他。小男孩（真貨）遞上了藥方上的關鍵藥材。',
  imageUrl: '',
  world: WorldState.REAL,
  interactiveElements: [
    { id: 'medicine', label: '最後的藥材', description: '這是家豪在最後時刻護住的靈魂藥材。' }
  ],
  dialogues: [
    { speaker: '九姑娘', text: '真是有趣的選擇呢，燕。你覺得你拯救了他，還是殺了他？' },
    { speaker: '燕', text: '我只是...做了我早就該做的事。' },
    { speaker: '小男孩', text: '燕哥哥...快跑...趁火車還沒開走！' },
    { speaker: '系統', text: '燕搭上火車回到了現實車站。如果是喚醒了家豪，他的身體將會逐漸康復；若是任其沈眠，他將永遠感覺到體內有東西在生根發芽。' }
  ],
  choices: [
    { text: '重新開始（回歸噩夢起點）', nextSceneId: 'ch0_train' }
  ]
};