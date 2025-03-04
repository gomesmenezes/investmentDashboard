import { Crypto } from '@/types/crypto.js';
import { cryptoList } from '@/constants/cryptoList.js';

// Função para buscar o preço de uma criptomoeda
export const getCryptoPrices = async (crypto: {
  id: string;
}): Promise<Crypto | null> => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto.id}&order=market_cap_desc&per_page=1&page=1`
    );

    if (!response.ok) {
      throw new Error(
        `Erro na requisição: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();

    if (data.length > 0) {
      const cryptoData = data[0];
      return {
        id: cryptoData.id,
        symbol: cryptoData.symbol,
        name: cryptoData.name,
        image: cryptoData.image,
        current_price: cryptoData.current_price,
        price_change_percentage_24h: cryptoData.price_change_percentage_24h,
      };
    } else {
      console.warn(`Nenhum dado encontrado para ${crypto.id}`);
      return null;
    }
  } catch (error) {
    console.error(`Erro ao buscar dados de ${crypto.id}:`, error);
    return null;
  }
};

// Função para buscar os preços de todas as criptomoedas da lista
export const fetchCryptoPrices = async (): Promise<Crypto[]> => {
  try {
    const prices = await Promise.all(
      cryptoList.map(async (crypto) => {
        const price = await getCryptoPrices(crypto);
        return price;
      })
    );

    // Filtra valores nulos e retorna os dados
    return prices.filter((price) => price !== null) as Crypto[];
  } catch (error) {
    console.error('Erro ao buscar preços das criptomoedas:', error);
    return [];
  }
};
