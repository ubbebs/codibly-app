import { Box, Modal } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchQueries } from '../../services/useFetchQueries'
import { TableElemType } from '../../types/TableElemType'
import { ProductData } from './components/ProductData'

export const Product = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data } = useFetchQueries()
  return (
    <Modal
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
      }}
      open={true}
      onClose={() => navigate(-1)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          bgcolor: 'white',
          padding: '10px',
          paddingX: '30px',
        }}
      >
        {data.data
          .filter((elem: TableElemType) => elem.id.toString() === id)
          .map((elem: TableElemType) => {
            return <ProductData data={elem} key={elem.id} />
          })}
      </Box>
    </Modal>
  )
}
