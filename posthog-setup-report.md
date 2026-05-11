<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvents Next.js App Router project. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new) — Initializes PostHog on the client side using the `posthog-js` SDK. Uses a reverse proxy (`/ingest`) for more reliable event delivery, enables exception capture for error tracking, and turns on debug mode in development.
- **`next.config.ts`** (updated) — Added reverse proxy rewrites routing `/ingest/*` to the EU PostHog ingestion endpoint (`eu.i.posthog.com`) and `/ingest/static/*` + `/ingest/array/*` to the EU assets endpoint. Also added `skipTrailingSlashRedirect: true` as required by PostHog.
- **`.env.local`** (new) — Contains `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (git-ignored).
- **`components/ExploreBtn.tsx`** (updated) — Added `posthog.capture('explore_events_clicked')` inside the existing `onClick` handler.
- **`components/EventCard.tsx`** (updated) — Added `'use client'` directive and `posthog.capture('event_card_clicked', { title, slug, location })` on the card link click.
- **`components/Navbar.tsx`** (updated) — Added `'use client'` directive and `posthog.capture('nav_link_clicked', { href, label })` on each navigation link click.

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" CTA button on the home page hero section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to view event details (includes `title`, `slug`, `location`) | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicks a navigation link in the navbar (includes `href` and `label`) | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/672131)
- [Explore Events button clicks](/insights/uv58FxfH) — daily trend of CTA clicks
- [Event card clicks over time](/insights/jo4b7D0I) — daily trend of event card interactions
- [Nav link clicks by destination](/insights/VEqevm6H) — nav clicks broken down by link label
- [Most clicked events](/insights/T51JtqCG) — bar chart of event cards ranked by click count
- [Explore → Event detail conversion funnel](/insights/6EOelJjF) — conversion from CTA click to event card click

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
