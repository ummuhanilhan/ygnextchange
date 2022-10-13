import { createSlice, createSelector, Dispatch } from '@reduxjs/toolkit'
import { CoreState } from 'stores/store'

type GeneralState = {
  filter?: object
  modalType?: string
  modalSettings?: object
  modalStatus?: boolean
  modalValues?: object
}

const initialState: GeneralState = {
  filter:{type:'grid'},
  modalType:'',
  modalStatus:false,
  modalValues:{},
  modalSettings:{},
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
 
    setModalStatus: (state,action) => {
      state.modalStatus = action.payload||false
    }, 

    openModal: (state, action) => {
        state.modalStatus = true
        state.modalType = action.payload.type 
        state.modalValues = {...action.payload.values, settings: action.payload.settings}
    },
    setModal: (state, action) => {
      state.modalSettings = action.payload 
  },

  setFilter:(state,action)=>{
      state.filter = action.payload;
  },
       
  closeModal: (state) => {
    state.modalStatus = false 
    state.modalType = '' 
  },
}
})

export function isNumber(data:any) {
    return (typeof data === 'number' && !isNaN(data));
}

/**
 * Extract count from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current count
 */
//export const selectGeneral = (state: CoreState) => state.general
export const selectGeneral = createSelector(
  (state: CoreState) => ({
    general: state.general,
    modalType: state.general.modalType,
    modalValues: state.general.modalValues,
    modalStatus: state.general.modalStatus,
    modalSettings: state.general.modalSettings,
    filter: state.general.filter
  }),
  (state) => state
)

export const {
  setModalStatus,
  openModal,
  setModal,
  closeModal,
  setFilter,
} = generalSlice.actions
 
export default generalSlice.reducer
