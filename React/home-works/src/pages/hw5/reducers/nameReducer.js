import actions from "../actions/types";
import React from "react";

export const nameReducer = (name = '', action) => {
    const setName = (name) => name ? `My name is ${name}!` : '';

    switch (action.type) {
        case actions.SAVE:
            return setName(action.payload.name);
        case actions.CLEAR:
            return setName('');
        default:
            return name
    }
}
