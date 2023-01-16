import {
  TableHead,
  TableRow,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  TablePagination,
  Alert,
  Typography,
} from '@mui/material'
import { TableElemType } from '../../../types/TableElemType'
import { TableElem } from './TableElem'
import { useTableComponent } from './utils/useTableComponent'

type TableComponentType = {
  search: string
}

export const TableComponent = ({ search }: TableComponentType) => {
  const { data, isLoading, page, changePage } = useTableComponent(search)

  if (isLoading) return <Typography variant="h5">Loading...</Typography>

  return typeof data !== 'string' ? (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="table-body">
            {[data.data].flat().map((elem: TableElemType) => (
              <TableElem data={elem} key={elem.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPage={5}
        rowsPerPageOptions={[5]}
        component="div"
        count={data.total || [data.data].flat().length}
        page={page}
        onPageChange={changePage}
      />
    </Paper>
  ) : (
    <Alert severity="error">{data}</Alert>
  )
}
