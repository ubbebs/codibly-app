import { Box, Modal } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchItems } from '../../services/useFetchItem'
import { ProductData } from './components/ProductData'

export const Product = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, remove, isLoading } = useFetchItems(id)

  const closeModal = () => {
    remove()
    navigate(-1)
  }

  return (
    <Modal
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
      }}
      open={true}
      onClose={() => closeModal()}
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
        {!isLoading ? <ProductData data={data.data} /> : <p>Loading...</p>}
      </Box>
    </Modal>
  )
}
