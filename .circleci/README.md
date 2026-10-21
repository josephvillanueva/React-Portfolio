# CI migration parity

PR #38 replaces `.github/workflows/ci.yml` with `.circleci/config.yml`.

## Verified coverage

| Previous GitHub Actions check | CircleCI replacement |
| --- | --- |
| Checkout source | `checkout` |
| Node.js 22 | `cimg/node:22.22` |
| Locked dependency installation: `npm ci` | `npm ci` |
| Lint: `npm run lint` | `npm run lint` |
| Production build: `npm run build` | `npm run build` |
| Pull requests and pushes to main | Unfiltered `ci` workflow, verified on this PR branch; includes main |
| npm download cache | Cache of `~/.npm` keyed by architecture and lockfile checksum |

On 2026-10-21, commit `b0248a4c5da07147800a45438a7865f0ce6a11bf`
reported successful GitHub Actions `check` and `ci/circleci: check` statuses:

- GitHub Actions: https://github.com/josephvillanueva/React-Portfolio/actions/runs/39625778146/job/119310513703
- CircleCI pipeline 1: https://circleci.com/gh/josephvillanueva/React-Portfolio/1

CircleCI also runs on branch pushes, extending the old workflow's triggers.
Its config uses the small resource class and no contexts or production secrets.
Billing and project-level trigger settings are not established by the YAML.

Local retirement validation passed `npm ci --no-audit --no-fund`,
`npm run lint`, `npm run build`, and `git diff --check` in a fresh temporary
clone on Node.js 23.11.0. The build emitted a non-failing bundle-size warning.
The Node.js 22 CI evidence above remains the runtime parity evidence.

## Security and automation boundaries

The base branch at `206c96eee8984a0f43072c937a21424595967c3f` contains only
the CI workflow above. It has no CodeQL, dependency audit, test, or deployment
workflow to migrate. The GitHub workflow inventory also lists the managed
Dependabot Updates workflow, which this PR does not change.

GitHub's CodeQL default-setup API reported `not-configured`; the code-scanning
analyses API reported `no analysis found`. Lint and build are not substitutes
for CodeQL. This PR removes no CodeQL coverage and does not introduce a new
security-scanning service.

Deployment scripts and external deployment integrations are unchanged.
The branch-protection endpoint reported `Branch not protected` for main.
Repository rulesets could not be inspected with the current credentials;
any external requirement for the retired GitHub Actions check must be reviewed
before merging. No repository settings are changed by this PR.
