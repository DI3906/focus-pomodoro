export default function Pomodoro() {
  return (
    <div className="w-full h-full rounded-2xl p-3 flex-col justify-items-center content-center pomodoro">
      <p className="text-9xl">25:00</p>
      <div className="flex">
        <p>+25</p>
        <p>+10</p>
        <p>+5</p>
        <p>+1</p>
      </div>
      <p>START</p>
    </div>
  );
}
