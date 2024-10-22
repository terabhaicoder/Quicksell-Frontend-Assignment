import axios from 'axios';

const DATA = {};

await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
    .then(({ data }) => {
        const { tickets: ticketList, users: userList } = data;

        const statusCategories = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'].map(status => ({
            title: status,
            tickets: ticketList.filter(ticket => ticket.status === status),
        }));

        const userCategories = userList.map(user => ({
            title: user.name,
            tickets: ticketList.filter(ticket => ticket.userId === user.id),
        }));

        const priorityCategories = [
            { priority: 'No priority', level: 0 },
            { priority: 'Low', level: 1 },
            { priority: 'Medium', level: 2 },
            { priority: 'High', level: 3 },
            { priority: 'Urgent', level: 4 },
        ].map(({ priority, level }) => ({
            title: priority,
            tickets: ticketList.filter(ticket => ticket.priority === level),
        }));

        Object.assign(DATA, { status: statusCategories, user: userCategories, priority: priorityCategories, users: userList });
    })
    .catch(() => {
        Object.assign(DATA, { status: [], user: [], priority: [], users: [] });
    });

export default DATA;


