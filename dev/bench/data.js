window.BENCHMARK_DATA = {
  "lastUpdate": 1730356440809,
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
          "id": "891a70567243eb96879680e3deea1136d9ad654c",
          "message": "test(test-plugin-ledger-connector-besu): jestify v21-sign-transaction-endpoint\n\nPrimary Changes\n----------------\npackages/cactus-test-plugin-ledger-connector-besu/src/test/typescript/\nintegration/plugin-validator-besu/v21-sign-transaction-endpoint.test.ts\n\nFixes #3565\n\nSigned-off-by: aldousalvarez <aldousss.alvarez@gmail.com>",
          "timestamp": "2024-10-22T09:54:22-07:00",
          "tree_id": "29ad48dffd9d11615f87549860c2ae5de307fe73",
          "url": "https://github.com/raynatopedrajeta/cacti/commit/891a70567243eb96879680e3deea1136d9ad654c"
        },
        "date": 1729679373381,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 585,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 690,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
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
          "id": "891a70567243eb96879680e3deea1136d9ad654c",
          "message": "test(test-plugin-ledger-connector-besu): jestify v21-sign-transaction-endpoint\n\nPrimary Changes\n----------------\npackages/cactus-test-plugin-ledger-connector-besu/src/test/typescript/\nintegration/plugin-validator-besu/v21-sign-transaction-endpoint.test.ts\n\nFixes #3565\n\nSigned-off-by: aldousalvarez <aldousss.alvarez@gmail.com>",
          "timestamp": "2024-10-22T09:54:22-07:00",
          "tree_id": "29ad48dffd9d11615f87549860c2ae5de307fe73",
          "url": "https://github.com/raynatopedrajeta/cacti/commit/891a70567243eb96879680e3deea1136d9ad654c"
        },
        "date": 1729680490311,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 667,
            "range": "±2.88%",
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
          "id": "ff842d2a59ef898e734e1424ee6f26b52ba0af9b",
          "message": "build: migrate to Typescript target of ES2022 and use Error.cause\n\nProject-wide upgrade to Typescript target of ES2022 so that we can use\nthe new Error APIs.\n\nWherever possible we should now use the new `cause`\nproperty of the built-in `Error` type in combination\nwith the `asError(unknown)` utility function:\n```typescript\nimport { asError } from \"@hyperledger/cactus-common\";\n\ntry {\n    await performSomeImportantOperation();\n} catch (ex: unknown) {\n    const cause = asError(ex);\n    throw new Error(\"Something went wrong while doing something.\", { cause });\n}\n```\nMore information about the EcmaScript proposal that made this possible:\nhttps://github.com/tc39/proposal-error-cause\n\nFixes #3592\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-24T14:11:50-07:00",
          "tree_id": "d09b64bb941820b483375a7b716c161a7edb3083",
          "url": "https://github.com/raynatopedrajeta/cacti/commit/ff842d2a59ef898e734e1424ee6f26b52ba0af9b"
        },
        "date": 1730356437967,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 590,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 706,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      }
    ]
  }
}