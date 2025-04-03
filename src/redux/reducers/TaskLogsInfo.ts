import { createSlice } from "@reduxjs/toolkit";

interface TaskLogsInfoState {
  data: boolean;
}

const initialState: TaskLogsInfoState = {
  data: false,
};

const TaskLogInfo = createSlice({
  name: "TaskLogInfo",
  initialState,
  reducers: {
    setTaskLogInfo: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export default TaskLogInfo.reducer;
export const { setTaskLogInfo } = TaskLogInfo.actions;
