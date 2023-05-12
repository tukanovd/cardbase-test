import React, { memo } from 'react';
import { ListChildComponentProps, areEqual } from 'react-window';
import { VirtualizedList, SuiteCard } from '../../components';
import { SuiteType, SeoSuiteType } from '../../models';

const renderRow = ({
  index,
  data,
  style,
}: ListChildComponentProps<SuiteType[]>) => {
  const item = data[index];

  const { year, seo_suites } = item;
  return (
    <div style={style}>
      <VirtualizedList<SeoSuiteType>
        header={year}
        data={seo_suites}
        childRenderer={renderCard}
      />
    </div>
  );
};

const Row = memo(renderRow, areEqual);

const renderCard = (data: SeoSuiteType, isLast: boolean) => {
  return <SuiteCard suiteData={data} divider={!isLast} />;
};

export default Row;
