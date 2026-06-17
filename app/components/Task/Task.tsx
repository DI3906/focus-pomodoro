
type TaskProps = {
  id: number,
  detail: string,
  completed: boolean,
}

export default function Task({id, detail, completed}: TaskProps) {

  return (
    <div className="flex">
      <span>icon</span>
      <p>{detail}</p>
    </div>
  );
}
