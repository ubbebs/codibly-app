import { Typography } from '@mui/material'
import { InputField } from './components/InputField'
import { TableComponent } from './components/TableComponent'
import { useState } from 'react'
import { useFetchQueries } from '../../services/useFetchQueries'
import { Outlet } from 'react-router-dom'

export const HomePage = () => {
  const [search, setSearch] = useState('')
  const { data, isLoading } = useFetchQueries()

  const handleSearch = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.preventDefault()
    setSearch(e.currentTarget.value)
  }

  if (isLoading) return <Typography variant="h5">Loading...</Typography>

  return (
    <>
      <InputField func={handleSearch} />
      {data && <TableComponent searchValue={search} />}
      <Outlet />
    </>
  )
}
