import { Scene, WorldState } from './types';

export const chapter3: Scene = {
  id: 'ch3_station',
  chapterIndex: 3,
  title: '土界車站的傳聞',
  outlinePhase: '【承】現世的歸鄉',
  description: '燕睜眼時就在火車站了。他似乎打了瞌睡，為了來這裡找梅洛川要六合彩號碼，他把自己搞得非常累。',
  imageUrl: '',
  world: WorldState.REAL,
  interactiveElements: [
    { id: 'association', label: '互助會成員', description: '穿著制服的鎮民，懷疑地看著你這個外地人。' }
  ],
  dialogues: [
    { speaker: '互助會成員', text: '喂！這個作物不停生病的時候，怎麼還有外地人過來？' },
    { speaker: '燕', text: '我來找梅洛川，我要請他指點六合彩號碼。' },
    { speaker: '互助會成員', text: '梅洛川？他去世了！你別在那邊亂搞怪力亂神的事！' },
    { speaker: '燕', text: '去世了！？（驚愕）...不，我不信。我要去他的店鋪看看。' }
  ],
  choices: [
    { text: '前往泡沫紅茶店', nextSceneId: 'ch4_street' }
  ]
};