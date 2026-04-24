# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0.0] - 2026-04-21

### Added
- Native Schedule UI with horizontal scroll navigation.
- Duration-accurate session heights in the schedule grid.
- Modal details for sessions and speakers directly from the schedule.
- Service sessions (Lunch, Breaks) integrated into the schedule.
- "Get App" link for official Sessionize event app.
- Sticky navigation buttons for easier schedule browsing.
- **Legacy Parity**: Fully synchronized the legacy Vue SPA with Astro features (Schedule UI, data fetching, sponsor sync).

### Changed
- Migrated primary production site to Astro 6 + Vue 3 architecture.
- Renamed original Vue SPA to `legacy/`.
- Updated GitHub Actions to build and deploy from `source-astro/`.
- Enhanced `SessionizeService` with robust error handling and `GridSmart` view integration.
- **Sponsor Sync**: Updated all site versions with latest 2026 sponsors and logos.
