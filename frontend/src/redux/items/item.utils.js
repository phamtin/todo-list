export const handleUpdate = (listItem, newItem) => {
  // let itemIndex = listItem.findIndex(item => item._id === newItem._id);
  // listItem[itemIndex] = newItem;
  // return listItem;

  return listItem.map(item => {
    if (item._id === newItem._id) {
      return newItem;
    } else {
      return item;
    }
  });
};
