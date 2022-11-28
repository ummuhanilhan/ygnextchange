import create from 'zustand'
export const useFilter = create((set, get) => ({
    filter:{},
    setFilter: async (filters:any) => set({ filters }),
}))

