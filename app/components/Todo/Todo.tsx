'use client';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Task from '../Task/Task';

const taskTest = [
  {
    id: 1,
    description:
      'Ajustar en un contenedor, el icono al inicio de este, el parrafo debera ocupar 2/3 aprox de todo y al final si esta completado se debera mostrar un icono para eliminar la tarea',
    completed: false,
  },
  {
    id: 2,
    description:
      'Si funciona pero el problema es cuando son pocas palabras y no logran ocupar todo el espacio',
    completed: true,
  },
  {
    id: 3,
    description: 'Agregar icono para completado',
    completed: true,
  },
  {
    id: 4,
    description:
      'Agregar state para el cambio entre completado y no completado',
    completed: false,
  },
  {
    id: 5,
    description: 'Agregar estilo para completado',
    completed: false,
  },
];

export default function Todo() {
  const [showModalAdd, setShowModalAdd] = useState(false);

  // const [task, setTasks] = useState([]);

  return (
    <div className="w-full h-full rounded-2xl p-6 flex flex-col justify-between todo">
      <ul>
        {taskTest === undefined || taskTest.length == 0 ? (
          <div className="w-full flex flex-col items-center">
            <p className="font-(family-name:--brygada) text-(--blue)">
              no task for today
            </p>
          </div>
        ) : (
          taskTest.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              detail={task.description}
              isCompleted={task.completed}
            />
          ))
        )}
      </ul>
      <button
        className="add-task"
        onClick={() => {
          setShowModalAdd(true);
        }}
      >
        add new task
      </button>
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
