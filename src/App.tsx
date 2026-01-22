import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"

import MainLayout from "@/layouts/MainLayout"
import HomePage from "@/pages/HomePage"
import ArticlesPage from "@/pages/ArticlesPage"
import CreateBlogPage from "@/pages/CreateBlogPage"
import EditBlogPage from "@/pages/EditBlogPage"
import ProfilePage from "@/pages/ProfilePage"
import CommunitiesPage from "@/pages/CommunitiesPage"

import { Toaster } from "@/components/ui/toaster"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>

              {/* Dashboard */}
              <Route index element={<HomePage />} />

              {/* Articles Page (NEW & SEPARATE) */}
              <Route path="articles" element={<ArticlesPage />} />

              {/* Blog Read Flow (unchanged) */}
              <Route path="blogs/:id" element={<HomePage />} />
              <Route path="blogs/:id/edit" element={<EditBlogPage />} />

              {/* Create */}
              <Route path="create" element={<CreateBlogPage />} />

              {/* Profile */}
              <Route path="profile" element={<ProfilePage />} />

              {/* Network / Communities */}
              <Route path="communities" element={<CommunitiesPage />} />

            </Route>
          </Routes>

          <Toaster />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
