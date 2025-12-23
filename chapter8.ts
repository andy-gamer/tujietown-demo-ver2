import { Scene, WorldState } from './types';

export const chapter8: Scene = {
  id: 'ch8_school',
  chapterIndex: 8,
  title: '土界小學：心靈空間',
  outlinePhase: '【承】花倀與遺憾',
  description: '燕進入大禮堂，發現小男孩其實是名為「花倀」的怪物。燕通過「看取」能力進入了家豪的內心。',
  imageUrl: '',
  world: WorldState.OTHERWORLD,
  canSoulSee: true,
  soulSeeDescription: '家豪在夢中迴避痛苦。選擇是否要殘酷地喚醒他？',
  interactiveElements: [
    { id: 'memory', label: '家豪的記憶', description: '看到家豪過去因祭祀而受難的畫面。燕感到深深的遺憾。' }
  ],
  dialogues: [
    { speaker: '燕', text: '家豪...對不起，我直到最後也沒能幫你。' },
    { speaker: '怪物家豪', text: '（發出痛苦的低鳴，心靈空間正在崩塌）' },
    { speaker: '燕(內心)', text: '我要喚醒他，還是讓他繼續做個快樂的夢，直到枯死？' }
  ],
  choices: [
    { text: '喚醒家豪（讓他解脫）', nextSceneId: 'ch9_exit' },
    { text: '讓他繼續做夢（不忍傷害）', nextSceneId: 'ch9_exit' }
  ]
};