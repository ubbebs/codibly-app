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
} from '@mui/material'
import { useState } from 'react'
import { useFetchQueries } from '../../../services/useFetchQueries'
import { TableElemType } from '../../../types/TableElemType'
import { TableElem } from './TableElem'

type TableComponentType = {
  searchValue: string
}

export const TableComponent = ({ searchValue }: TableComponentType) => {
  const [page, setPage] = useState(0)
  const { data } = useFetchQueries()

  const handleChangePage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newpage: number
  ) => {
    e?.preventDefault()
    setPage(newpage)
  }

  const filteredData = data.data.filter((elem: TableElemType) =>
    searchValue.length > 0 ? elem.id.toString().includes(searchValue) : elem
  )

  return typeof data !== 'string' ? (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="table-body">
            {filteredData
              .slice(page * 5, page * 5 + 5)
              .map((elem: TableElemType) => (
                <TableElem data={elem} key={elem.id} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPage={5}
        rowsPerPageOptions={[5]}
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  ) : (
    <Alert severity="error">{data}</Alert>
  )
}
