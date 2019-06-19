package daemon

import (
	"gearbox/eventbroker/channels"
	"gearbox/eventbroker/messages"
	"gearbox/eventbroker/network"
	"gearbox/eventbroker/ospaths"
	"gearbox/eventbroker/states"
	"gearbox/eventbroker/tasks"
	"github.com/kardianos/service"
	"net/url"
	"os/exec"
	"sync"
	"time"
)


const (
	// DefaultEntityId = "eventbroker-daemon"

	DefaultJsonDir  = "daemons"
    defaultWaitTime = time.Millisecond * 2000
	defaultDomain   = "local"
	defaultRetries  = 12
	DefaultRetryDelay = time.Second * 8

	PublishState    = true
	DontPublishState    = false
)


type Daemon struct {
	EntityId       messages.MessageAddress
	Boxname        string
	State          *states.Status
	Task           *tasks.Task
	Channels       *channels.Channels

	mutex          sync.RWMutex	// Mutex control for this struct.
	channelHandler *channels.Subscriber
	daemons        ServicesMap
	OsPaths        *ospaths.BasePaths
}
type Args Daemon


type Service struct {
	EntityId        messages.MessageAddress
	EntityName      messages.MessageAddress
	EntityParent    *messages.MessageAddress
	State           *states.Status
	IsManaged       bool
	Entry           *ServiceConfig
	JsonFile        JsonConfig
	MdnsEntry       *network.ServiceConfig

	mutex           sync.RWMutex // Mutex control for map.
	channels        *channels.Channels
	channelHandler  *channels.Subscriber
	instance        programInstance
}
type ServicesMap  map[messages.MessageAddress]*Service

type JsonConfig struct {
	Name        string
	LastModTime time.Time
}

type ServiceConfig struct {
	service.Config

	EntityName     string
	RunOnPlatform	string
	Stdout    string
	Stderr    string
	Stdin     string
	Env       []string
	Url       string
	UrlPtr    *url.URL
	autoHost      string
	autoPort      string
	MdnsType  string
}

const (
	Package                    = "daemon"
	InterfaceTypeService       = "*" + Package + ".Service"
	InterfaceTypeServiceConfig = "*" + Package + ".ServiceConfig"
	InterfaceTypeDaemon        = "*" + Package + ".Daemon"
)

type programInstance struct {
	exit    chan struct{}
	service service.Service
	cmd     *exec.Cmd
	*service.Config
}

type ServiceUrl struct {
	*url.URL
}
