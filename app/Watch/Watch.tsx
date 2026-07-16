import Pomodoro from "../components/Pomodoro/Pomodoro";
import Stopwatch from "../Stopwatch/Stopwatch";

export default function Watch() {
  return (
    <div className="w-full h-full rounded-2xl p-3 flex-col justify-items-center content-center pomodoro">
      <Pomodoro />
      <Stopwatch />
    </div>
  );
}