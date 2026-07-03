import { TaskProps } from './types/task';

export const getTasks = (keyStorage: string) => {
  const tasks = localStorage.getItem(keyStorage);
  return tasks ? JSON.parse(tasks) : [];
};

export const addTask = (description: string) => {
  const tasks = getTasks('tasks');
  const newTask: TaskProps = {
    id: Date.now(),
    detail: description,
    isCompleted: false,
  };

  localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  return true;
};

export const updateStatus = (idTask: number) => {
  const allTasks = getTasks('tasks');
  allTasks.find((task: TaskProps) => {
    if (task.id === idTask) {
      task.isCompleted = true;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(allTasks));
};

export const deleteTask = (idTask: number) => {
  const allTasks = getTasks('tasks');
  const deleteTaskT = allTasks.filter((task: TaskProps) => task.id !== idTask);
  
  localStorage.setItem('tasks', JSON.stringify(deleteTaskT));
};

export const deleteAllTask = () => {
  return localStorage.clear();
};
