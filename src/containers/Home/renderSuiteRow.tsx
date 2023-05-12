import React from 'react';
import { ListChildComponentProps } from 'react-window';
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

const renderCard = (data: SeoSuiteType) => {
  return <SuiteCard suiteData={data} />;
};

export default renderRow;
