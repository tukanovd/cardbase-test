import React from 'react';
import { ListItem } from '@mui/material';
import CardRenderer from './CardRenderer';
import { SeoSuiteType } from '../models';

const SuiteCard = ({
  suiteData,
  divider = false,
}: {
  suiteData: SeoSuiteType;
  divider?: boolean;
}) => {
  const { id, name, is_follow, sport_name } = suiteData;
  const description = `${name} ${sport_name}`;

  return (
    <ListItem divider={divider}>
      <CardRenderer id={id} description={description} isSelected={is_follow} />
    </ListItem>
  );
};

export default SuiteCard;
