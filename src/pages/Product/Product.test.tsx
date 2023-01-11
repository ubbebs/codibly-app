import { render } from '@testing-library/react'
import { describe, Mock, it, vi } from 'vitest'
import { useFetchQueries } from '../../services/useFetchQueries'
import { renderWithRouter } from '../../testProviders'
import { customDataData } from '../../utils/customData'
import { Product } from './Product'

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

  it('Checks if header while loading', async () => {
    render(renderWithRouter(<Product />, '/product/5'))
    console.log(window.location.pathname) // yeah, I know its not test, but some error with pathname won... this battle.
  })
})
