
import { Scene, WorldState } from './types';

export const chapter8_chase: Scene = {
  id: 'ch8_chase',
  chapterIndex: 8,
  title: '土界小學：奪走項鍊的男孩',
  outlinePhase: '【承】遺失的聯繫',
  description: '燕追著小男孩進入了廢棄的校區。小男孩奪走了他的項鍊，那種神情與其說是惡意，更像是某種無聲的求救。',
  imageUrl: '',
  world: WorldState.OTHERWORLD,
  dialogues: [
    { speaker: '燕', text: '喂！把項鍊還給我！那對我很重要！' },
    { speaker: '小男孩', text: '（不發一語，轉身跑進幽暗的禮堂大門）' },
    { speaker: '燕', text: '這孩子...跑得快得不像人類。' }
  ],
  choices: [
    { text: '追入大禮堂', nextSceneId: 'ch8_gym' }
  ]
};

export const chapter8_gym: Scene = {
  id: 'ch8_gym',
  chapterIndex: 9,
  title: '禮堂：花倀的突襲',
  outlinePhase: '【對抗】現出真身',
  description: '禮堂講台上，男孩佇立在那。當燕靠近時，男孩的身軀突然變成了猙獰的花倀。他必須立刻逃往「二樓音控室」。',
  imageUrl: '',
  world: WorldState.OTHERWORLD,
  interactiveElements: [
    { id: 'control_room', label: '二樓音控室', description: '唯一看起來能躲避攻擊的地方。' }
  ],
  dialogues: [
    { speaker: '燕', text: '這...這根本不是人類！' },
    { speaker: '花倀家豪', text: '（發出刺耳的尖嘯，藤蔓向燕襲來）' },
    { speaker: '系統', text: '你被迫逃入了二樓的音控室，並反鎖了門。' }
  ],
  choices: [
    { text: '搜索音控室', nextSceneId: 'ch8_control_room' }
  ]
};

export const chapter8_control_room: Scene = {
  id: 'ch8_control_room',
  chapterIndex: 10,
  title: '音控室：被遺忘的紀念冊',
  outlinePhase: '【調查】看取回憶',
  description: '音控室裡積滿灰塵。燕在角落發現了一本「畢業紀念冊」，裡面翻開的某一頁缺了一張大頭照。',
  imageUrl: '',
  world: WorldState.OTHERWORLD,
  canSoulSee: true,
  soulSeeDescription: '對著殘破的紀念冊使用「看取」，試圖連結這個靈魂的過去。',
  interactiveElements: [
    { id: 'album_base', label: '畢業紀念冊', description: '缺了一張頭像，那是屬於「張家豪」的位置。' }
  ],
  dialogues: [
    { speaker: '燕', text: '這本紀念冊...為什麼會在這裡？' },
    { speaker: '燕(內心)', text: '我有種預感，如果不找回那張頭像，我就永遠離不開這裡。' }
  ],
  choices: [
    { 
      text: '對紀念冊使用「看取」', 
      nextSceneId: 'ch8_classroom',
      effect: (s) => ({ soulSeeingActive: false }) 
    }
  ]
};

export const chapter8_classroom: Scene = {
  id: 'ch8_classroom',
  chapterIndex: 11,
  title: '幻影教室：夕陽下的缺憾',
  outlinePhase: '【轉】記憶潛行',
  description: '燕發現自己身處夕陽紅色的教室。他走向「自己的抽屜」試圖尋找線索，並看著那個「座位上的黑影」，一切空無一人。',
  imageUrl: '',
  world: WorldState.DREAM,
  interactiveElements: [
    { 
      id: 'desk_photo', 
      label: '自己的抽屜', 
      description: '燕在自己的課桌抽屜裡翻到了一張「遺失的大頭照」。上頭的人顯得模糊不清。',
      effect: (s) => ({ inventory: [...s.inventory, 'jiahao_photo'] })
    },
    { id: 'black_shadow', label: '座位上的黑影', description: '一個熟悉的黑影坐在家豪生前的座位上，低頭沈默，不發一語。' }
  ],
  dialogues: [
    { speaker: '燕', text: '為什麼這張頭像會在我的抽屜裡...難道當初是我拿走的？' },
    { speaker: '燕', text: '（走向黑影）家豪...你為什麼還不回家？' },
    { speaker: '黑影', text: '我...不知道該往哪裡走。哪裡才是我的家？' }
  ],
  choices: [
    { 
      text: '將頭像貼回紀念冊', 
      nextSceneId: 'ch8_abuse_room',
      condition: (s) => s.inventory.includes('jiahao_photo'),
      conditionMessage: '必須先在「自己的抽屜」裡找到那張遺失的「大頭照」。'
    }
  ]
};

export const chapter8_abuse_room: Scene = {
  id: 'ch8_abuse_room',
  chapterIndex: 11,
  title: '黑暗空間：家暴的迴響',
  outlinePhase: '【轉】黑暗的拽拉',
  description: '貼上頭像的瞬間，場景切換到一間陰暗破亂的民房。空間在閃現：父親的咆哮與受傷的男孩。',
  imageUrl: '',
  world: WorldState.DREAM,
  dialogues: [
    { speaker: '系統', text: '空間開始閃現家豪的記憶：父親的虐待、母親的離棄、花倀印記的萌發。' },
    { speaker: '燕', text: '（門被無形力量撞開）不...救命！' },
    { speaker: '系統', text: '一隻漆黑粗壯的巨手從門內的虛無伸出，死命拽住燕的左腳。燕被拖入了寫滿侮辱謾罵的雙手群中。' }
  ],
  choices: [
    { text: '在痛苦中沈入深淵', nextSceneId: 'ch8_park' }
  ]
};

export const chapter8_park: Scene = {
  id: 'ch8_park',
  chapterIndex: 12,
  title: '心靈公園：最後的糖果',
  outlinePhase: '【轉】尋找解藥',
  description: '燕在公園醒來。家豪不斷在長椅、沙坑、盪鞦韆間閃現。妳必須與他對話。',
  imageUrl: '',
  world: WorldState.DREAM,
  dialogues: [
    { speaker: '燕', text: '這就是你唯一能感到安心的地方嗎？' },
    { speaker: '家豪', text: '（坐在盪鞦韆上）燕哥哥，這顆糖給你。妳能不能陪我玩？' },
    { speaker: '燕', text: '好，我陪你。我們一起走。' }
  ],
  choices: [
    { text: '成功解開家豪的心結', nextSceneId: 'ch8_boss_confront', effect: (s) => ({ suspicion: 0 }) },
    { text: '對話失敗（激怒九姑娘）', nextSceneId: 'ch8_boss_confront', effect: (s) => ({ suspicion: 50 }) }
  ]
};

export const chapter8_boss_confront: Scene = {
  id: 'ch8_boss_confront',
  chapterIndex: 12,
  title: '禮堂終戰：九姑娘的干預',
  outlinePhase: '【對抗】九姑娘的嘲諷',
  description: '天空傳來九姑娘尖銳的笑聲。巨大的藤蔓從禮堂地表竄出，將溫馨的公園撕裂。',
  imageUrl: '',
  world: WorldState.OTHERWORLD,
  dialogues: [
    { speaker: '九姑娘', text: '沒用的。他已經是我的一部分了。妳越想拯救他，他越痛苦。' },
    { speaker: '花倀家豪', text: '（巨大的身軀向燕重重壓下，進入最終決戰）' }
  ],
  choices: [
    { text: '擊敗花倀並做出最終決定', nextSceneId: 'ch8_final_decision' }
  ]
};

export const chapter8_final_decision: Scene = {
  id: 'ch8_final_decision',
  chapterIndex: 12,
  title: '靈魂的歸宿',
  outlinePhase: '【合】救贖或沈眠',
  description: '戰鬥結束，家豪虛弱地癱在光影之中。九姑娘的氣息暫時退去。',
  imageUrl: '',
  world: WorldState.DREAM,
  dialogues: [
    { speaker: '系統', text: '這是一切的終點。家豪的命運掌握在你手中。' }
  ],
  choices: [
    { 
      text: '【喚醒】回歸塵土（家豪表達感激後逐漸枯萎，靈魂重獲自由）', 
      nextSceneId: 'ch9_exit',
      effect: (s) => ({ hp: 10, inventory: [...s.inventory, 'ending_freedom'] })
    },
    { 
      text: '【沈眠】羽化繭蛹（家豪表示想睡一覺，化為繭蛹永遠留在夢境）', 
      nextSceneId: 'ch9_exit',
      effect: (s) => ({ suspicion: 100, inventory: [...s.inventory, 'ending_cocoon'] })
    }
  ]
};
