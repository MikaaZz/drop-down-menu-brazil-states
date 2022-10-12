// https://servicodados.ibge.gov.br/api/v1/localidades/estados
// https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1';

const responseToJson = (response: { json: () => any }) => response.json();

const sortByLabelAscending = (a: any, b: any) => {
  return a.label.localeCompare(b.label);
};

export const parseStates = (states: any) => {
  return states
    .map((state: any) => {
      const { nome, sigla } = state;
      return { label: nome, value: sigla };
    })
    .sort(sortByLabelAscending);
};

export const parseCities = (cities: any) => {
  return cities
    .map((city: any) => {
      const { id, nome } = city;
      return { label: nome, value: id };
    })
    .sort(sortByLabelAscending);
};

export const fetchStates = () => {
  const url = `${BASE_URL}/localidades/estados`;
  return fetch(url).then(responseToJson);
};

export const fetchCitiesForState = (state: string) => {
  if (!state) return Promise.resolve([]);
  const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
  return fetch(url).then(responseToJson);
};
