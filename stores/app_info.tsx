import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
  isNavBarOpened: boolean
  toggleNavBar: () => void
}

const useAppInfo = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        isNavBarOpened: false,
        toggleNavBar: () =>
          set((state) => ({ isNavBarOpened: !state.isNavBarOpened })),
      }),
      {
        name: 'app-info',
      }
    )
  )
)

export default useAppInfo
