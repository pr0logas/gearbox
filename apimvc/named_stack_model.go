package apimvc

import (
	"fmt"
	"gearbox/apimodeler"
	"gearbox/gearbox"
	"gearbox/gears"
	"gearbox/gearspec"
	"gearbox/global"
	"gearbox/only"
	"gearbox/status"
	"gearbox/status/is"
	"gearbox/types"
	"strings"
)

const NamedStackType = "stack"

var NilNamedStackModel = (*NamedStackModel)(nil)
var _ apimodeler.Itemer = NilNamedStackModel

type NamedStackModelMap map[types.Stackname]*NamedStackModel
type NamedStackModels []*NamedStackModel

type NamedStackModel struct {
	Authority  types.AuthorityDomain `json:"authority"`
	Stackname  types.Stackname       `json:"stackname"`
	Members    gearspec.Identifiers  `json:"members,omitempty"`
	ServiceMap interface{}           `json:"services,omitempty"`
}

func NewModelFromGearsNamedStack(ctx *apimodeler.Context, gns *gears.NamedStack) (ns *NamedStackModel, sts status.Status) {
	for range only.Once {
		var gsids gearspec.Identifiers
		if ctx.GetResponseType() == global.ItemResponse {
			gsids, sts = gns.GetGearspecIds()
		}
		if is.Error(sts) {
			break
		}
		ns = &NamedStackModel{
			Authority: gns.Authority,
			Stackname: gns.Stackname,
			Members:   gsids,
			//ServiceModelMap: gns.RoleServicesMap,
		}
	}
	return ns, sts
}

func NewNamedStack(ns *gears.NamedStack) *NamedStackModel {
	return &NamedStackModel{
		Authority:  ns.Authority,
		Stackname:  ns.Stackname,
		Members:    make(gearspec.Identifiers, 0),
		ServiceMap: newServiceMap(ns.RoleServicesMap),
	}
}

func (me *NamedStackModel) GetItemLinkMap(*apimodeler.Context) (apimodeler.LinkMap, status.Status) {
	return apimodeler.LinkMap{}, nil
}

func (me *NamedStackModel) GetType() apimodeler.ItemType {
	return NamedStackType
}

func (me *NamedStackModel) GetFullStackname() types.Stackname {
	return types.Stackname(me.GetId())
}

func (me *NamedStackModel) GetId() apimodeler.ItemId {
	return apimodeler.ItemId(fmt.Sprintf("%s/%s", me.Authority, me.Stackname))
}

func (me *NamedStackModel) SetId(itemid apimodeler.ItemId) (sts status.Status) {
	for range only.Once {
		parts := strings.Split(string(itemid), "/")
		if len(parts) < 2 {
			sts = status.Fail(&status.Args{
				Message: fmt.Sprintf("stack ID '%s' missing '/'", itemid),
			})
			break
		} else if len(parts) > 2 {
			sts = status.Fail(&status.Args{
				Message: fmt.Sprintf("stack ID '%s' has too many '/'", itemid),
			})
			break
		}
		me.Authority = types.AuthorityDomain(parts[0])
		me.Stackname = types.Stackname(parts[1])
	}
	return sts
}

func (me *NamedStackModel) GetItem() (apimodeler.Itemer, status.Status) {
	return me, nil
}

func MakeGearboxStack(gb gearbox.Gearboxer, ns *NamedStackModel) (gbns *gears.NamedStack, sts status.Status) {
	//	gbns = gears.NewNamedStack(gb.GetGears(), types.StackId(ns.GetId()))
	gbns = gears.NewNamedStack(types.StackId(ns.GetId()))
	sts = gbns.Refresh()
	return gbns, sts
}

func (me *NamedStackModel) GetRelatedItems(ctx *apimodeler.Context, item apimodeler.Itemer) (list apimodeler.List, sts status.Status) {
	return make(apimodeler.List, 0), sts
}