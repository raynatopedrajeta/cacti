window.BENCHMARK_DATA = {
  "lastUpdate": 1721021888637,
  "repoUrl": "https://github.com/raynatopedrajeta/cacti",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "aldousss.alvarez@gmail.com",
            "name": "aldousalvarez",
            "username": "aldousalvarez"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "c7fce889866f0cbfd8868d5c8293c9c3ade54ef3",
          "message": "ci(coverage): add total typescript code coverage statistics\n\nPrimary Changes\n----------------\n1. Updated the ci.yaml and ci.sh to introduce total typescript code coverage\n   statistics using jest and istanbul-merge\n2. Added Codecov to cspell.json\n\nFixes #2661\n\nSigned-off-by: aldousalvarez <aldousss.alvarez@gmail.com>",
          "timestamp": "2024-07-13T11:29:03-07:00",
          "tree_id": "518091d13dd3d4010c8db1d0a6c07d89072c7edf",
          "url": "https://github.com/raynatopedrajeta/cacti/commit/c7fce889866f0cbfd8868d5c8293c9c3ade54ef3"
        },
        "date": 1721021887405,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 582,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 352,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      }
    ]
  }
}