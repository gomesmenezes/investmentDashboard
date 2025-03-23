export interface Crypto {
  symbol: string;
  quantity: number;
}

// Mock de criptomoeda
export const mockCrypto: Crypto[] = [
  {
    symbol: 'BTC',
    quantity: 0.00163226,
  },
];
