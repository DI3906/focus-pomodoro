'use client';
import { useState } from 'react';
import Pomodoro from '../Pomodoro/Pomodoro';
import Stopwatch from '../Stopwatch/Stopwatch';
import { Maximize2 } from 'lucide-react';

export default function Watch() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="w-full h-full rounded-2xl flex flex-col justify-between bg-(--beige) watch">
      <div className="header-watch">
        <p className="header-watch-title">Watch</p>
        <button className="header-watch-button">
          <Maximize2 color="#3a4b6c"/>
        </button>
      </div>
      {/* <div className="w-[559] h-[340]"> */}
      <div className="">
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
