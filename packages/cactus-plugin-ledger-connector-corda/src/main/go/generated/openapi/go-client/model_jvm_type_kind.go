/*
Hyperledger Cacti Plugin - Connector Corda

Can perform basic tasks on a Corda ledger

API version: 2.1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-corda

import (
	"encoding/json"
	"fmt"
)

// JvmTypeKind the model 'JvmTypeKind'
type JvmTypeKind string

// List of JvmTypeKind
const (
	PRIMITIVE JvmTypeKind = "PRIMITIVE"
	REFERENCE JvmTypeKind = "REFERENCE"
)

// All allowed values of JvmTypeKind enum
var AllowedJvmTypeKindEnumValues = []JvmTypeKind{
	"PRIMITIVE",
	"REFERENCE",
}

func (v *JvmTypeKind) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := JvmTypeKind(value)
	for _, existing := range AllowedJvmTypeKindEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid JvmTypeKind", value)
}

// NewJvmTypeKindFromValue returns a pointer to a valid JvmTypeKind
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewJvmTypeKindFromValue(v string) (*JvmTypeKind, error) {
	ev := JvmTypeKind(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for JvmTypeKind: valid values are %v", v, AllowedJvmTypeKindEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v JvmTypeKind) IsValid() bool {
	for _, existing := range AllowedJvmTypeKindEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to JvmTypeKind value
func (v JvmTypeKind) Ptr() *JvmTypeKind {
	return &v
}

type NullableJvmTypeKind struct {
	value *JvmTypeKind
	isSet bool
}

func (v NullableJvmTypeKind) Get() *JvmTypeKind {
	return v.value
}

func (v *NullableJvmTypeKind) Set(val *JvmTypeKind) {
	v.value = val
	v.isSet = true
}

func (v NullableJvmTypeKind) IsSet() bool {
	return v.isSet
}

func (v *NullableJvmTypeKind) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableJvmTypeKind(val *JvmTypeKind) *NullableJvmTypeKind {
	return &NullableJvmTypeKind{value: val, isSet: true}
}

func (v NullableJvmTypeKind) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableJvmTypeKind) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

