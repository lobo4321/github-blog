import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { PostsContextProvider } from './context/PostsContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'

import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <PostsContextProvider>
          <Header />

          <Router />
        </PostsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
