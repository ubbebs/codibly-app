import { TableCell, TableRow } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { TableElemType } from '../../../types/TableElemType'

export type TableElemPropType = {
  data: TableElemType
}

export const TableElem = ({
  data: { id, name, year, color },
}: TableElemPropType) => {
  const navigate = useNavigate()
  const handleRowClick = () => {
    navigate(`/product/${id}`)
  }
  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        bgcolor: color,
        textDecoration: 'none',
      }}
      onClick={handleRowClick}
    >
      <TableCell component="th" scope="row" sx={{ color: '#ffffff' }}>
        {id}
      </TableCell>
      <TableCell component="th" scope="row" sx={{ color: '#ffffff' }}>
        {name}
      </TableCell>
      <TableCell component="th" scope="row" sx={{ color: '#ffffff' }}>
        {year}
      </TableCell>
    </TableRow>
  )
}
