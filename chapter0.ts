import { Scene, WorldState } from './types';

export const chapter0: Scene = {
  id: 'ch0_train',
  chapterIndex: 0,
  title: '火車上的噩夢',
  outlinePhase: 'Chapter 0｜噩夢序章',
  description: '燕發現自己來到了個奇怪的，充滿了被塗掉的眼睛跟叫他往回走的箭頭的地方。',
  imageUrl: 'https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?auto=format&fit=crop&q=80&w=1200',
  world: WorldState.DREAM,
  interactiveElements: [
    { id: 'eyes', label: '被塗掉的眼睛', description: '無數被抹黑的視線注視著他，令人感到恐懼與不安。' },
    { id: 'arrows', label: '箭頭', description: '箭頭指著後方，叫他往回走。但如果往回走就會發現只能一直走下去，回到起點。' }
  ],
  dialogues: [
    { speaker: '燕', text: '這到底是什麼地方...？那些眼睛看著真讓人害怕。' },
    { speaker: '燕(內心)', text: '箭頭叫我往回走，但如果真的回頭，我只會陷入永無止境的循環吧。' },
    { speaker: '燕', text: '只能往前走了。' }
  ],
  choices: [
    { text: '往前走（進入夢境道路）', nextSceneId: 'ch1_road' }
  ]
};