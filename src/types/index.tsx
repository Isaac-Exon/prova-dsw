export interface NameProps {
  id: number;
  firstname: string;
  lastname: string;
}

export interface ContextProps {
  names: NameProps[];
  setColumn: (column: string) => void;
  create: (name: NameProps) => Promise<void>;
  remove: (name: NameProps) => Promise<void>;
}
