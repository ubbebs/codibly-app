import { useQuery } from 'react-query'

export const useFetchQueries = () => {
  const fetcher = async () => {
    const res = await fetch(`https://reqres.in/api/products`)
      .then((res) => res.json())
      .then((data) => {
        return data
      })
      .catch((err) => {
        return err.message
      })
    console.log(res)
    return res
  }
  return useQuery(['products'], async () => fetcher())
}
