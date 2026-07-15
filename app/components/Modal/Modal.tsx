'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

type ModalProps = {
  isShow: boolean;
  onClose: () => void;
  onAddTask: (description: string) => void;
  description: string;
};

export default function Modal({ isShow, onClose, description, onAddTask }: ModalProps) {
  const [taskValue, setTaskValue] = useState('');

  if (!isShow) return null;

  return (
    <div className="w-screen h-screen modal-background">
      <div className="modal-content flex-col">
        <div className="modal-header flex justify-end">
          <span onClick={onClose}>
            <X />
          </span>
        </div>
        <div className="modal-body">
          <input
            onChange={e => setTaskValue(e.target.value)}
            className="input-default w-full"
            type="text"
            placeholder={description}
          />
        </div>
        <div className="modal-footer flex justify-end mt-3">
          <button
            onClick={onClose}
            className="button-default bg-(--grey) text-(--black) mr-3"
          >
            cancel
          </button>
          <button
            onClick={() => onAddTask(taskValue)}
            className="button-default bg-(--blue) text-(--beige)">
            add
          </button>
        </div>
      </div>
    </div>
  );
}
