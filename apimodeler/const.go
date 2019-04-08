package apimodeler

const (
	CharsetUTF8          = "charset=UTF-8"
	DcSchema        Link = "http://purl.org/dc/elements/1.1/"
	DcTermsSchema   Link = "http://purl.org/dc/terms/"
	DefaultLanguage      = "en-US"
)

type RelType string

const (
	SchemaDcRelType      RelType = "schema.DC"
	SchemaDcTermsRelType RelType = "schema.DCTERMS"
	SelfRelType          RelType = "self"
	RelatedRelType       RelType = "related"
	FirstRelType         RelType = "first"
	LastRelType          RelType = "last"
	PrevRelType          RelType = "prev"
	NextRelType          RelType = "next"
	ListRelType          RelType = "List"
	ItemRelType          RelType = "item"
)

type Metaname string

const (
	MetaDcLanguage        Metaname = "DC.language"
	MetaDcType            Metaname = "DC.type"
	MetaDcFormat          Metaname = "DC.format"
	MetaDcCreator         Metaname = "DC.creator"
	MetaDcExtent          Metaname = "DCTERMS.extent"
	MetaDcTermsIdentifier Metaname = "DCTERMS.identifier"
)