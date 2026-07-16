import { TaskProps } from './types/task';

export const getTasks = (keyStorage: string) => {
  if (typeof window != 'undefined') {
    const tasks = localStorage.getItem(keyStorage);
    return tasks ? JSON.parse(tasks) : [];
  }
};

export const addTask = (description: string) => {
  const tasks = getTasks('tasks');
  const newTask: TaskProps = {
    id: Date.now(),
    detail: description,
    isCompleted: false,
    onDelete: (()=>{}),
    onComplete: (()=>{}),
  };

  const updatedTasks = [...tasks, newTask];
  localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  
  return updatedTasks;
};

export const updateStatus = (idTask: number) => {
  const allTasks = getTasks('tasks');
  
  allTasks.find((task: TaskProps) => {
    if (task.id === idTask) {
      task.isCompleted = !task.isCompleted;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(allTasks));

  return allTasks;
};

export const deleteTask = (idTask: number) => {
  const allTasks = getTasks('tasks');
  const updated = allTasks.filter((task: TaskProps) => task.id !== idTask);
  
  localStorage.setItem('tasks', JSON.stringify(updated));
  return updated;
};

export const deleteAllTask = () => {
  return localStorage.setItem('tasks', JSON.stringify([]));
};
