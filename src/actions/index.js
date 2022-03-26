export const userInfo = (values) => ({
  type: "USER_INFO",
  payload: values
});

export const deleteItem = (index) => {
  return {
    type: "DELETE_ITEM",
    index
  };
};

export const editItem = (index) => {
  return {
    type: "EDIT_ITEM",
    index
  };
};

export const updateItem = (values) => {
  return {
    type: "UPDATE_ITEM",
    payload: values
  };
};

export const cancleEdit = () => {
  return {
    type: "CANCLE_EDIT"
  };
};


// export const updateItem = ( item,index) => {
//   return {
//     type: "UPDATE_ITEM",
//     index,
//     item
//   };
// }