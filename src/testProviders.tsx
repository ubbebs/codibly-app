import { QueryClientProvider } from 'react-query'
import { MemoryRouter } from 'react-router-dom'
import { queryClient } from './utils/queryClient'

export const renderWithRouter = (children: JSX.Element, route: string) => {
  return (
    <MemoryRouter initialEntries={[`${route}`]}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  )
}
