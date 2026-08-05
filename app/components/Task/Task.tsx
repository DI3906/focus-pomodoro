import { TaskProps } from '@/app/types/task';
import { SquareDashed, SquareCheckBig, Trash2 } from 'lucide-react';

export default function Task({
  id,
  detail,
  isCompleted,
  onDelete,
  onComplete,
}: TaskProps) {
  return (
    <div className="flex w-full">
      {isCompleted ? (
        <div className="flex items-start w-full">
          <button onClick={() => onComplete(id)}>
            <SquareCheckBig className="shrink-0" />
          </button>
          <p className="flex-1 line-through mx-3">{detail}</p>
          <button onClick={() => onDelete(id)}>
            <Trash2 className="shrink-0" color="#BE5E00" />
          </button>
        </div>
      ) : (
        <div className="flex items-start w-full">
          <button onClick={() => onComplete(id)}>
            <SquareDashed className="shrink-0" />
          </button>
          <p className="ml-3 mr-6">{detail}</p>
        </div>
      )}
    </div>
  );
}
