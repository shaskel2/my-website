CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "feedback_select_all" ON public.feedback;
CREATE POLICY "feedback_select_all" ON public.feedback FOR SELECT USING (true);

DROP POLICY IF EXISTS "feedback_insert_all" ON public.feedback;
CREATE POLICY "feedback_insert_all" ON public.feedback FOR INSERT WITH CHECK (true);
