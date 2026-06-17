import { X } from 'lucide-react';

type ModalProps = {
  isShow: boolean,
  description: string,
}

export default function Modal({isShow, description}: ModalProps) {
  const showModalClassName = isShow 
    ? 'isShow w-screen h-screen modal-background'
    : 'hidden'

  return (
    <div className={showModalClassName}>
      {isShow ? (
        <div className='modal-content flex-col'>
          <div className='modal-header justify-items-end'>
            <X />
          </div>
          <div className='modal-body'>
            <input className='input-default w-full' type='text' placeholder={description}/>
          </div>
          <div className='modal-footer justify-self-end'>
            <button className='button-default bg-(--grey) text-(--black)'>cancel</button>
            <button className='button-default bg-(--blue) text-(--beige)'>add</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
