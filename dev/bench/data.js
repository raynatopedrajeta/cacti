window.BENCHMARK_DATA = {
  "lastUpdate": 1721985189524,
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
          "id": "9c4d9be8ac7a1608bf15cbaf887ed0836c02f747",
          "message": "build(api-client): generate go client\n\n    Primary Changes\n    ----------------\n    1. Updated package.json file for packages to\n       include the new codegen script\n    2. Added a new dep, replace for string\n       manupulation in package.json\n\nFixes #393\n\nSigned-off-by: jagpreetsinghsasan <jagpreet.singh.sasan@accenture.com>",
          "timestamp": "2024-07-25T14:06:22-07:00",
          "tree_id": "4db60a87b0df4cca6a76f559d461c607d148f604",
          "url": "https://github.com/raynatopedrajeta/cacti/commit/9c4d9be8ac7a1608bf15cbaf887ed0836c02f747"
        },
        "date": 1721985187594,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 590,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 360,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      }
    ]
  }
}