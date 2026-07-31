import Pomodoro from "../Pomodoro/Pomodoro";
import Stopwatch from "../Stopwatch/Stopwatch";

export default function Watch() {
  return (
    <div className="w-full h-full rounded-2xl p-3 flex-col justify-items-center content-center pomodoro">
      <div>
        <button className="button-default">Pomodoro</button>
        <button className="button-default">Stopwatch</button>
      </div>
      <Pomodoro />
      <Stopwatch />
    </div>
  );
}