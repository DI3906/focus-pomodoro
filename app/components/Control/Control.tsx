import { Play, Pause, RotateCcw } from "lucide-react";

enum TypeControls {
  // START = 'start',
  // PAUSE = 'pause',
  // RELOAD = 'reload'
  INIT = 'init',
  PAUSE = 'pause'
}

type ControlProps = {
  // typeButton: () => void;
  typeButton: string
}

export default function Control({ typeButton }: ControlProps) {
  switch (typeButton) {
    case TypeControls.INIT:
      return (
        <div>
          <button className="button-control">
            <Play className="m-auto" color="#3a4b6c87" />
          </button>
        </div>
      );
    case TypeControls.PAUSE:
      return (
        <div>
          <button className="button-control mr-8">
            <Pause className="m-auto" color="#3a4b6c87" />
          </button>
          <button className="button-control">
            <RotateCcw className="m-auto" color="#3a4b6c87" />
          </button>
        </div>
      );
    default:
      return <></>;
  }
}
