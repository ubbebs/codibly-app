import { screen, render, waitFor } from '@testing-library/react'
import { describe, it, Mock, vi } from 'vitest'
import { useFetchQueries } from '../../../../services/useFetchQueries'
import { renderWithRouter } from '../../../../testProviders'
import { customDataData } from '../../../../utils/customData'
import { TableComponent } from '../TableComponent'

const mockedUseProduct = useFetchQueries as Mock<any>

vi.mock('../../../../services/useFetchQueries')

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

  it('Shows first 5 elems', () => {
    render(renderWithRouter(<TableComponent searchValue="" />, '/'))
    expect(screen.getByText('cerulean')).toBeInTheDocument()
    expect(screen.getByText('fuchsia rose')).toBeInTheDocument()
    expect(screen.getByText('true red')).toBeInTheDocument()
    expect(screen.getByText('aqua sky')).toBeInTheDocument()
    expect(screen.getByText('tigerlily')).toBeInTheDocument()
    expect(screen.queryByText('blue turquoise')).toBeNull()
    expect(screen.getByTestId('table-body').children).toHaveLength(5)
  })

  it('Shows 6th elem after next page', async () => {
    render(renderWithRouter(<TableComponent searchValue="" />, '/'))
    const buttonNext = await screen.findByTitle('Go to next page')
    buttonNext.click()
    await waitFor(() => {
      expect(screen.queryByText('tigerlily')).toBeNull()
      expect(screen.getByText('blue turquoise')).toBeInTheDocument()
      expect(screen.getByTestId('table-body').children).toHaveLength(1)
    })
  })

  it('Shows first 5 elems after going on next page and comeback', async () => {
    render(renderWithRouter(<TableComponent searchValue="" />, '/'))
    const buttonNext = await screen.findByTitle('Go to next page')
    buttonNext.click()
    await waitFor(() =>
      expect(screen.getByTestId('table-body').children).toHaveLength(1)
    )
    const buttonBack = await screen.findByTitle('Go to previous page')
    buttonBack.click()
    await waitFor(() =>
      expect(screen.getByTestId('table-body').children).toHaveLength(5)
    )
  })

  it('Shows searched elem', () => {
    render(renderWithRouter(<TableComponent searchValue="4" />, '/'))
    expect(screen.getByText('aqua sky')).toBeInTheDocument()
    expect(screen.getByTestId('table-body').children).toHaveLength(1)
  })
})
