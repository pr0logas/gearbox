package apimodeler

import (
	"gearbox/status"
	"gearbox/types"
)

type RootDocumentor interface {
	ResponseTypeGetter
	RootDocumentGetter
	ResponseItemAdder
	RelatedSetter
	MetaAdder
	LinkAdder
	LinksAdder
	ErrorsSetter
}
type ErrorsSetter interface {
	SetErrors(error)
}
type ResponseItemAdder interface {
	AddResponseItem(ItemModeler) status.Status
}
type ResponseTypeGetter interface {
	GetResponseType() types.ResponseType
}
type RootDocumentGetter interface {
	GetRootDocument() interface{}
}
type RelatedSetter interface {
	SetRelated(*Context, List) status.Status
}
type ResponseHeaderSetter interface {
	SetResponseHeader(key, value string)
}