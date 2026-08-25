'use client';
import { useState } from 'react';
import Pomodoro from '../Pomodoro/Pomodoro';
import Stopwatch from '../Stopwatch/Stopwatch';

export default function Watch() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="w-full h-full rounded-2xl p-3 flex justify-center items-center bg-(--beige)">
      <div className="w-[559] h-[340]">
        <button
          onClick={() => {
            setShowTimer(true);
          }}
          className="shadow p-2 mr-2"
        >
          Pomodoro
        </button>
        <button
          onClick={() => {
            setShowTimer(false);
          }}
          className="shadow-dis p-2"
        >
          Stopwatch
        </button>
        {showTimer ? <Pomodoro /> : <Stopwatch />}
      </div>
    </div>
  );
}
