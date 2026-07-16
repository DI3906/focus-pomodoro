import Todo from './components/Todo/Todo';
import Watch from './Watch/Watch';

export default function Home() {
  return (
    <main className="w-full h-screen p-6 flex content">
      <div className="w-1/3 mr-6">
        <Todo />
      </div>
      <div className="w-2/3">
        <Watch />
      </div>
    </main>
  );
}
