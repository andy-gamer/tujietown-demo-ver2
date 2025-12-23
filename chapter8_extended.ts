import { Scene, WorldState } from './types';

export const chapter8_1: Scene = {
  id: 'ch8_1',
  chapterIndex: 8,
  title: '土界小學：幽暗走廊',
  outlinePhase: '【承】調查與潛伏',
  description: '學校走廊漆黑一片。燕發現這裡的牆壁佈滿了塗鴉，似乎在描述一個被遺忘的節日。必須找到進入禮堂的路。',
  imageUrl: '',
  world: WorldState.OTHERWORLD,
  canSoulSee: true,
  interactiveElements: [
    { id: 'drawing', label: '稚嫩的塗鴉', description: '畫著兩個手牽手的小男孩，其中一個被塗成了全黑。' },
    { id: 'locker', label: '生鏽的儲物櫃', description: '櫃子裡塞滿了枯萎的百合花瓣。' }
  ],
  dialogues: [
    { speaker: '燕', text: '這些塗鴉...為什麼看著這麼眼熟？' },
    { speaker: '燕(內心)', text: '小男孩故意引我來這裡，這就是他的藏身處嗎？' }
  ],
  choices: [
    { text: '推開禮堂沉重的大門', nextSceneId: 'ch8_2_1' }
  ]
};

export const chapter8_2_1: Scene = {
  id: 'ch8_2_1',
  chapterIndex: 9,
  title: '禮堂對峙：視線的代價',
  outlinePhase: '【對抗】介入記憶第一階段',
  description: '禮堂中央，巨大的花倀怪物正在痛苦地抽搐。它的周圍籠罩著黑霧，唯有啟動「看取」才能看穿霧氣。',
  imageUrl: '',
  world: WorldState.OTHERWORLD,
  canSoulSee: true,
  soulSeeDescription: '使用強光直視記憶節點。這會激怒怪物，但唯有如此才能前進。',
  interactiveElements: [
    {
      id: 'memo_1',
      label: '記憶閃光：孤獨',
      description: '【記憶片段】家豪坐在樹下，等著永遠不會來的燕。那塊融化的巧克力是他最後的期盼。',
      requiresSoulSee: true,
      effect: (s) => ({ hp: s.hp - 15, inventory: [...s.inventory, 'memo_1'] })
    }
  ],
  dialogues: [
    { speaker: '燕', text: '那是...我們約好的地方？他在那裡等了多久？' },
    { speaker: '怪物家豪', text: '（發出震耳欲聾的咆哮，藤蔓在空中狂舞，對強光產生劇烈反應）' },
    { speaker: '系統', text: '你強行窺視了他的痛苦。身體感到一陣劇痛，怪物的情緒開始失控。' }
  ],
  choices: [
    { 
      text: '承受衝擊，繼續干涉記憶', 
      nextSceneId: 'ch8_2_2',
      condition: (s) => s.inventory.includes('memo_1'),
      conditionMessage: '必須先啟動「看取」找出記憶閃光。'
    }
  ]
};

export const chapter8_2_2: Scene = {
  id: 'ch8_2_2',
  chapterIndex: 10,
  title: '禮堂對峙：空間崩裂',
  outlinePhase: '【對抗】介入記憶第二階段',
  description: '環境開始崩塌，天花板垂下無數被塗黑的眼睛。怪物的身軀變得更為龐大，四周響起了祭祀的唱詞聲。',
  imageUrl: '',
  world: WorldState.OTHERWORLD,
  canSoulSee: true,
  interactiveElements: [
    {
      id: 'memo_2',
      label: '記憶閃光：背叛',
      description: '【記憶片段】燕推開了家豪的手，轉身逃跑。大人們的陰影蓋住了哭泣的孩子。',
      requiresSoulSee: true,
      effect: (s) => ({ hp: s.hp - 20, inventory: [...s.inventory, 'memo_2'] })
    }
  ],
  dialogues: [
    { speaker: '燕', text: '住手...不要再播了！當時的我根本什麼都做不到！' },
    { speaker: '怪物家豪', text: '（完全失去人形的姿態，瘋狂地掃向所有光源）' },
    { speaker: '系統', text: '空間震動加劇。每一次「看取」都在撕裂他好不容易建立的噩夢防線。' }
  ],
  choices: [
    { 
      text: '直視最終的核心', 
      nextSceneId: 'ch8_2_3',
      condition: (s) => s.inventory.includes('memo_2'),
      conditionMessage: '在混亂的視線中找到第二段閃光。'
    }
  ]
};

export const chapter8_2_3: Scene = {
  id: 'ch8_2_3',
  chapterIndex: 11,
  title: '禮堂對峙：完全異化',
  outlinePhase: '【對抗】介入記憶核心',
  description: '禮堂中心已被巨大的血紅百合貫穿。家豪的身軀已被花蕊徹底吞噬，只剩下一個不斷搏動的核心。',
  imageUrl: '',
  world: WorldState.OTHERWORLD,
  canSoulSee: true,
  interactiveElements: [
    {
      id: 'memo_3',
      label: '核心閃光：遺願',
      description: '【記憶片段】溺水前的家豪並沒有恨燕，他只是在恐懼中，希望能有一個人握住他的手。',
      requiresSoulSee: true,
      effect: (s) => ({ hp: s.hp - 25, inventory: [...s.inventory, 'memo_3'] })
    }
  ],
  dialogues: [
    { speaker: '燕', text: '原來...這才是你一直藏在心底的東西。' },
    { speaker: '怪物家豪', text: '（巨大的哀鳴聲逐漸減弱，轉變為絕望的顫抖）' },
    { speaker: '系統', text: '看取的強光徹底擊穿了防護。他正處於完全植物化的邊緣，你必須決定他的結局。' }
  ],
  choices: [
    { 
      text: '踏入核心空間', 
      nextSceneId: 'ch8_3',
      condition: (s) => s.inventory.includes('memo_3'),
      conditionMessage: '尋找最後的真相節點。'
    }
  ]
};

export const chapter8_3: Scene = {
  id: 'ch8_3',
  chapterIndex: 12,
  title: '花倀之心：最後的慈悲',
  outlinePhase: '【合】救贖或永眠',
  description: '在虛幻的空間中，家豪蜷縮在巨大的花蕊中心，身體已經開始木質化。他不再攻擊，只是靜靜地等待最終的審判。',
  imageUrl: '',
  world: WorldState.DREAM,
  dialogues: [
    { speaker: '系統', text: '家豪已經無法再維持人類的形態。如果不做任何干涉，他將徹底化為九姑娘的營養，成為永世不得超生的花倀。' },
    { speaker: '燕', text: '如果現在喚醒他...他就必須面對當初溺水的死亡事實。' },
    { speaker: '燕', text: '但至少，他能以「人」的身分離開這座小鎮。' },
    { speaker: '系統', text: '請做出最終抉擇。這段創傷是否應該就此消化？' }
  ],
  choices: [
    { 
      text: '【喚醒】粉碎幻夢（家豪靈魂覺醒並回歸塵土，燕重傷獲救）', 
      nextSceneId: 'ch9_exit',
      effect: (s) => ({ hp: 10, suspicion: 0 }) 
    },
    { 
      text: '【沈眠】任其異化（家豪化為巨大的花倀之繭，燕背負詛咒離開）', 
      nextSceneId: 'ch9_exit',
      effect: (s) => ({ suspicion: 100 }) 
    }
  ]
};