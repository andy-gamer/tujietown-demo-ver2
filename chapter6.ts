import { Scene, WorldState } from './types';

export const chapter6: Scene = {
  id: 'ch6_night',
  chapterIndex: 6,
  title: '異界之夜：禁忌之果',
  outlinePhase: 'Chapter 6｜違反規則',
  description: '燕發現自己進入了異界，而且原因是自己不守規則。站在外面的燕準備回去避難，卻發現店門打不開了。',
  imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1200',
  world: WorldState.OTHERWORLD,
  interactiveElements: [
    { id: 'locked_door', label: '鎖住的門', description: '門扉緊閉。燕憤怒地大喊：這就是土界鎮人的防禦機制嗎！' }
  ],
  dialogues: [
    { speaker: '燕', text: '對不小心出來的人也太殘忍了吧！' },
    { speaker: '燕(內心)', text: '沒辦法，只能先去找之前規則上提到的火車站了。' }
  ],
  choices: [
    { text: '前往異界車站', nextSceneId: 'ch7_boy' }
  ]
};