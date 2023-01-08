import { Input, Paper } from '@mui/material'

type InputFieldType = {
  func: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export const InputField = ({ func }: InputFieldType) => {
  return (
    <Paper sx={{ paddingX: '10px', marginBottom: '10px' }}>
      <Input
        type="number"
        onChange={(e) => func(e)}
        sx={{ marginBottom: '10px', width: '100%' }}
        data-testid="inputField"
      />
    </Paper>
  )
}
