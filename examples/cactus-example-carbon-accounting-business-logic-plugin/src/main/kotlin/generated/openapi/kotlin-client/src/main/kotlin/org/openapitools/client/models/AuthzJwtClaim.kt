/**
 * Hyperledger Cactus Example - Carbon Accounting App
 *
 * Demonstrates how a business use case can be satisfied with Cactus when multiple distinct ledgers are involved.
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
 * Stores global constants related to the authorization of the application. Specifically enumerates the claims to validate for as per RFC 7519, section 4.1. See: https://tools.ietf.org/html/rfc7519#section-4.1
 *
 * Values: iss
 */

enum class AuthzJwtClaim(val value: kotlin.String) {

    @Json(name = "Hyperledger Labs - Carbon Accounting Tool")
    iss("Hyperledger Labs - Carbon Accounting Tool");

    /**
     * Override toString() to avoid using the enum variable name as the value, and instead use
     * the actual value defined in the API spec file.
     *
     * This solves a problem when the variable name and its value are different, and ensures that
     * the client sends the correct enum values to the server always.
     */
    override fun toString(): String = value

    companion object {
        /**
         * Converts the provided [data] to a [String] on success, null otherwise.
         */
        fun encode(data: Any?): kotlin.String? = if (data is AuthzJwtClaim) "$data" else null

        /**
         * Returns a valid [AuthzJwtClaim] for [data], null otherwise.
         */
        fun decode(data: Any?): AuthzJwtClaim? = data?.let {
          val normalizedData = "$it".lowercase()
          values().firstOrNull { value ->
            it == value || normalizedData == "$value".lowercase()
          }
        }
    }
}

