/* eslint-disable prettier/prettier */
import { screen, render } from '@testing-library/react'
import { describe, it } from 'vitest'
import { ProductData } from './ProductData'

describe('ProducData', () => {
  it('if renders proper data', () => {
    const data = {
      id: 1,
      name: 'Product1',
      year: 2005,
      color: 'red',
      pantone_value: 'customValue',
    }
    render(<ProductData data={data} />)
    expect(screen.getByTestId('productDataId').textContent).toContain('1')
    expect(screen.getByTestId('productDataName').textContent).toContain('Product1')
    expect(screen.getByTestId('productDataYear').textContent).toContain('2005')
    expect(screen.getByTestId('productDataColor').textContent).toContain('red')
    expect(screen.getByTestId('productDataPantone').textContent).toContain('customValue')
  })
})
