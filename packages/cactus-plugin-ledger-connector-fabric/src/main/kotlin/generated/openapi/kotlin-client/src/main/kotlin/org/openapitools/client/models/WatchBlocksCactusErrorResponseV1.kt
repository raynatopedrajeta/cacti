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
 * Error response from WatchBlocks operation.
 *
 * @param code Error code.
 * @param errorMessage Description of the error.
 */

data class WatchBlocksCactusErrorResponseV1 (

    /* Error code. */
    @Json(name = "code")
    val code: java.math.BigDecimal,

    /* Description of the error. */
    @Json(name = "errorMessage")
    val errorMessage: kotlin.String

)

