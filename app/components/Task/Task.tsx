import { SquareDashed, SquareCheckBig, Trash2 } from "lucide-react";

type TaskProps = {
  id: number,
  detail: string,
  isCompleted: boolean,
}

export default function Task({id, detail, isCompleted}: TaskProps) {
  return (
    <li id={`item-${id}`} className="flex w-full">
      {isCompleted ? (
        <div className="flex items-start w-full">
          <SquareCheckBig className="shrink-0" />
          <p className="flex-1 line-through mx-3">{detail}</p>
          <Trash2 className="shrink-0" color="#BE5E00"/>
        </div>
      ) : (
        <div className="flex items-start w-full">
          <SquareDashed className="shrink-0" />
          <p className="ml-3 mr-6">{detail}</p>
        </div>
      )}
    </li>
  );
}
