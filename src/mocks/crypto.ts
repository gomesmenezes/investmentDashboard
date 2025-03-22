export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  quantity: number;
  current_price?: number; // Agora com a opção de armazenar o preço atual
  price_change_percentage_24h?: number;
  image?: string;
}

// Mock de criptomoeda
export const mockCrypto: Crypto[] = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    quantity: 0.00163226,
    current_price: 45000, // Exemplo de preço mock
  },
];
