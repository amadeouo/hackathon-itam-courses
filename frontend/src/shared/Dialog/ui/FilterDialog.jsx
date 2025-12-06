import classes from './FilterDialog.module.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useState } from "react";
import MultipleSelectChip from "@shared/DialogInput/ui/MultipleSelect";
import {TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export const FilterDialog = ({ onFiltersChange }) => {
  const [open, setOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    stack: [],
    difficulty: '',
    dateRange: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStackChange = (selectedStack) => {
    setFormData(prev => ({
      ...prev,
      stack: selectedStack
    }));
  };

  const handleFieldChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Данные формы:', formData);
    
    if (onFiltersChange) {
      onFiltersChange(formData);
    }
    
    handleClose();
  };

  const handleReset = () => {
    setFormData({
      stack: [],
      difficulty: '',
      dateRange: '',
    });
  };

  return (
    <>
      <button 
        type="button"
        onClick={handleClickOpen} 
        className={classes.button}
        aria-label="Открыть фильтры"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_93_100)">
            <path d="M15.3576 0.913956L15.3576 14.7973M15.3576 19.6977L15.3576 21.7024M15.3576 19.6977C14.7079 19.6977 14.0848 19.4397 13.6254 18.9802C13.166 18.5208 12.9079 17.8978 12.9079 17.2481C12.9079 16.5984 13.166 15.9753 13.6254 15.5159C14.0848 15.0565 14.7079 14.7984 15.3576 14.7984C16.0073 14.7984 16.6304 15.0565 17.0898 15.5159C17.5492 15.9753 17.8073 16.5984 17.8073 17.2481C17.8073 17.8978 17.5492 18.5208 17.0898 18.9802C16.6304 19.4397 16.0073 19.6977 15.3576 19.6977ZM7.93331 0.913956L7.93331 4.40305M7.93331 9.30351L7.93331 21.7024M7.93331 9.30351C7.28362 9.30351 6.66054 9.04542 6.20113 8.58602C5.74173 8.12661 5.48364 7.50353 5.48364 6.85384C5.48364 6.53214 5.54701 6.2136 5.67011 5.91639C5.79322 5.61919 5.97366 5.34914 6.20113 5.12166C6.42861 4.89419 6.69866 4.71375 6.99586 4.59064C7.29307 4.46753 7.61162 4.40417 7.93331 4.40417C8.25501 4.40417 8.57355 4.46753 8.87076 4.59064C9.16797 4.71375 9.43801 4.89419 9.66549 5.12166C9.89296 5.34914 10.0734 5.61918 10.1965 5.91639C10.3196 6.2136 10.383 6.53214 10.383 6.85384C10.383 7.50353 10.1249 8.12661 9.66549 8.58602C9.20609 9.04542 8.583 9.30351 7.93331 9.30351Z" stroke="#3E3A40" strokeWidth="1.56978" strokeMiterlimit="10" strokeLinecap="round"/>
          </g>
          <defs>
            <clipPath id="clip0_93_100">
              <rect width="23.5525" height="23.5525" fill="white" transform="translate(1.02951e-06 23.5526) rotate(-90)"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Фильтры</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Выберите нужные вам фильтры для поиска хакатонов
          </DialogContentText>
          <form onSubmit={handleSubmit} id="filter-form">
            <MultipleSelectChip
              value={formData.stack}
              onChange={handleStackChange}
            />
            
            <TextField
              select
              label="Уровень сложности"
              value={formData.difficulty}
              onChange={(e) => handleFieldChange('difficulty', e.target.value)}
              sx={{ mt: 2, minWidth: 250 }}
            >
              <MenuItem value="any">Любой</MenuItem>
              <MenuItem value="beginner">Начинающий</MenuItem>
              <MenuItem value="intermediate">Средний</MenuItem>
              <MenuItem value="advanced">Продвинутый</MenuItem>
            </TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReset}>Сбросить</Button>
          <Button onClick={handleClose}>Отменить</Button>
          <Button 
            type="submit" 
            form="filter-form"
            variant="contained"
          >
            Применить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}