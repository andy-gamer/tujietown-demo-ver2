import { Scene, WorldState } from './types';

export const chapter7: Scene = {
  id: 'ch7_boy',
  chapterIndex: 7,
  title: '異界街道與神祕男孩',
  outlinePhase: '【承】藥方失蹤',
  description: '燕在異界街上遇見了個奇怪的小男孩。小男孩希望燕離開這裡且永遠不要回來。',
  imageUrl: '',
  world: WorldState.OTHERWORLD,
  interactiveElements: [
    { id: 'boy', label: '小男孩', description: '神情憂傷的孩子。他似乎是想保護燕。' }
  ],
  dialogues: [
    { speaker: '小男孩', text: '走吧...離開這...妳不該回來的。' },
    { speaker: '燕', text: '我必須拿到藥方！那是我活下去的唯一機會。' },
    { speaker: '燕', text: '（小男孩突然撞了燕一下，轉身朝學校跑去）' },
    { speaker: '燕', text: '可惡！藥方被他拿走了！給我站住！' }
  ],
  choices: [
    { text: '追入廢棄學校', nextSceneId: 'ch8_1' }
  ]
};