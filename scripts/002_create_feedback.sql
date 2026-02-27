-- Create feedback table for scoring appeals/reports
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  word TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'hard')),
  player_definition TEXT NOT NULL,
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
  feedback_type TEXT NOT NULL CHECK (feedback_type IN ('should_match', 'too_harsh', 'other')),
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for efficient queries
CREATE INDEX IF NOT EXISTS idx_feedback_word ON public.feedback (word);
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON public.feedback (created_at);

-- Enable RLS but allow anonymous inserts (no auth required)
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit feedback (anonymous)
CREATE POLICY "Allow anonymous feedback inserts" ON public.feedback
  FOR INSERT WITH CHECK (true);

-- Only allow authenticated users (admins) to read feedback
CREATE POLICY "Only admins can read feedback" ON public.feedback
  FOR SELECT USING (false);
