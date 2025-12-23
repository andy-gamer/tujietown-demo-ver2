import { Scene, WorldState, GameState } from './types';
import { chapter0 } from './chapter0';
import { chapter1 } from './chapter1';
import { chapter2 } from './chapter2';
import { chapter3 } from './chapter3';
import { chapter4 } from './chapter4';
import { chapter5 } from './chapter5';
import { chapter6 } from './chapter6';
import { chapter7 } from './chapter7';
import { 
  chapter8_chase, 
  chapter8_gym, 
  chapter8_control_room, 
  chapter8_classroom, 
  chapter8_abuse_room, 
  chapter8_park, 
  chapter8_boss_confront, 
  chapter8_final_decision 
} from './chapter8_extended';
import { chapter9 } from './chapter9';

export const CHAPTER_NAMES = [
  "噩夢序章", "夢境道路", "九姑娘廟", "車站現實", 
  "街道調查", "紅茶店內", "異界夜晚", "異界街道", 
  "學校追逐", "禮堂危機", "紀念冊回憶", "家暴陰影", "心靈公園", "靈魂歸宿", "回歸現世"
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
  'ch8_1': chapter8_chase,
  'ch8_gym': chapter8_gym,
  'ch8_control_room': chapter8_control_room,
  'ch8_classroom': chapter8_classroom,
  'ch8_abuse_room': chapter8_abuse_room,
  'ch8_park': chapter8_park,
  'ch8_boss_confront': chapter8_boss_confront,
  'ch8_final_decision': chapter8_final_decision,
  'ch9_exit': chapter9,
};