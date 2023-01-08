import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { Product } from './pages/Product/Product'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/product/:id" element={<Product />} />
      </Route>
    </Routes>
  )
}
