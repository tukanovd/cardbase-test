import React, { useCallback } from 'react';
import { IconButton, Button, Typography } from '@mui/material';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { ReactComponent as StubSVGImg } from '../assets/stubImg.svg';

type SuiteCardType = {
  id: number | string;
  onSelect?: (id: number | string) => void;
  onDetails?: (id: number | string) => void;
  description?: string;
  isSelected?: boolean;
};

const SuiteCard = (props: SuiteCardType) => {
  const { description, id, onDetails, onSelect, isSelected = false } = props;
  const handleDetailClick = useCallback(
    () => onDetails && onDetails(id),
    [id, onDetails],
  );
  const handleSelectClick = useCallback(
    () => onSelect && onSelect(id),
    [id, onSelect],
  );

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

export default SuiteCard;
