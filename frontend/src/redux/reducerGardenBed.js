const initialState = {
  position: { x: 0, y: 0 }, size: { width: '100px', height: '100px' }, status: false, count: [],
};

export default function reducerGardenBed(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SIZE':
    {
      const newState = { ...state };
      newState.count = state.count.map((el, i) => {
        const newEl = { ...el };
        if (el.id == action.payload.id) {
          newEl.size.width = action.payload.size.width;
          newEl.size.height = action.payload.size.height;
        }
        return newEl;
      });
      return newState;
    }

    case 'SET_ANCHOR_STATE':
      return {
        ...state,
        status: action.payload,
      };

    case 'ADD_ELEMENT':
      return {
        ...state, count: [...state.count, action.payload],
      };

    case 'ADD_POSITION':
    {
      const newState = { ...state };
      newState.count = state.count.map((el) => {
        const newEl = { ...el };
        if (el.id == action.payload.id) {
          newEl.position = action.payload.position;
        }
        return newEl;
      });
      return newState;
    }
    case 'DELETE_GARDENBED':
    {
      const stateAfterDelete = { ...state };
      stateAfterDelete.count = state.count.filter((el) => {
        if (el.id !== action.payload) {
          return el;
        }
      });
      return stateAfterDelete;
    }
    default:
      return state;
  }
}
