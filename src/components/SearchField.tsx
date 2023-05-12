import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const _placeHolder = 'What do you want to find?';

type SearchFieldType = {
  placeHolder?: string;
  disabled: boolean;
  onChange: (input: string) => void;
};

const SearchField = ({
  placeHolder = _placeHolder,
  disabled,
  onChange,
}: SearchFieldType) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    onChange(e.target.value);
  };
  return (
    <TextField
      disabled={disabled}
      variant="outlined"
      placeholder={placeHolder}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{ width: '100%' }}
    />
  );
};

export default SearchField;
