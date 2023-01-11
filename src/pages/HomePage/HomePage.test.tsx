import { screen, render, waitFor, fireEvent } from '@testing-library/react'
import { describe, it, Mock, vi } from 'vitest'
import { useFetchQueries } from '../../services/useFetchQueries'
import { renderWithRouter } from '../../testProviders'
import { customDataData } from '../../utils/customData'
import { HomePage } from './HomePage'

const mockedUseProduct = useFetchQueries as Mock<any>

vi.mock('../../services/useFetchQueries')

describe('TableComponent', () => {
  beforeEach(() => {
    mockedUseProduct.mockImplementation(() => ({
      isLoading: false,
      data: customDataData,
    }))
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('Checks if header while loading', () => {
    mockedUseProduct.mockImplementation(() => ({
      isLoading: true,
      data: null,
    }))
    render(renderWithRouter(<HomePage />, '/'))
    expect(
      screen.getByRole('heading', { level: 5, name: 'Loading...' })
    ).toBeInTheDocument()
  })

  it('Renders table with 5 elems', () => {
    render(renderWithRouter(<HomePage />, '/'))
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByTestId('table-body').children).toHaveLength(5)
  })

  it('Input as a filter', async () => {
    render(renderWithRouter(<HomePage />, '/'))
    const inputParent = await screen.findByTestId('inputField')
    const input = inputParent.children[0]
    fireEvent.change(input, {
      target: { value: 1 },
    })
    await waitFor(() => {
      expect(screen.getByTestId('table-body').children).toHaveLength(1)
      expect(screen.getByText('cerulean')).toBeInTheDocument()
    })
  })
})
