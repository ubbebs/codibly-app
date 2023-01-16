export const fetcher = async (url: string) => {
  const res = await fetch(`https://reqres.in/api/products?${url}`)
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch((err) => {
      return err.message
    })
  return res
}
