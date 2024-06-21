export type Component = {
  className?: string;
};

export enum Category {
  Branding,
  GraphicDesign,
  Website,
  Software,
  Event,
  Naming,
  Music,
  Graffiti,
  Literature,
}

export type ProjectProps = {
  id: string;
  name: string;
  date?: string;
  order?: number;
  description?: string;
  content?: React.ReactNode;
  shortDesc?: string;
  tags?: Category[];
  thumbnail: string;
  assets?: string[];
  className?: string;
};
