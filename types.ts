export enum WorldState {
  REAL = 'REAL',
  OTHERWORLD = 'OTHERWORLD',
  DREAM = 'DREAM'
}

export interface InteractiveElement {
  id: string;
  label: string;
  description: string;
  effect?: (state: GameState) => Partial<GameState>;
  requiresSoulSee?: boolean;
}

export interface Choice {
  text: string;
  nextSceneId: string;
  condition?: (state: GameState) => boolean;
  conditionMessage?: string;
  effect?: (state: GameState) => Partial<GameState>;
}

export interface Dialogue {
  speaker: string;
  text: string;
}

export interface Scene {
  id: string;
  chapterIndex: number;
  title: string;
  outlinePhase: string;
  description: string;
  imageUrl: string;
  world: WorldState;
  dialogues: Dialogue[];
  choices: Choice[];
  interactiveElements?: InteractiveElement[];
  canSoulSee?: boolean;
  soulSeeDescription?: string;
}

export interface GameState {
  currentSceneId: string;
  world: WorldState;
  soulSeeingActive: boolean;
  soulSeeingUnlocked: boolean;
  suspicion: number;
  hp: number;
  inventory: string[];
  lastInteractionText?: string;
}