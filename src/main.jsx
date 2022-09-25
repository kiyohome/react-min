import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import ProfileSetting from './pages/ProfileSetting'
import Top from './pages/Top'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />,
    errorElement: <NotFound />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profile-setting",
    element: <ProfileSetting />
  },
  {
    path: "/home",
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
        fontSizes: {
          xs: 20,
          sm: 22,
          md: 24,
          lg: 26,
          xl: 30,
        },
        spacing: {
          xs: 20,
          sm: 22,
          md: 24,
          lg: 26,
          xl: 30,
        }
      }}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
)
