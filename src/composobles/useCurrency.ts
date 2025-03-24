export const fetchDolar = async () => {
  try {
    const response = await fetch(
      'https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados/ultimos/1?formato=json'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados do dólar:', error);
    return null;
  }
};
