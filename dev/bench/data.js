window.BENCHMARK_DATA = {
  "lastUpdate": 1721385481528,
  "repoUrl": "https://github.com/raynatopedrajeta/cacti",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jagpreet.singh.sasan@accenture.com",
            "name": "jagpreetsinghsasan",
            "username": "jagpreetsinghsasan"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "f5b60b4d25acc7a4bc53f3b9b87433b18a5d9153",
          "message": "feat(besu): remove hard dependency on keychain\n\n    Primary Changes\n    ---------------\n    1. Updated besu connector to remove hard\n       dependency on keychain\n\n    Changes required to incorporate 1)\n    ----------------------------------\n    2. Updated openapi.tpl.json to have non-keychain\n       endpoints\n    3. Generated code and updated web-services for them\n    4. Updated transact( ) and deployContract( ) fx\n    5. Added deployContractNoKeychain( ) fx\n\nFixes #963\n\nSigned-off-by: jagpreetsinghsasan <jagpreet.singh.sasan@accenture.com>",
          "timestamp": "2024-07-18T06:23:39-07:00",
          "tree_id": "dc4c5644885ea07f65da728b85471c59b4c6c9f5",
          "url": "https://github.com/raynatopedrajeta/cacti/commit/f5b60b4d25acc7a4bc53f3b9b87433b18a5d9153"
        },
        "date": 1721313466907,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 563,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 349,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michal.bajer@fujitsu.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "committer": {
            "email": "9387513+outSH@users.noreply.github.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "distinct": true,
          "id": "c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233",
          "message": "feat(persistence-fabric): rewrite the plugin\n\n- Rewrite fabric persistence plugin to match persistence ethereum\n  plugin methods and behavior.\n- Change DB schema for persistence.\n- Add tests and sample data to the new plugin. Add them to project CI.\n\nDepends on #3298\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-07-18T22:52:54+02:00",
          "tree_id": "0626c0274134b1741d7760598515ec09ec8bf02e",
          "url": "https://github.com/raynatopedrajeta/cacti/commit/c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233"
        },
        "date": 1721385478820,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 581,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 356,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      }
    ]
  }
}