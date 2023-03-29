import { useState } from 'react'
import { StoreProvider } from './context/StoreProvider'
import { StoreFront } from './pages/store-front/StoreFront'

function App() {

  return (
    <StoreProvider>
      <StoreFront/>
    </StoreProvider>
  )
}

export default App
