'use client';
import { useEffect, useState } from 'react';
import { TaskProps } from '@/app/types/task';
import { getTasks, deleteAllTask } from '../../utils'
import Modal from '../Modal/Modal';
import Task from '../Task/Task';

export default function Todo() {
  const [todos, setTodos] = useState<TaskProps[]>([]);
  const [showModalAdd, setShowModalAdd] = useState(false);
  useEffect(() => {
    if (getTasks) {
      setTodos(getTasks('tasks'))
    }
  }, []);


  return (
    <div className="w-full h-full rounded-2xl p-6 flex flex-col justify-between todo">
      <ul>
        {todos === undefined || todos.length == 0 ? (
          <div className="w-full flex flex-col items-center">
            <p className="font-(family-name:--brygada) text-(--blue)">
              no task for today
            </p>
          </div>
        ) : (
          todos.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              detail={task.detail}
              isCompleted={task.isCompleted}
            />
          ))
        )}
      </ul>
      <div className='justify-center '>
        <button
          className="delete-all-task"
          onClick={() => {
            deleteAllTask();
          }}
        >
          delete all task
        </button>
        <button
          className="add-task"
          onClick={() => {
            setShowModalAdd(true);
          }}
        >
          add new task
        </button>
      </div>
      <Modal
        isShow={showModalAdd}
        onClose={() => {
          setShowModalAdd(false);
        }}
        description="add task"
      />
    </div>
  );
}
