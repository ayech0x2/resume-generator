import { Reducer } from "react";
import { AnyAction } from "redux";

const INITIAL_STATE: any = {
  font: "roboto",
  topBarColor: "#2b2b2b",
  isPreview: false,
};

export const mainReducer: Reducer<any, AnyAction> = (
  state: any = INITIAL_STATE,
  action
): boolean => {
  switch (action.type) {
    case "SET_FONT":
      return {
        ...state,
        font: action.payload,
      };
    case "SET_TOP_BAR_COLOR":
      return {
        ...state,
        topBarColor: action.payload,
      };
    case "TOGGLE_PREVIEW":
      return {
        ...state,
        isPreview: !state.isPreview,
      };
    default:
      return { ...state };
  }
};
