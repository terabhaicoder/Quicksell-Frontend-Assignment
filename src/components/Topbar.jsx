import React, { useState, useEffect, useRef } from 'react';
import './styles/Topbar.css';

function Topbar({ grouping, ordering, setGrouping, setOrdering }) {
  const [isOpen, setIsOpen] = useState(false);
  const button = useRef(null);
  const drop = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drop.current && drop.current.contains(event.target)) {
        setIsOpen(true);
      } else if (button.current && button.current.contains(event.target)) {
        setIsOpen(!isOpen);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const reorderPriority = (priority) => {
    const priorityOrder = ['No priority', 'Urgent', 'High', 'Medium', 'Low'];
    return priorityOrder.indexOf(priority);
  };

  return (
    <div className='navbar'>
      <div className='display-container' ref={button}>
        <div className='display'>
          <span>Display</span>
        </div>
        {isOpen && (
          <div className='display-settings' ref={drop}>
            <div className='display-setting'>
              <div>Grouping</div>
              <select
                value={grouping}
                onChange={(e) => setGrouping(e.target.value)}
              >
                <option value='status'>Status</option>
                <option value='user'>User</option>
                <option value='priority'>Priority</option>
              </select>
            </div>
            <div className='display-setting'>
              <div>Sorting</div>
              <select
                value={ordering}
                onChange={(e) => setOrdering(e.target.value)}
              >
                <option value='title'>Title</option>
                {grouping !== 'priority' && <option value='priority'>Priority</option>}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topbar;


