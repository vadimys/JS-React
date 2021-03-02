import actions from "./types";

export const addName = name => ({
    type: actions.SAVE,
    payload: {name}
});

export const clearName = _ => ({
    type: actions.CLEAR
});
