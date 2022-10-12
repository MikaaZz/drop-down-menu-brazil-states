import styles from './brasil-states.module.css';

import { useEffect } from 'react';
import {
  fetchStates,
  parseStates,
} from '../../api-calls/src/lib/ibge/ibge';
import { useState } from 'react';
import Dropdown from '../dropdown/dropdown';

/* eslint-disable-next-line */
export interface BrasilStatesProps {
  id: string;
  name: string;
  onChange: any;
}

export function BrasilStates(props: BrasilStatesProps) {
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetchStates().then(parseStates).then(setStates);
  }, []);

  return (
    <>
      <Dropdown
        id={props.id}
        name={props.name}
        data={states}
        onChange={props.onChange}
        startValue="Estado"
        helperInfos="Selecione o seu estado"
      />
    </>
  );
}

export default BrasilStates;
