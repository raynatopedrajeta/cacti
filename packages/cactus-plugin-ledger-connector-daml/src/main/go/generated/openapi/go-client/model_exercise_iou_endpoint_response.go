/*
Hyperledger Cacti Plugin - Connector DAML

Can perform basic tasks on a DAML ledger

API version: 2.0.0-rc.3
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-daml

import (
	"encoding/json"
)

// checks if the ExerciseIOUEndpointResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExerciseIOUEndpointResponse{}

// ExerciseIOUEndpointResponse This method is the request for creating a simple IOU contract.
type ExerciseIOUEndpointResponse struct {
	CompletionOffset *string `json:"completionOffset,omitempty"`
	Events []QueryIOUEndpointResponseEventsInner `json:"events,omitempty"`
}

// NewExerciseIOUEndpointResponse instantiates a new ExerciseIOUEndpointResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExerciseIOUEndpointResponse() *ExerciseIOUEndpointResponse {
	this := ExerciseIOUEndpointResponse{}
	return &this
}

// NewExerciseIOUEndpointResponseWithDefaults instantiates a new ExerciseIOUEndpointResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExerciseIOUEndpointResponseWithDefaults() *ExerciseIOUEndpointResponse {
	this := ExerciseIOUEndpointResponse{}
	return &this
}

// GetCompletionOffset returns the CompletionOffset field value if set, zero value otherwise.
func (o *ExerciseIOUEndpointResponse) GetCompletionOffset() string {
	if o == nil || IsNil(o.CompletionOffset) {
		var ret string
		return ret
	}
	return *o.CompletionOffset
}

// GetCompletionOffsetOk returns a tuple with the CompletionOffset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExerciseIOUEndpointResponse) GetCompletionOffsetOk() (*string, bool) {
	if o == nil || IsNil(o.CompletionOffset) {
		return nil, false
	}
	return o.CompletionOffset, true
}

// HasCompletionOffset returns a boolean if a field has been set.
func (o *ExerciseIOUEndpointResponse) HasCompletionOffset() bool {
	if o != nil && !IsNil(o.CompletionOffset) {
		return true
	}

	return false
}

// SetCompletionOffset gets a reference to the given string and assigns it to the CompletionOffset field.
func (o *ExerciseIOUEndpointResponse) SetCompletionOffset(v string) {
	o.CompletionOffset = &v
}

// GetEvents returns the Events field value if set, zero value otherwise.
func (o *ExerciseIOUEndpointResponse) GetEvents() []QueryIOUEndpointResponseEventsInner {
	if o == nil || IsNil(o.Events) {
		var ret []QueryIOUEndpointResponseEventsInner
		return ret
	}
	return o.Events
}

// GetEventsOk returns a tuple with the Events field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExerciseIOUEndpointResponse) GetEventsOk() ([]QueryIOUEndpointResponseEventsInner, bool) {
	if o == nil || IsNil(o.Events) {
		return nil, false
	}
	return o.Events, true
}

// HasEvents returns a boolean if a field has been set.
func (o *ExerciseIOUEndpointResponse) HasEvents() bool {
	if o != nil && !IsNil(o.Events) {
		return true
	}

	return false
}

// SetEvents gets a reference to the given []QueryIOUEndpointResponseEventsInner and assigns it to the Events field.
func (o *ExerciseIOUEndpointResponse) SetEvents(v []QueryIOUEndpointResponseEventsInner) {
	o.Events = v
}

func (o ExerciseIOUEndpointResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExerciseIOUEndpointResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CompletionOffset) {
		toSerialize["completionOffset"] = o.CompletionOffset
	}
	if !IsNil(o.Events) {
		toSerialize["events"] = o.Events
	}
	return toSerialize, nil
}

type NullableExerciseIOUEndpointResponse struct {
	value *ExerciseIOUEndpointResponse
	isSet bool
}

func (v NullableExerciseIOUEndpointResponse) Get() *ExerciseIOUEndpointResponse {
	return v.value
}

func (v *NullableExerciseIOUEndpointResponse) Set(val *ExerciseIOUEndpointResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableExerciseIOUEndpointResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableExerciseIOUEndpointResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExerciseIOUEndpointResponse(val *ExerciseIOUEndpointResponse) *NullableExerciseIOUEndpointResponse {
	return &NullableExerciseIOUEndpointResponse{value: val, isSet: true}
}

func (v NullableExerciseIOUEndpointResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExerciseIOUEndpointResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


