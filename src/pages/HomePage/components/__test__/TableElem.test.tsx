import { screen, render } from '@testing-library/react'
import { describe, it } from 'vitest'
import { renderWithRouter } from '../../../../testProviders'
import { TableElem } from '../TableElem'

describe('TableElem', () => {
  it('if renders proper data', () => {
    const data = {
      id: 1,
      name: 'Product1',
      year: 2005,
      color: 'red',
      pantone_value: 'customValue',
    }
    render(renderWithRouter(<TableElem data={data} />, '/'))
    expect(screen.getByText('Product1')).toBeInTheDocument()
    expect(screen.queryByText('Product2')).toBeNull()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2005')).toBeInTheDocument()
  })
})
