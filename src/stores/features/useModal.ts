import create from 'zustand'
export const useModal = create((set) => ({
    mode:'modal',
    type:'',
    status:false,
    styles:{},
    values:{},
    close: async () => set({ status:false }),
    open: async ({type, styles, values}:any) => set({ status:true, type, styles, values }),
}))

