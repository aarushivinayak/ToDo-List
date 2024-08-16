


import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, completed, onDelete, onToggle }) => {
  if (!text) return null; // Return null if text is not provided, so nothing renders

  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer' onClick={onToggle}>
        <img src={completed ? tick : not_tick} alt={completed ? "Checked" : "Not Checked"} className='w-7' />
        <p className={`ml-4 text-[17px] ${completed ? 'line-through text-gray-500' : 'text-slate-700'}`}>
          {text}
        </p>
      </div>
      <img src={delete_icon} alt="Delete" className='w-3.5 cursor-pointer' onClick={onDelete} />
    </div>
  );
};

export default TodoItems;

