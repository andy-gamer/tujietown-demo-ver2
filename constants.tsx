import { Scene, WorldState, GameState } from './types';
import { chapter0 } from './chapter0';
import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';
import { chapter4 } from './chapter4';
import { chapter5 } from './chapter5';
import { chapter6 } from './chapter6';
import { chapter7 } from './chapter7';
import { chapter8_1, chapter8_2_1, chapter8_2_2, chapter8_2_3, chapter8_3 } from './chapter8_extended';
import { chapter9 } from './chapter9';

export const CHAPTER_NAMES = [
  "噩夢序章", "夢境道路", "九姑娘廟", "車站現實", 
  "街道調查", "紅茶店內", "異界夜晚", "異界街道", 
  "學校走廊", "禮堂探索", "記憶對峙", "心靈真相", "靈魂決擇", "回歸現世"
];

export const INITIAL_STATE: GameState = {
  currentSceneId: 'ch0_train',
  world: WorldState.DREAM,
  soulSeeingActive: false,
  soulSeeingUnlocked: false,
  suspicion: 0,
  hp: 100,
  inventory: [],
};

export const SCENES: Record<string, Scene> = {
  'ch0_train': chapter0,
  'ch1_road': chapter1,
  'ch2_temple': chapter2,
  'ch3_station': chapter3,
  'ch4_street': chapter4,
  'ch5_teashop': chapter5,
  'ch6_night': chapter6,
  'ch7_boy': chapter7,
  'ch8_1': chapter8_1,
  'ch8_2_1': chapter8_2_1,
  'ch8_2_2': chapter8_2_2,
  'ch8_2_3': chapter8_2_3,
  'ch8_3': chapter8_3,
  'ch9_exit': chapter9,
};