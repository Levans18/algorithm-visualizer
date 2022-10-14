import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../../app/store';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { store } from '../../../app/store';

class Box {
    x: number;
    y: number;
    inFringe: boolean;
    searched: boolean;
    isWall: boolean;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
        this.inFringe = false;
        this.searched = false;
        this.isWall = false;
    }
}

export interface PathfindState {
    grid: Array<Box>;
}


export const pathSlice = createSlice({
    name: 'pathfind',
    initialState: {
        fringe: [],
        searchedNodes: [],
        gridColors: [],
        grid: [],
    },
    reducers: {
        newGrid: (state) => {
            state.grid = [];
        }
    }
});

export const { newGrid } = pathSlice.actions;
export const selectGrid = (state: RootState) => state.pathfind.grid;
