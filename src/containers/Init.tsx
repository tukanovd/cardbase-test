import { useEffect, useState } from 'react';
import { getSuites, SuitesType } from '../models';

const InitApp = () => {
  const [allSuites, setAllSuites] = useState<SuitesType>([]);
  useEffect(() => {
    getSuites().then((suites) => setAllSuites(suites));
  }, []);

  console.log('ALL SUITES ', allSuites);
  return null;
};

export default InitApp;
