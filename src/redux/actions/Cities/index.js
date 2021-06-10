import { QUERY_FOR_CITY } from '../ActionTypes';

import cityListByState from '../../../dataTests/Cities';

export const queringCity = (cityQuery) => {
  const result = cityListByState.filter((city) => city.name === cityQuery);
  const ExtractedCity = Object.assign({}, ...result);
  console.log(cityQuery, 'cityquery');
  console.log(cityListByState[0].name, 'just washington');
  console.log(ExtractedCity, 'is it a mattch?!');
  if (ExtractedCity !== []) {
    return {
      type: QUERY_FOR_CITY,
      payload: ExtractedCity,
    };
  } else {
    console.log('Someting went wrong in the cityisamatch Action');
    return {
      type: QUERY_FOR_CITY,
      payload: ' ',
    };
  }
};
