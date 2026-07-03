import { TaskProps } from '@/app/types/task';
import { updateStatus, deleteTask } from '@/app/utils';
import { SquareDashed, SquareCheckBig, Trash2 } from 'lucide-react';

export default function Task(task: TaskProps) {
  return (
    <li id={`item-${task.id}`} className="flex w-full">
      {task.isCompleted ? (
        <div className="flex items-start w-full">
          <SquareCheckBig className="shrink-0" />
          <p className="flex-1 line-through mx-3">{task.detail}</p>
          <button onClick={() => {
            deleteTask(task.id);
          }}>
            <Trash2 className="shrink-0" color="#BE5E00" />
          </button>
        </div>
      ) : (
        <div className="flex items-start w-full">
          <button
            onClick={() => {
              updateStatus(task.id)
            }}
          >
            <SquareDashed className="shrink-0" />
          </button>
          <p className="ml-3 mr-6">{task.detail}</p>
        </div>
      )}
    </li>
  );
}
