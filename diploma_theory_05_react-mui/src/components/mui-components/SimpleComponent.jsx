/*Создаем в папке components папку mui-components, а в ней - компонент SimpleComponent. Этот компонент должен содержать поле ввода (инпут), кнопку, и текст (typography variant="body1").
*/
import { Button, Typography, TextField, IconButton } from '@mui/material'
import { useState } from 'react';

import SaveIcon from '@mui/icons-material/Save';

export default function SimpleComponent() {

  const [inputValue, setInputValue] = useState('Default text');
  const [displayedValue, setDisplayedValue] = useState('Default text');

  return (
    <div>
      <Typography variant="body1">{displayedValue}</Typography>
      <TextField
        onChange={(event)=>{
        setInputValue(event.target.value)
      }} size="small" variant="outlined" placeholder="Simple placeholder"></TextField>
      <IconButton
        variant="outlined" onClick={() => {
        setDisplayedValue(inputValue)
      }}>
        <SaveIcon />
      </IconButton>
    </div>
  );
}