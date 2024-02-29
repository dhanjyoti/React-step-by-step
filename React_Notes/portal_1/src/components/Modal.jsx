import {useSetAtom} from 'jotai';
import { uiAtom } from '../state';

const Modal = () => {
  const setUi = useSetAtom(uiAtom);
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn"
          onClick={
            ()=> setUi((prev)=>({...prev, modal: null}))
          }
        >&times;</button>
        <h2>Modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          dicta doloribus fuga, voluptates autem fugiat ipsum? Praesentium,
          expedita voluptatibus. Alias impedit reprehenderit suscipit
          voluptatum, illum voluptates distinctio cupiditate sit eos?
        </p>
      </div>
    </div>
  );
};

export default Modal;
