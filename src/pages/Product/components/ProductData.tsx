import { Paper, Typography } from '@mui/material'
import { TableElemType } from '../../../types/TableElemType'

type ProductDataType = {
  data: TableElemType
}

export const ProductData = ({ data }: ProductDataType) => {
  return (
    <Paper elevation={0}>
      <Typography variant="body1" data-testid="productDataId">
        ID: {data.id}
      </Typography>
      <Typography variant="body1" data-testid="productDataName">
        Name: {data.name}
      </Typography>
      <Typography variant="body1" data-testid="productDataYear">
        Year: {data.year}
      </Typography>
      <Typography variant="body1" data-testid="productDataColor">
        Color: {data.color}
      </Typography>
      <Typography variant="body1" data-testid="productDataPantone">
        Pantone Value: {data.pantone_value}
      </Typography>
    </Paper>
  )
}
