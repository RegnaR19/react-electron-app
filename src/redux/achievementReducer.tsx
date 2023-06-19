const TOTAL_ACHIEVEMENT = 'TOTAL_ACHIEVEMENT'
const ACHIEVEMENT_FOR_STATUS = 'ACHIEVEMENT_FOR_STATUS'
const ACHIEVEMENT_FOR_ATTACH = 'ACHIEVEMENT_FOR_ATTACH'

type Achievement = {
   name: string
   total: number
   id: number
}

let initialState = {
   points: [
      { id: 1, name: 'Total', total: 0 },
      { id: 2, name: 'Attach', total: 0 },
      { id: 3, name: 'Status', total: 0 }
   ] as Array<Achievement>
}

export type InitialStateType = typeof initialState

const achievementReducer = (state = initialState, action: any): InitialStateType => {

   switch (action.type) {

      case TOTAL_ACHIEVEMENT: {
         return {
            ...state,
            points: state.points.map(points => points.id[1] === action.id[1] ?
               { ...points, total: action.payload } : points
            )
         }
      }

      case ACHIEVEMENT_FOR_STATUS: {
         return {
            ...state,
            points: state.points.map(points => points.id === action.id ?
               { ...points, total: action.payload } : points
            )
         }
      }

      case ACHIEVEMENT_FOR_ATTACH: {

         return {
            ...state,
            points: state.points.map(points => points.id === action.id ?
               { ...points, total: action.payload } : points
            )
         }
      }

      default:
         return state
   }
}

export const attachAchievementAction = () => ({ type: ACHIEVEMENT_FOR_ATTACH, id: 2, payload: 100 })
export const statusAchievementAction = () => ({ type: ACHIEVEMENT_FOR_STATUS, id: 3, payload: 100 })

export default achievementReducer