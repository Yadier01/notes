import { create } from 'zustand'

type Store = {
  cancel: boolean
  cancelHandler: () => void
}

const useStorePortal = create<Store>()((set) => ({
    cancel: false,
    cancelHandler: () => set({ cancel : !false}),
}))

export default useStorePortal
