import styles from './brasil-citys.module.css';

import Dropdown from '../dropdown/dropdown';

import { useEffect } from 'react';
import {
  fetchCitiesForState,
  parseCities,
} from '../../api-calls/src/lib/ibge/ibge';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface BrasilCitysProps {
  // state: any;
  id: string;
  onChange: any;
  name: string;
}

export function BrasilCities(props: BrasilCitysProps) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCitiesForState('SC').then(parseCities).then(setCities);
  }, []);

  return (
    <Dropdown
      id={props.id}
      name={props.name}
      data={cities}
      onChange={props.onChange}
      startValue="Cidade"
      helperInfos="Selecione a sua cidade"
    />
  );
}

export default BrasilCities;
