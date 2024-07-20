import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://qoewohugrnfztdhkefat.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvZXdvaHVncm5menRkaGtlZmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MDg2NDgsImV4cCI6MjAzNjA4NDY0OH0.LL3ZH0MvNeIrzUyocLfwg_Lm5m4So-I3rSdcsATia7c';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
