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

// checks if the CreateIOUEndpointResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreateIOUEndpointResponse{}

// CreateIOUEndpointResponse This method is the response for creating a simple IOU contract.
type CreateIOUEndpointResponse struct {
	AgreementText *string `json:"agreementText,omitempty"`
	CompletionOffset *string `json:"completionOffset,omitempty"`
	ContractId *string `json:"contractId,omitempty"`
	Observers []*string `json:"observers,omitempty"`
	TemplateId *string `json:"templateId,omitempty"`
	Signatories []*string `json:"signatories,omitempty"`
	Payload *CreateIOUEndpointRequestPayload `json:"payload,omitempty"`
}

// NewCreateIOUEndpointResponse instantiates a new CreateIOUEndpointResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateIOUEndpointResponse() *CreateIOUEndpointResponse {
	this := CreateIOUEndpointResponse{}
	return &this
}

// NewCreateIOUEndpointResponseWithDefaults instantiates a new CreateIOUEndpointResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateIOUEndpointResponseWithDefaults() *CreateIOUEndpointResponse {
	this := CreateIOUEndpointResponse{}
	return &this
}

// GetAgreementText returns the AgreementText field value if set, zero value otherwise.
func (o *CreateIOUEndpointResponse) GetAgreementText() string {
	if o == nil || IsNil(o.AgreementText) {
		var ret string
		return ret
	}
	return *o.AgreementText
}

// GetAgreementTextOk returns a tuple with the AgreementText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateIOUEndpointResponse) GetAgreementTextOk() (*string, bool) {
	if o == nil || IsNil(o.AgreementText) {
		return nil, false
	}
	return o.AgreementText, true
}

// HasAgreementText returns a boolean if a field has been set.
func (o *CreateIOUEndpointResponse) HasAgreementText() bool {
	if o != nil && !IsNil(o.AgreementText) {
		return true
	}

	return false
}

// SetAgreementText gets a reference to the given string and assigns it to the AgreementText field.
func (o *CreateIOUEndpointResponse) SetAgreementText(v string) {
	o.AgreementText = &v
}

// GetCompletionOffset returns the CompletionOffset field value if set, zero value otherwise.
func (o *CreateIOUEndpointResponse) GetCompletionOffset() string {
	if o == nil || IsNil(o.CompletionOffset) {
		var ret string
		return ret
	}
	return *o.CompletionOffset
}

// GetCompletionOffsetOk returns a tuple with the CompletionOffset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateIOUEndpointResponse) GetCompletionOffsetOk() (*string, bool) {
	if o == nil || IsNil(o.CompletionOffset) {
		return nil, false
	}
	return o.CompletionOffset, true
}

// HasCompletionOffset returns a boolean if a field has been set.
func (o *CreateIOUEndpointResponse) HasCompletionOffset() bool {
	if o != nil && !IsNil(o.CompletionOffset) {
		return true
	}

	return false
}

// SetCompletionOffset gets a reference to the given string and assigns it to the CompletionOffset field.
func (o *CreateIOUEndpointResponse) SetCompletionOffset(v string) {
	o.CompletionOffset = &v
}

// GetContractId returns the ContractId field value if set, zero value otherwise.
func (o *CreateIOUEndpointResponse) GetContractId() string {
	if o == nil || IsNil(o.ContractId) {
		var ret string
		return ret
	}
	return *o.ContractId
}

// GetContractIdOk returns a tuple with the ContractId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateIOUEndpointResponse) GetContractIdOk() (*string, bool) {
	if o == nil || IsNil(o.ContractId) {
		return nil, false
	}
	return o.ContractId, true
}

// HasContractId returns a boolean if a field has been set.
func (o *CreateIOUEndpointResponse) HasContractId() bool {
	if o != nil && !IsNil(o.ContractId) {
		return true
	}

	return false
}

// SetContractId gets a reference to the given string and assigns it to the ContractId field.
func (o *CreateIOUEndpointResponse) SetContractId(v string) {
	o.ContractId = &v
}

// GetObservers returns the Observers field value if set, zero value otherwise.
func (o *CreateIOUEndpointResponse) GetObservers() []*string {
	if o == nil || IsNil(o.Observers) {
		var ret []*string
		return ret
	}
	return o.Observers
}

// GetObserversOk returns a tuple with the Observers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateIOUEndpointResponse) GetObserversOk() ([]*string, bool) {
	if o == nil || IsNil(o.Observers) {
		return nil, false
	}
	return o.Observers, true
}

// HasObservers returns a boolean if a field has been set.
func (o *CreateIOUEndpointResponse) HasObservers() bool {
	if o != nil && !IsNil(o.Observers) {
		return true
	}

	return false
}

// SetObservers gets a reference to the given []*string and assigns it to the Observers field.
func (o *CreateIOUEndpointResponse) SetObservers(v []*string) {
	o.Observers = v
}

// GetTemplateId returns the TemplateId field value if set, zero value otherwise.
func (o *CreateIOUEndpointResponse) GetTemplateId() string {
	if o == nil || IsNil(o.TemplateId) {
		var ret string
		return ret
	}
	return *o.TemplateId
}

// GetTemplateIdOk returns a tuple with the TemplateId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateIOUEndpointResponse) GetTemplateIdOk() (*string, bool) {
	if o == nil || IsNil(o.TemplateId) {
		return nil, false
	}
	return o.TemplateId, true
}

// HasTemplateId returns a boolean if a field has been set.
func (o *CreateIOUEndpointResponse) HasTemplateId() bool {
	if o != nil && !IsNil(o.TemplateId) {
		return true
	}

	return false
}

// SetTemplateId gets a reference to the given string and assigns it to the TemplateId field.
func (o *CreateIOUEndpointResponse) SetTemplateId(v string) {
	o.TemplateId = &v
}

// GetSignatories returns the Signatories field value if set, zero value otherwise.
func (o *CreateIOUEndpointResponse) GetSignatories() []*string {
	if o == nil || IsNil(o.Signatories) {
		var ret []*string
		return ret
	}
	return o.Signatories
}

// GetSignatoriesOk returns a tuple with the Signatories field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateIOUEndpointResponse) GetSignatoriesOk() ([]*string, bool) {
	if o == nil || IsNil(o.Signatories) {
		return nil, false
	}
	return o.Signatories, true
}

// HasSignatories returns a boolean if a field has been set.
func (o *CreateIOUEndpointResponse) HasSignatories() bool {
	if o != nil && !IsNil(o.Signatories) {
		return true
	}

	return false
}

// SetSignatories gets a reference to the given []*string and assigns it to the Signatories field.
func (o *CreateIOUEndpointResponse) SetSignatories(v []*string) {
	o.Signatories = v
}

// GetPayload returns the Payload field value if set, zero value otherwise.
func (o *CreateIOUEndpointResponse) GetPayload() CreateIOUEndpointRequestPayload {
	if o == nil || IsNil(o.Payload) {
		var ret CreateIOUEndpointRequestPayload
		return ret
	}
	return *o.Payload
}

// GetPayloadOk returns a tuple with the Payload field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateIOUEndpointResponse) GetPayloadOk() (*CreateIOUEndpointRequestPayload, bool) {
	if o == nil || IsNil(o.Payload) {
		return nil, false
	}
	return o.Payload, true
}

// HasPayload returns a boolean if a field has been set.
func (o *CreateIOUEndpointResponse) HasPayload() bool {
	if o != nil && !IsNil(o.Payload) {
		return true
	}

	return false
}

// SetPayload gets a reference to the given CreateIOUEndpointRequestPayload and assigns it to the Payload field.
func (o *CreateIOUEndpointResponse) SetPayload(v CreateIOUEndpointRequestPayload) {
	o.Payload = &v
}

func (o CreateIOUEndpointResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreateIOUEndpointResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AgreementText) {
		toSerialize["agreementText"] = o.AgreementText
	}
	if !IsNil(o.CompletionOffset) {
		toSerialize["completionOffset"] = o.CompletionOffset
	}
	if !IsNil(o.ContractId) {
		toSerialize["contractId"] = o.ContractId
	}
	if !IsNil(o.Observers) {
		toSerialize["observers"] = o.Observers
	}
	if !IsNil(o.TemplateId) {
		toSerialize["templateId"] = o.TemplateId
	}
	if !IsNil(o.Signatories) {
		toSerialize["signatories"] = o.Signatories
	}
	if !IsNil(o.Payload) {
		toSerialize["payload"] = o.Payload
	}
	return toSerialize, nil
}

type NullableCreateIOUEndpointResponse struct {
	value *CreateIOUEndpointResponse
	isSet bool
}

func (v NullableCreateIOUEndpointResponse) Get() *CreateIOUEndpointResponse {
	return v.value
}

func (v *NullableCreateIOUEndpointResponse) Set(val *CreateIOUEndpointResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateIOUEndpointResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateIOUEndpointResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateIOUEndpointResponse(val *CreateIOUEndpointResponse) *NullableCreateIOUEndpointResponse {
	return &NullableCreateIOUEndpointResponse{value: val, isSet: true}
}

func (v NullableCreateIOUEndpointResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateIOUEndpointResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


