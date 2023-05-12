import React, { useCallback } from 'react';
import { ListItem } from '@mui/material';
import SuiteCard from '../components/SuiteCard';
import { SeoSuiteType } from '../models';
import { useDispatch } from 'react-redux';
import { suitesToggleFollow } from '../store/reducers';
import { AppDispatch } from '../store/types';

const SuiteCardRenderer = ({
  suiteData,
  divider = false,
}: {
  suiteData: SeoSuiteType;
  divider?: boolean;
}) => {
  const { id, name, is_follow, sport_name } = suiteData;
  const description = `${name} ${sport_name}`;

  const dispatch: AppDispatch = useDispatch();
  const handleSelectClick = useCallback(() => {
    dispatch(suitesToggleFollow(id));
  }, [id, dispatch]);

  return (
    <ListItem divider={divider}>
      <SuiteCard
        id={id}
        description={description}
        isSelected={is_follow}
        onSelect={handleSelectClick}
      />
    </ListItem>
  );
};

export default SuiteCardRenderer;
