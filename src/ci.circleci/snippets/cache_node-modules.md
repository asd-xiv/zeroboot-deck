```toml
id="0ff5abfb-f878-49a4-89b5-a1205ca43609"
type="snippet"
description="Commands for caching \"node_modules\" and \".npm\" folders"
tags=["ci", "circleci", "cache", "node_modules", "npm"]
createdAt="2023-04-10T14:43:17+02:00"
```

```yaml
# Commands - https://circleci.com/docs/2.0/configuration-reference/#commands
#
# A command defines a sequence of steps as a map to be executed in a job,
# enabling you to reuse a single command definition across multiple jobs

commands:
  restore-cache-node_modules:
    steps:
      - restore_cache:
          name: "[cache] Restore \"node_modules\""
          keys:
            - &CACHE-KEY-NODE_MODULES v1-node_modules-{{ checksum "package-lock.json" }}
            - v1-node_modules-
  save-cache-node_modules:
    steps:
      - save_cache:
          name: "[cache] Save \"node_modules\""
          key: *CACHE-KEY-NODE_MODULES
          paths:
            - node_modules
  restore-cache-npm:
    steps:
      - restore_cache:
          name: "[cache] Restore \".npm\""
          keys:
            - &CACHE-KEY-NPM v1-npm-{{ checksum "package-lock.json" }}
            - v1-npm-
  save-cache-npm:
    steps:
      - save_cache:
          name: "[cache] Save \".npm\""
          key: *CACHE-KEY-NPM
          paths:
            - .npm
```
