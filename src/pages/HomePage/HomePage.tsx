import { InputField } from './components/InputField'
import { TableComponent } from './components/TableComponent'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

export const HomePage = () => {
  const [search, setSearch] = useState('')
  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.preventDefault()
    setSearch(e.currentTarget.value)
  }

  return (
    <>
      <InputField func={handleSearch} />
      <TableComponent search={search} />
      <Outlet />
    </>
  )
}
