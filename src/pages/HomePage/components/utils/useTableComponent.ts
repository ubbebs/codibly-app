import { useEffect, useState } from 'react'
import { useFetchQueries } from '../../../../services/useFetchQueries'

export const useTableComponent = (search: string) => {
  const [page, setPage] = useState(0)
  const { data, isLoading, refetch } = useFetchQueries({
    page: page,
    id: search,
  })

  const handleChangePage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newpage: number
  ) => {
    e?.preventDefault()
    setPage(newpage)
  }

  useEffect(() => {
    if (search.length > 0) setPage(0)
    refetch()
  }, [page, search])

  return {
    data: data,
    isLoading: isLoading,
    page: page,
    changePage: handleChangePage,
  }
}
