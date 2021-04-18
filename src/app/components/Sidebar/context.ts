import {createContext} from 'react'

type SidebarProps = {
  isSidebarOpen: boolean, 
  setSidebar: (value: boolean | ((oldState: boolean) => boolean)) => void
}

export const SidebarContext = createContext<Partial<SidebarProps>>({})
