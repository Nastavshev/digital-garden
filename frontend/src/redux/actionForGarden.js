export const ADD_POSITION = (data) => ({type: "ADD_POSITION", payload: data, 
});

export const ADD_SIZE = (size) => ({
  type: "ADD_SIZE",
  payload: size,
})

export const SET_ANCHOR_STATE = (data) => ({ type: "SET_ANCHOR_STATE", payload: !data});

export const ADD_ELEMENT = (element) => ({ type: "ADD_ELEMENT", payload: element });

export const DELETE_GARDENBED = (id) => ({ type: "DELETE_GARDENBED", payload: id})
