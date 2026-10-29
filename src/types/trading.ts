export interface TradeDeal {
  id: string;
  ticketId: number;
  symbol: string;
  type: 'BUY' | 'SELL';
  lot: number;
  pnl: number;
}
