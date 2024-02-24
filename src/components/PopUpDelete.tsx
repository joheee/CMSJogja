import { useEffect } from 'react';
import { PopUpDeleteInterface } from '../interface/interface';

export function PopUpDelete(prop: PopUpDeleteInterface) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        prop.handlePopUp();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prop.handlePopUp]);

  return (
    <>
      <div onClick={prop.handlePopUp} className="z-30 fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"></div>
      <div className="z-40 pop-up-delete-container bg-white p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-800 mb-4">Are you sure you want to delete?</p>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={prop.handleDelete}>Yes</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={prop.handlePopUp}>No</button>
        </div>
      </div>
    </>
  );
}
