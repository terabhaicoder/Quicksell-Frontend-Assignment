import React from 'react';
import Tag from './Label';
import getImageSrc from './getImageSrc';
import './styles/Card.css';

const completedIcon = '/icons/status/Todo.svg';
const moreOptionsIcon = '/icons/ellipsis.svg';

function Card({ ticket, grouping, user }) {
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-id'>{ticket.id}</div>
        {grouping === 'user' ? null : (
          <div className='card-user'>
            <div className='card-user-icon'>
              {user.name.split(" ").map((name) => name[0].toUpperCase()).join("")}
            </div>
            <div className={user.available ? 'active-user' : 'inactive-user'}></div>
          </div>
        )}
      </div>
      <div className='card-body'>
        {grouping === 'status' ? null : (
          <img src={'/icons/status/' + ticket.status + '.svg'} alt={`Status: ${ticket.status}`} />
        )}
        <span>{ticket.title}</span>
      </div>
      <div className='card-footer'>
        {grouping === 'priority' ? null : (
          <div className='card-footer-priority'>
            <img src={'/icons/priority/' + ticket.priority + '.svg'} alt={`Priority: ${ticket.priority}`} />
          </div>
        )}
        <div className='card-footer-tags'>
          {ticket.tag.map(tag => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;


