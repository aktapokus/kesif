-- Aktapokus Kesif: hesaba bagli ilerleme. Supabase SQL Editor'de BIR KEZ calistirin (mevcut Kids English projesi).
-- Tek tablo: kullanici basina tek satir, tum ilerleme tek JSON. Satir yalniz sahibi tarafindan okunur/yazilir (RLS).
-- Tutulan veri: e-posta (Supabase Auth), ilerleme, gunluk skor, tekrar kutusu, "peki ya neden" notlari.
-- Herkese acik skor tablosu YOK.

create table if not exists public.kesif_progress (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint kesif_progress_size check (pg_column_size(data) < 200000)
);

alter table public.kesif_progress enable row level security;

drop policy if exists kesif_select on public.kesif_progress;
drop policy if exists kesif_insert on public.kesif_progress;
drop policy if exists kesif_update on public.kesif_progress;
drop policy if exists kesif_delete on public.kesif_progress;

create policy kesif_select on public.kesif_progress for select to authenticated using (auth.uid() = user_id);
create policy kesif_insert on public.kesif_progress for insert to authenticated with check (auth.uid() = user_id);
create policy kesif_update on public.kesif_progress for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy kesif_delete on public.kesif_progress for delete to authenticated using (auth.uid() = user_id);

revoke all on public.kesif_progress from anon;

-- "Verilerimi sil": kullanici kendi satirini silebilir (kesif_delete politikasi). Auth kaydi (e-posta) silinmez:
-- ayni e-posta Kids English ogretmen panelinde de kullaniliyor olabilir. E-posta kaydinin silinmesi istege bagli,
-- Supabase panelinden elle yapilir (Authentication > Users).
