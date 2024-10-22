import React, { useEffect, useState } from 'react';
import './styles/Kanban.css';
import Navbar from './Topbar';
import Title from './Names';
import Card from './Card';
import Order from './Order';
import DATA from './Items';

function Kanban() {
  const [currentGrouping, setCurrentGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [currentOrdering, setCurrentOrdering] = useState(localStorage.getItem('ordering') || 'title');

  useEffect(() => {
    localStorage.setItem('ordering', currentOrdering);
  }, [currentOrdering]);

  useEffect(() => {
    localStorage.setItem('grouping', currentGrouping);
  }, [currentGrouping]);

  useEffect(() => {
    if (currentGrouping === 'priority') {
      setCurrentOrdering('title');
    }
  }, [currentGrouping]);

  // Get sorted group columns based on current grouping
  const retrieveSortedGroups = () => {
    const columns = DATA[currentGrouping];
    if (currentGrouping === 'priority') {
      const priorityLevels = ['No priority', 'Urgent', 'High', 'Medium', 'Low'];
      return columns.sort((first, second) => priorityLevels.indexOf(first.title) - priorityLevels.indexOf(second.title));
    }
    return columns;
  };

  return (
    <div className='page'>
      <Navbar
        grouping={currentGrouping}
        ordering={currentOrdering}
        setGrouping={setCurrentGrouping}
        setOrdering={setCurrentOrdering}
      />
      <div className='board'>
        {retrieveSortedGroups().map((column) => (
          <div className='group-column' key={column.title}>
            <Title
              title={column.title}
              grouping={currentGrouping}
              count={column.tickets.length}
              available={currentGrouping === 'user' ? DATA.users.find((user) => user.name === column.title)?.available : null}
            />
            {Order(column.tickets, currentOrdering).map((task) => (
              <Card
                key={task.id}
                ticket={task}
                grouping={currentGrouping}
                user={DATA.users.find((user) => user.id === task.userId)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kanban;





