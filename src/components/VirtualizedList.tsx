import React, { ReactElement } from 'react';
import {
  ListSubheader,
  Typography,
  ListItem,
  List,
  Paper,
} from '@mui/material';

type VirtualizedListType<T> = {
  header?: number | string;
  childRenderer: (
    data: T,
    isLast: boolean,
  ) => JSX.Element | JSX.Element[] | ReactElement[];
  data: any[];
};

const VirtualizedList = <T,>({
  header,
  childRenderer,
  data,
}: VirtualizedListType<T>) => {
  return (
    <>
      {header && (
        <ListSubheader>
          <Typography
            variant="h3"
            color="text.disabled"
            style={{
              paddingTop: '10px',
              paddingBottom: '14px',
            }}
          >
            {header}
          </Typography>
        </ListSubheader>
      )}

      <ListItem>
        <List>
          <Paper variant="outlined" className="full-width">
            {data.map((itemData, index) => {
              const isLastElement = index === data.length - 1;
              return (
                <React.Fragment key={index}>
                  {childRenderer(itemData, isLastElement)}
                </React.Fragment>
              );
            })}
          </Paper>
        </List>
      </ListItem>
    </>
  );
};

export default VirtualizedList;
