const url =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
const token = '48ef9cdeb1c3ddeda8d26b22338290bc85bc5055'

const getAddresses = (address: string) => {
  const options: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify({ query: address }),
  }

  return fetch(url, options)
    .then((response) => response.text())
    .catch((error) => alert(error))
}

export default getAddresses
