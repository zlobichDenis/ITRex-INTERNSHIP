import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store";
import { ResolutionSliceState } from "./resolutionsSlice";


const resolutionsState = (state: RootState): ResolutionSliceState => state.resolutions;


export const getUserResolutions = createSelector(resolutionsState, state => state.resolutions);
export const getResolutionsFetchStatus = createSelector(resolutionsState, state => state.fetchStatus);


