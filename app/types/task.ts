export type TaskProps = {
  id: number;
  detail: string;
  isCompleted: boolean;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
};
