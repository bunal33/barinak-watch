create type public.case_category as enum (
  'labor_action',
  'mesem',
  'unionist_detention'
);

create type public.action_type as enum (
  'legal_strike',
  'fiili_wildcat',
  'protest',
  'bargaining_dispute',
  'solidarity_action'
);

create type public.case_stage as enum (
  'decision_taken',
  'started',
  'ongoing',
  'ended',
  'postponed_banned',
  'cancelled',
  'unknown'
);

create type public.detention_status as enum (
  'detained',
  'arrested',
  'convicted',
  'released',
  'trial_ongoing',
  'unknown'
);

create type public.verification_status as enum (
  'draft',
  'needs_review',
  'verified',
  'rejected'
);

create type public.source_type as enum (
  'official',
  'union_statement',
  'labor_news',
  'news',
  'research_report',
  'social_media',
  'informant',
  'other'
);

create table public.cases (
  id text primary key,
  category public.case_category not null,
  action_type public.action_type,
  stage public.case_stage not null default 'unknown',
  detention_status public.detention_status,
  title text not null,
  summary text not null,
  employer text,
  labor_organization text,
  sector text,
  participant_count integer check (participant_count is null or participant_count >= 0),
  start_date date,
  end_date date,
  last_verified_at date,
  demands text[] not null default '{}',
  verification_status public.verification_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.case_locations (
  id text primary key,
  case_id text not null references public.cases(id) on delete cascade,
  label text not null,
  province text not null,
  district text,
  address text,
  lat numeric(10, 6) not null,
  lng numeric(10, 6) not null,
  created_at timestamptz not null default now()
);

create table public.case_sources (
  id bigint generated always as identity primary key,
  case_id text not null references public.cases(id) on delete cascade,
  title text not null,
  url text not null,
  publisher text,
  source_type public.source_type not null default 'news',
  published_at date,
  created_at timestamptz not null default now(),
  constraint case_sources_http_url check (url ~* '^https?://')
);

create table public.case_timeline (
  id bigint generated always as identity primary key,
  case_id text not null references public.cases(id) on delete cascade,
  date date,
  stage public.case_stage not null default 'unknown',
  note text not null,
  created_at timestamptz not null default now()
);

create table public.case_submissions (
  id bigint generated always as identity primary key,
  category public.case_category not null,
  title text not null,
  summary text not null,
  province text not null,
  location_label text,
  event_date date,
  lat numeric(10, 6),
  lng numeric(10, 6),
  source_url text not null,
  source_title text,
  contact_email text,
  status public.verification_status not null default 'needs_review',
  raw_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewer_note text,
  constraint case_submissions_http_url check (source_url ~* '^https?://')
);

create index cases_category_idx on public.cases(category);
create index cases_stage_idx on public.cases(stage);
create index cases_action_type_idx on public.cases(action_type);
create index cases_verification_status_idx on public.cases(verification_status);
create index case_locations_case_id_idx on public.case_locations(case_id);
create index case_sources_case_id_idx on public.case_sources(case_id);
create index case_timeline_case_id_idx on public.case_timeline(case_id);
create index case_submissions_status_idx on public.case_submissions(status);

alter table public.cases enable row level security;
alter table public.case_locations enable row level security;
alter table public.case_sources enable row level security;
alter table public.case_timeline enable row level security;
alter table public.case_submissions enable row level security;

create policy "Read verified cases"
on public.cases for select
using (verification_status = 'verified');

create policy "Read locations for verified cases"
on public.case_locations for select
using (exists (
  select 1 from public.cases c
  where c.id = case_locations.case_id
  and c.verification_status = 'verified'
));

create policy "Read sources for verified cases"
on public.case_sources for select
using (exists (
  select 1 from public.cases c
  where c.id = case_sources.case_id
  and c.verification_status = 'verified'
));

create policy "Read timeline for verified cases"
on public.case_timeline for select
using (exists (
  select 1 from public.cases c
  where c.id = case_timeline.case_id
  and c.verification_status = 'verified'
));

create policy "Anyone can submit leads"
on public.case_submissions for insert
with check (status = 'needs_review');
