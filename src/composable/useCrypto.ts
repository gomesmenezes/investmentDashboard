export interface CryptoPrices {
  bitcoin: { usd: number; changePercent: number };
  ethereum: { usd: number; changePercent: number };
  solana: { usd: number; changePercent: number };
  cardano: { usd: number; changePercent: number };
}

export const getCryptoPrices = async (): Promise<CryptoPrices | null> => {
  try {
    const response = await fetch(
      'https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCBRL","ETHBRL","SOLBRL","ADABRL"]'
    );
    const data = await response.json();

    return {
      bitcoin: {
        usd: parseFloat(
          data.find((item: any) => item.symbol === 'BTCBRL')?.lastPrice || '0'
        ),
        changePercent: parseFloat(
          data.find((item: any) => item.symbol === 'BTCBRL')
            ?.priceChangePercent || '0'
        ),
      },
      ethereum: {
        usd: parseFloat(
          data.find((item: any) => item.symbol === 'ETHBRL')?.lastPrice || '0'
        ),
        changePercent: parseFloat(
          data.find((item: any) => item.symbol === 'ETHBRL')
            ?.priceChangePercent || '0'
        ),
      },
      solana: {
        usd: parseFloat(
          data.find((item: any) => item.symbol === 'SOLBRL')?.lastPrice || '0'
        ),
        changePercent: parseFloat(
          data.find((item: any) => item.symbol === 'SOLBRL')
            ?.priceChangePercent || '0'
        ),
      },
      cardano: {
        usd: parseFloat(
          data.find((item: any) => item.symbol === 'ADABRL')?.lastPrice || '0'
        ),
        changePercent: parseFloat(
          data.find((item: any) => item.symbol === 'ADABRL')
            ?.priceChangePercent || '0'
        ),
      },
    };
  } catch (error) {
    console.error('Erro ao buscar os preços das criptomoedas', error);
    return null;
  }
};
