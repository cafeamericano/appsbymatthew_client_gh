# Get Started

1. (Clone the repository) 
2. npm install
3. npm run dev

# Release Notes

### Release 5.4.3 (2021-12-13)

- Darkened edit icon on Skill cards
- Removed Bitbucket and Email from Contact page
- Skills requiring a disclaimer are now hidden altogether
- Updated time-specific verbiage on welcome page

### Release 5.4.3 (2021-05-25)

- Skill badges on app cards now use images rather than icons
- Fixed bug where background would size awkwardly on mobile devices
- Metrics/traffic now captured with GraphQL (appsbymatthew-logs) and processed with Apache Spark and Scala (appsbymatthew-spark); admins can view in the UI under the new metrics tab
- All skills now show on the skill page with indication of proficiency provided

### Release 5.4.2 (2020-12-22)

- Fixed bug where new applications could not be created
- Fixed bug where, during new application skill association, all skills would unexpectedly check

### Release 5.4.1 (2020-12-22)

- Fixed bug where new applications could not be created
- Fixed bug where, during new application skill association, all skills would unexpectedly check

### Release 5.4.0 (2020-12-09)

- Fixed bug where non-proficient skills were being displayed on the skills page
- Fixed bug where router was broken and edit apps/skills pages could not be viewed
- Fixed bug where an empty nav link was showing under the Contact page subnav bar
- Skills in All Applications filter now sort alphabetically and case-insensitive
- Skill list now updates after adding a new skill
- Fixed bug where adding or editing a skill would result in is_proficient becoming false
- Improved ability to parse booleans on the backend

### Release 5.3.0 (2020-11-28)

- Write actions now require user authentication to prevent vandalism
- Data validation now enforced on the backend using MongoDB validations and 415 responses on such errors
- Implemented ESLint with git hook on commit via Husky npm package
- User action capture moved to the Schokolade API (Go / Golang).
- Major under-the-hood refactoring to improve performance and remove unnecessary code

### Release 5.2.0 (2020-11-21)

- Implemented user action capture (info forwarded to the Traffic Analyzer API).
- API location moved into a shared config file.
- App previews and skills now resize on mobile devices.
- Version displayed at top-right of page now pulls from package.json.
- Navbar word wrap issues on mobile devices resolved.
- Moniker moved off of navbar and to top of page.
- Implemented CI/CD via Bitbucket Pipelines.
- Fixed bug where All Applications showed a count of 0 apps.=.
- Java indicator added for apps on Featured Apps page.

### Release 5.1.0 (2020-08-03)

- Initial production release.
- Fixed issue where contact hyperlinks where not acting as links.
- Updated introductory page text.
- Added total app count indicator on all applications page.
- Resolved bug where isFeatured status getting set to 'false' when an app is updated.
- Increased edit skill icon opacity to improve visibility.

### Release 5.0.0 (2020-06-09)

- Development-only release.