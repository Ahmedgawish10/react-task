import React, { useState } from 'react';
import "../components/task.css"

const Task = () => {
  const [items, setItems] = useState([
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
  ]);
  const [dragIndex, setDragIndex] = useState(0);

  // hand the elemnt & run function when i hold any element and hover it element for siblings elements ! 
  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (index == dragIndex){ return };//if i hold the element and draged it in it's own place again exit and don't complete script! 
    const newItems = [...items];//return the elements of state using spread operator and put it in new array called=>(newItems)!
      console.log(newItems);//log array every time you drag the elemnt!
       const draggedItem = newItems[dragIndex];//here i hand the object or element that i clicked it by mouse & moved it !
       newItems.splice(dragIndex, 1);
       newItems.splice(index, 0, draggedItem);//insert the element i draged it in the new place 
       setItems(newItems);//set the new order of elemnts to our state 
        setDragIndex(index);
  };
  return (
    <>
    <ul>
      {items.map((obj, index) => (
        <li draggable className={index === dragIndex ? 'dragging' : ''}
          key={obj.id} //to avoid repeatable child element error and unique every child element!
          onDragStart={() =>{setDragIndex(index)}} //set index of this element for state when i hand this element !
          onDragOver={(e) =>{ handleDragOver(e, index)}}//run the function  when i leave this element 
        >
          {obj.content}
        </li>
      ))}
    </ul>
    </>
  );
};

export default Task;