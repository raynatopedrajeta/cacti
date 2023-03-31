/**
 * Hyperledger Cactus Plugin - Object Store - IPFS 
 *
 * Contains/describes the Hyperledger Cactus Object Store IPFS plugin.
 *
 * The version of the OpenAPI document: 0.2.0
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
 * 
 *
 * @param key The key for the entry to set in the object store.
 * @param `value` The value that will be associated with the key in the object store.
 */

data class SetObjectRequestV1 (

    /* The key for the entry to set in the object store. */
    @Json(name = "key")
    val key: kotlin.String,

    /* The value that will be associated with the key in the object store. */
    @Json(name = "value")
    val `value`: kotlin.String

)

