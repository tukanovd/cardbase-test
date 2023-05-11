import React from 'react';
import { IconButton, Button, Typography } from '@mui/material';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { ReactComponent as StubSVGImg } from '../assets/stubImg.svg';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/types';
import { suitesToggleFollow } from '../store/reducers';

type CardRendererType = {
  id: number | string;
  onSelect?: (id: number | string) => void;
  onDetails?: (id: number | string) => void;
  description?: string;
  isSelected?: boolean;
};

const CardRenderer = (props: CardRendererType) => {
  const { description, id, onDetails, onSelect, isSelected = false } = props;
  const handleDetailClick = () => onDetails && onDetails(id);
  const handleSelectClick = () => {
    dispatch(suitesToggleFollow(id));
    onSelect && onSelect(id);
  };

  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="flex content-between full-width">
      <span
        style={{
          marginTop: '17px',
          marginBottom: '17px',
          marginLeft: '15px',
          marginRight: '6px',
        }}
      >
        <StubSVGImg />
      </span>
      <div style={{ gap: '12px', padding: '24px' }} className="flex flex-col">
        <Typography variant="body1">{description}</Typography>
        <div>
          <Button variant="outlined" onClick={handleDetailClick}>
            <Typography variant="button">Details</Typography>
          </Button>
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        <IconButton onClick={handleSelectClick}>
          <StarsRoundedIcon
            color={isSelected ? 'primary' : 'disabled'}
            fontSize="large"
          />
        </IconButton>
      </div>
    </div>
  );
};

export default CardRenderer;
