import {
  ADD_ITEM,
  DELETE_ITEM,
  ITEM,
  CHANGE_TEXT,
  SWITCH_STATE,
} from "./action";

const Reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          todo.id === action.payload
            ? { ...item, complete: !item.complete }
            : item
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((todo) => item.id !== action.payload),
      };
    case CHANGE_TEXT:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, mark: !todo.mark } : todo
        ),
      };
    case SWITCH_STATE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, mark: !todo.mark } : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
