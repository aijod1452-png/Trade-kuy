CREATE TABLE IF NOT EXISTS public.trades (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ticket_id BIGINT UNIQUE NOT NULL,
    symbol VARCHAR(20) NOT NULL DEFAULT 'XAUUSD.p',
    pnl NUMERIC(12, 2) DEFAULT 0.00
);
