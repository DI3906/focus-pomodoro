'use client';
import { useState } from 'react';
import { TaskProps } from '@/app/types/task';
import { addTask, getTasks, deleteTask, updateStatus, deleteAllTask } from '../../utils'
import Modal from '../Modal/Modal';
import Task from '../Task/Task';

export default function Todo() {
  const [todos, setTodos] = useState<TaskProps[]>(getTasks('tasks'));
  const [showModalAdd, setShowModalAdd] = useState(false);

  const handleAddTask = (description: string) => {
    const updated = addTask(description);

    setTodos(updated);
    setShowModalAdd(false);
  }

  const handleDeleteTask = (id: number) => {
    const updated = deleteTask(id);

    setTodos(updated);
  }

  const handleUpdateStatusTask = (id: number) => {
    const updated = updateStatus(id);

    setTodos(updated);
  }

  return (
    <div className="w-full h-full rounded-2xl p-6 flex flex-col justify-between todo">
      <div>
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
              onDelete={handleDeleteTask}
              onComplete={handleUpdateStatusTask}
            />
          ))
        )}
      </div>
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
        onAddTask={handleAddTask}
      />
    </div>
  );
}
