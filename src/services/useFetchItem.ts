import { useQuery } from 'react-query'
import { fetcher } from '../utils/fetcher'

export const useFetchItems = (id: string | undefined) => {
  if (id === undefined)
    return { data: null, isLoading: false, remove: () => null }
  return useQuery(['item'], async () => fetcher(`id=${id}`))
}
