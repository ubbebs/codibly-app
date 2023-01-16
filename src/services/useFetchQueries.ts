import { useQuery } from 'react-query'
import { fetcher } from '../utils/fetcher'

type UseFetchQueriesType = {
  page: number
  id: string
}

export const useFetchQueries = ({ page, id }: UseFetchQueriesType) => {
  const query = `per_page=5&page=${page + 1}${
    id.length > 0 ? `&id=${id}` : null
  }`
  return useQuery(['products'], async () => fetcher(query))
}
