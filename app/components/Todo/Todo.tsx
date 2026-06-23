'use client';
import { useState } from "react";
import Modal from "../Modal/Modal";
import Task from "../Task/Task";

const taskTest = [
  // {
  //   id: 1,
  //   description: "Agregar tarea individual",
  //   completed: false
  // },
  // {
  //   id: 2,
  //   description: "Agregar icono para no completado",
  //   completed: false
  // },
  // {
  //   id: 3,
  //   description: "Agregar icono para completado",
  //   completed: false
  // },
  // {
  //   id: 4,
  //   description: "Agregar state para el cambio entre completado y no completado",
  //   completed: false
  // },
  // {
  //   id: 5,
  //   description: "Agregar estilo para completado",
  //   completed: false
  // },
]

export default function Todo() {
  const [showModalAdd, setShowModalAdd] = useState(false);

  

  return (
    <div className="w-full h-full rounded-2xl p-3 flex-col justify-items-center content-center todo">
      {taskTest === undefined || taskTest.length == 0 ? (
        <div className="w-full flex flex-col items-center">
          <p className="font-(family-name:--brygada) text-(--blue)">no task for today</p>
          <button className="add-task" onClick={() => {setShowModalAdd(true)}}>add new task</button>
        </div>
      ) : (
        taskTest.map((task) =>
          <Task id={task.id} detail={task.description} completed={task.completed} />
        )

      )}
      <Modal
        isShow={showModalAdd}
        onClose={() => {setShowModalAdd(false)}}
        description="add task"
      />
    </div>
  );
}
