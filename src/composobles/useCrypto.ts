import { mockCrypto } from '@/mocks/crypto.js';

let updateInterval: number | null = null;

export const fetchCrypto = async () => {
  try {
    const response = await fetch(
      'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da criptomoeda:', error);
    return null;
  }
};

export const valueInvestedCrypto = async () => {
  let currentValue: number | null = null;

  const cryptoData = await fetchCrypto();
  if (cryptoData) {
    currentValue = mockCrypto[0].quantity * parseFloat(cryptoData.lastPrice);
  }
  return currentValue;
};

export const cryptoPercentageChange = async () => {
  const cryptoData = await fetchCrypto();
  if (cryptoData) {
    return parseFloat(cryptoData.priceChangePercent);
  }
  return null;
};

export const startCryptoUpdates = (callback: () => void) => {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
  updateInterval = window.setInterval(callback, 15000);
};

export const stopCryptoUpdates = () => {
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }
};
