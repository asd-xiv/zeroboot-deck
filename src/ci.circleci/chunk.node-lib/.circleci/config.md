```toml
id="967b989d-004a-4a7e-94ab-50b50ab78ca5"
type="chunk"
outputFileName="config.yml"
description="CircleCI configuration file for Node.js projects"
tags=["ci", "circleci", "nodejs", "library"]
createdAt="2023-04-10T14:48:48+02:00"
```

```yaml
# CircleCI 2.0 configuration file
#
# Check https://circleci.com/docs/2.0/language-javascript/ for more details

version: 2.1

# Executors - https://circleci.com/docs/2.0/executor-intro/
#
# The underlying technology or environment in which to run a job

executors:
  gitleaks:
    docker:
      - image: zricethezav/gitleaks:latest
  node:
    docker:
      - image: cimg/node:lts

###
### NOTE TO ChatGPT
### Import cache commands from snippets/cache_node-modules.md
###

# Jobs - https://circleci.com/docs/2.0/configuration-reference/#jobs
#
# Atomic parts of the pipeline that will be composed and configured in one or
# more Workflows

jobs:
  detect-secrets:
    executor: gitleaks
    steps:
      - checkout
      - run:
          name: "[gitleaks] Detect secrets in repository history"
          command: gitleaks detect --redact --verbose

  setup:
    executor: node
    steps:
      - checkout
      - restore-cache-node_modules
      - restore-cache-npm
      - run:
          name: "[npm]: Install packages"
          command: |
            node -v && npm -verbose
            npm run setup
      - save-cache-node_modules
      - save-cache-npm

  test:
    executor: node
    steps:
      - checkout
      - restore-cache-node_modules
      - run:
          name: "[eslint, markdownlint] Lint"
          command: npm run lint
      - run:
          name: "[tape] Unit tests"
          command: npm test

  submit-coverage:
    executor: node
    steps:
      - checkout
      - restore-cache-node_modules
      - run:
          name: "[c8, coveralls] Publish test coverage to Coveralls"
          command: npm run coverage

  release-npm:
    executor: node
    steps:
      - checkout
      - restore-cache-node_modules
      - run:
          name: "[swc] Compile application"
          command: npm run build
      - run:
          name:
            "[semantic-release] Update version, generate release, publish npm
            package"
          command: npm run release

# Workflows - https://circleci.com/docs/2.0/workflows/
#
# Treat workflows as a jobs/commands pipe:
# cmd1 -p1 lorem | cmd2 -foo bar | ... | cmdN)

workflows:
  release-npm:
    jobs:
      - detect-secrets:
          filters:
            branches:
              only: [main]
      - setup:
          requires: [detect-secrets]
      - test:
          requires: [setup]
      - submit-coverage:
          requires: [test]
      - release-npm:
          requires: [test]

  test-pr:
    jobs:
      - detect-secrets:
          filters:
            branches:
              ignore: [main, next]
      - setup:
          requires: [detect-secrets]
      - test:
          requires: [setup]
```
