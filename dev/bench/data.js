window.BENCHMARK_DATA = {
  "lastUpdate": 1717747498191,
  "repoUrl": "https://github.com/raynatopedrajeta/cacti",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ruzell.vince.aquino@accenture.com",
            "name": "ruzell22",
            "username": "ruzell22"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "e6d5d88fd33b2078035447bc0e452f3d862e0e68",
          "message": "feat(actionlint): fix the errors produced by the ActionLint tool\n\nPrimary Changes\n---------------\n\n1. Fix errors found by Actionlint on multiple yaml files\n2. Temporarily removed test_weaver*.yaml, weaver_deploy*.yml, weaver/ directory\nin ActionLint\n\nfixes: #2651\n\nSigned-off-by: ruzell22 <ruzell.vince.aquino@accenture.com>",
          "timestamp": "2024-05-23T11:44:44-07:00",
          "tree_id": "91f5f83727dd6a7b34d2ce2c7031ac542adfbed8",
          "url": "https://github.com/raynatopedrajeta/cacti/commit/e6d5d88fd33b2078035447bc0e452f3d862e0e68"
        },
        "date": 1716539273879,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 573,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 353,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ruzell.vince.aquino@accenture.com",
            "name": "ruzell22",
            "username": "ruzell22"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "e6d5d88fd33b2078035447bc0e452f3d862e0e68",
          "message": "feat(actionlint): fix the errors produced by the ActionLint tool\n\nPrimary Changes\n---------------\n\n1. Fix errors found by Actionlint on multiple yaml files\n2. Temporarily removed test_weaver*.yaml, weaver_deploy*.yml, weaver/ directory\nin ActionLint\n\nfixes: #2651\n\nSigned-off-by: ruzell22 <ruzell.vince.aquino@accenture.com>",
          "timestamp": "2024-05-23T11:44:44-07:00",
          "tree_id": "91f5f83727dd6a7b34d2ce2c7031ac542adfbed8",
          "url": "https://github.com/raynatopedrajeta/cacti/commit/e6d5d88fd33b2078035447bc0e452f3d862e0e68"
        },
        "date": 1716540478366,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 730,
            "range": "±2.65%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter.somogyvari@accenture.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "13f457c82fddfef513ad6fff5e8a75648682a851",
          "message": "build(yarn): add plugin-interactive-filter to manage deps per-package\n\nThis plugin allows to resolve some CVEs more surgically that are found in indirect\ndependencies which are difficult to upgrade without triggering a large change\nneeded and potential migrations, breaking changes to the public APIs of packages.\n\nThe reason why the above problem happens is because `yarn up` and `yarn up -R`\nare blunt instruments when it comes to managing a monorepo such as ours:\nThey do their upgrade all-or-nothing, e.g. you can't upgrade a single dependency\nin a single monorepo package, you must upgrade the dependency project-wide\nwith the mentioned tools, but sometimes we need to perform the upgrade just in a\nsingle monorepo package.\n\nFor example to the above, about 20 packages use web3 but only about 5 of those\nare using v4.x versions of web3. A new CVE came out covering v4.1.x and so\nI needed to upgrade web3 only in those packages where web3 was already above\nv4.0.0 and leave the older ones alone (surgical upgrades).\n\nTo accomplish this I've found no way to do it with stock yarn CLI commands, but\nsomeone who had the exact same problem had written a plugin for solving it.\n\nThe original issue reported to yarn with the same problem we are having:\nhttps://github.com/yarnpkg/berry/issues/2591\n\nThe repository where the plugin resides that we are adding in this commit in\norder to remediate the problem of lack of surgical (per-package) upgrades:\nhttps://github.com/eyolas/yarn-plugin-interractive-filter\n\nThe original CVE that I was investigating as I stumbled upon the solution:\n- https://github.com/hyperledger/cacti/pull/3264\n- https://github.com/hyperledger/cacti/security/dependabot/987\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-06-06T10:40:27-07:00",
          "tree_id": "977482c9f5dc0d8760dc86424c55ff05b34ca170",
          "url": "https://github.com/raynatopedrajeta/cacti/commit/13f457c82fddfef513ad6fff5e8a75648682a851"
        },
        "date": 1717746183482,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 576,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 360,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter.somogyvari@accenture.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "13f457c82fddfef513ad6fff5e8a75648682a851",
          "message": "build(yarn): add plugin-interactive-filter to manage deps per-package\n\nThis plugin allows to resolve some CVEs more surgically that are found in indirect\ndependencies which are difficult to upgrade without triggering a large change\nneeded and potential migrations, breaking changes to the public APIs of packages.\n\nThe reason why the above problem happens is because `yarn up` and `yarn up -R`\nare blunt instruments when it comes to managing a monorepo such as ours:\nThey do their upgrade all-or-nothing, e.g. you can't upgrade a single dependency\nin a single monorepo package, you must upgrade the dependency project-wide\nwith the mentioned tools, but sometimes we need to perform the upgrade just in a\nsingle monorepo package.\n\nFor example to the above, about 20 packages use web3 but only about 5 of those\nare using v4.x versions of web3. A new CVE came out covering v4.1.x and so\nI needed to upgrade web3 only in those packages where web3 was already above\nv4.0.0 and leave the older ones alone (surgical upgrades).\n\nTo accomplish this I've found no way to do it with stock yarn CLI commands, but\nsomeone who had the exact same problem had written a plugin for solving it.\n\nThe original issue reported to yarn with the same problem we are having:\nhttps://github.com/yarnpkg/berry/issues/2591\n\nThe repository where the plugin resides that we are adding in this commit in\norder to remediate the problem of lack of surgical (per-package) upgrades:\nhttps://github.com/eyolas/yarn-plugin-interractive-filter\n\nThe original CVE that I was investigating as I stumbled upon the solution:\n- https://github.com/hyperledger/cacti/pull/3264\n- https://github.com/hyperledger/cacti/security/dependabot/987\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-06-06T10:40:27-07:00",
          "tree_id": "977482c9f5dc0d8760dc86424c55ff05b34ca170",
          "url": "https://github.com/raynatopedrajeta/cacti/commit/13f457c82fddfef513ad6fff5e8a75648682a851"
        },
        "date": 1717747496461,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 739,
            "range": "±2.73%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      }
    ]
  }
}