function Order(items, parameter) {
    if (parameter === 'title') {
      items.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleA.localeCompare(titleB);
      });
    } else if (parameter === 'priority') {
      items.sort((a, b) => b.priority - a.priority);
    } else if (parameter === 'status') {
      const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];
      items.sort((a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status));
    }
  
    return items;
  }
  
  export default Order;
  

