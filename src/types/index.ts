export interface EquipmentSection {
  title: string;
  items: string[];
}

export interface PhotoTechnique {
  title: string;
  image: string;
  tips: string[];
}

export interface StylingTip {
  title: string;
  description: string;
  steps: string[];
}

export interface BeforeAfterExample {
  title: string;
  before: string;
  after: string;
  description: string;
}

export interface QuickTip {
  icon: JSX.Element;
  title: string;
  content: string[];
}