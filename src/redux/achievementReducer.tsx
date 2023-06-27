import { createSlice } from '@reduxjs/toolkit'

type Achievement = {
   attach: number
   total: number
   status: number
   post: number
}

let initialState: Achievement = {
   total: 0,
   attach: 0,
   status: 0,
   post: 0
}

export type InitialStateType = typeof initialState

export const achievementSlice = createSlice({
   name: 'achievement',
   initialState,
   reducers: {
      totalAchievement(state, action) {
         state.total = state.attach + state.status + (action.payload)
      },
      attachAchievement(state, action) {
         state.attach = action.payload
      },
      postAchievement(state, action) {
         state.post = action.payload
      },
      statusAchievement(state, action) {
         state.status = action.payload
      }
   }
})

export const attachAchievementAction = () => {
   return {
      type: "achievement/attachAchievement",
      payload: 100
   }
}

export const statusAchievementAction = () => {
   return {
      type: "achievement/statusAchievement",
      payload: 100
   }
}

export const postAchievementAction = () => {
   return {
      type: "achievement/postAchievement",
      payload: 100
   }
}

export const { totalAchievement, attachAchievement, statusAchievement } = achievementSlice.actions

export default achievementSlice.reducer