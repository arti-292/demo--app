// const initialState = {
//   items: []
// };

// let counter = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       return { ...state, items: [...state.items, action.item] };
//     case "DELETE_ITEM":
//       const newItems = state.items.filter((item, key) => key !== action.index);
//       return { ...state, items: newItems };
//     default:
//       return state;
//   }
// };
// export default counter;




const initialContact = { user: [], index: 0, isEdit: false };

let counter = (state = initialContact, action) => {
  console.log("======");
  switch (action.type) {
    case "USER_INFO":
      return { ...state, user: [...state.user, action.payload] };

    case "DELETE_ITEM":
      const newItems = state.user.filter(
        (item, index) => index !== action.index
      );
      return { ...state, user: newItems };

    case "EDIT_ITEM":
      return {
        ...state,
        index: action.index,
        isEdit: true
      };

    case "UPDATE_ITEM": {
      const newItems = state.user;
      const value = action.payload;
      newItems[state.index] = value;
      console.log(newItems, "new");
      return { ...state, user: newItems, isEdit: false };
    }
    case "CANCLE_EDIT": {
      return { ...state, isEdit: false };
    }
    default:
      return state;
  }
};

export default counter;
