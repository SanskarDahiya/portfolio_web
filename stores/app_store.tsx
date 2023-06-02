import { create } from 'zustand'

interface BearState {
  isNavBarOpened: boolean
  toggleNavBar: () => void
}

const useAppInfo = create<BearState>()((set) => ({
  isNavBarOpened: false,
  toggleNavBar: () =>
    set((state) => ({ isNavBarOpened: !state.isNavBarOpened })),
}))

export default useAppInfo
