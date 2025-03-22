import { mockCrypto } from '@/mocks/crypto.js';

export const fetchCrypto = async () => {
  try {
    const response = await fetch(
      'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da criptomoeda:', error);
    return null;
  }
};

export const valueInvestedCrypto = async () => {
  const cryptoData = await fetchCrypto();
  if (cryptoData) {
    return mockCrypto[0].quantity * parseFloat(cryptoData.price);
  }
  return null;
};
