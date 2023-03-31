/**
 * Hyperledger Cactus Plugin - Connector Fabric
 *
 * Can perform basic tasks on a fabric ledger
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models


import com.squareup.moshi.Json

/**
 * When skipDecode is false (default) then decoded block object is returned.
 *
 * @param decodedBlock Full hyperledger fabric block data.
 */

data class GetBlockResponseDecodedV1 (

    /* Full hyperledger fabric block data. */
    @Json(name = "decodedBlock")
    val decodedBlock: kotlin.Any?

)

