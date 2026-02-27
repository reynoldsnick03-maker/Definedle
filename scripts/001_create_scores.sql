-- Create scores table for anonymous score tracking
CREATE TABLE IF NOT EXISTS public.scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  word TEXT NOT NULL,
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'hard')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for efficient daily queries
CREATE INDEX IF NOT EXISTS idx_scores_word_difficulty ON public.scores (word, difficulty);
CREATE INDEX IF NOT EXISTS idx_scores_created_at ON public.scores (created_at);

-- Enable RLS but allow anonymous inserts/reads (no auth required)
ALTER TABLE public.scores ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert scores (anonymous)
CREATE POLICY "Allow anonymous score inserts" ON public.scores
  FOR INSERT WITH CHECK (true);

-- Allow anyone to read scores (for averages)
CREATE POLICY "Allow anonymous score reads" ON public.scores
  FOR SELECT USING (true);
