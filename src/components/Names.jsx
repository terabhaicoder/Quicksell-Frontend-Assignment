import React from 'react';
import './styles/Names.css';

const addIconSrc = '/icons/plus.svg';
const moreOptionsIconSrc = '/icons/ellipsis.svg';

const priorityLevels = {
    'No priority': 0,
    'Low': 1,
    'Medium': 2,
    'High': 3,
    'Urgent': 4,
};

function Names({ title, grouping, count, available = true }) {
  return (
    <div className='card-title'>
        <div className='card-title-left'>
            {grouping === 'user' ? (
                <div className='card-user'>
                    <div className='card-user-icon'>
                        {title.split(" ").map(word => word[0].toUpperCase()).join("")}
                    </div>
                    <div className={available ? 'active-user' : 'inactive-user'}></div>
                </div>
            ) : grouping === 'status' ? (
                <img src={`/icons/status/${title}.svg`} alt="Status Icon" />
            ) : grouping === 'priority' ? (
                <img src={`/icons/priority/${priorityLevels[title]}.svg`} alt="Priority Icon" />
            ) : null}

            <span className='group-title'>{title}</span>
            <span className='group-count'>{count}</span>
        </div>

        {count > 0 ? (
            <div className='card-title-right'>
                <button className='card-title-right-btn'>
                    <img src={addIconSrc} alt="Add" />
                </button>
                <button className='card-title-right-btn'>
                    <img src={moreOptionsIconSrc} alt="More options" />
                </button>
            </div>
        ) : null}
    </div>
  );
}

export default Names;



