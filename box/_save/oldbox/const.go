package box

import (
	"fmt"
	"gearbox/global"
	"github.com/gearboxworks/go-status"
	"time"
)

const (
	Basedir     = "/home/gearbox/projects"
)

const (
	VmStateInit			= ""
	VmStateNotPresent	= "not present"
	VmStatePowerOff 	= "poweroff"	// Valid VM state return from listvm
	VmStatePaused 		= "paused"		// Valid VM state return from listvm
	VmStateSaved 		= "saved"		// Valid VM state return from listvm
	VmStateRunning  	= "running"		// Valid VM state return from listvm
	VmStateStarting		= "starting"
	VmStateStopping		= "stopping"
	VmStateDontCare		= "dont care"
	VmStateUnknown		= "unknown"

	OkState      = "ok"
	NotOkState   = "nok"
)


const (
	DefaultLogo = "heartbeat/img/IconLogo.ico"
	DefaultUp = "heartbeat/img/UpArrow.ico"
	DefaultDown = "heartbeat/img/DownArrow.ico"

	IconLogoPng = "heartbeat/img/IconLogo.png"
	IconLogo = "heartbeat/img/IconLogo.ico"
	IconError = "heartbeat/img/IconError.ico"
	IconWarning = "heartbeat/img/IconWarning.ico"
	IconUp = "heartbeat/img/IconUp.ico"
	IconDown = "heartbeat/img/IconDown.ico"
	IconStarting = "heartbeat/img/IconStarting.ico"
	IconStopping = "heartbeat/img/IconStopping.ico"
)


type BoxEntity struct {
	Name         string
	CurrentState string
	WantState    string
}

type BoxState struct {
	VM      BoxEntity
	API     BoxEntity
	LastSts status.Status
}

type VmDisplayState struct {
	Name			string

	VmIconState		string
	VmTitleState	string
	VmHintState		string

	ApiIconState	string
	ApiTitleState	string
	ApiHintState	string

	Title			string
	Hint			string
	Sts	    		status.Status
}

type VmFsmState struct {
	Name			string
	VmState			string
	VmWantState		string

	ApiState		string
	ApiWantState	string
}


var DisplayState = map[string]VmDisplayState{
	VmStateInit: {
		Name:			VmStateInit,

		VmTitleState:	fmt.Sprintf("%s VM: idle", global.Brandname),
		VmHintState:	"VM is in idle state.",
		VmIconState:	IconLogo,

		ApiTitleState:	fmt.Sprintf("%s API: halted", global.Brandname),
		ApiHintState:	"API not running due to VM running.",
		ApiIconState:	IconLogo,

		Title:			fmt.Sprintf("%s is idle", global.Brandname),
		Hint:			fmt.Sprintf("%s is idle.", global.Brandname),
	},

	VmStateNotPresent: {
		Name:			VmStateNotPresent,

		VmTitleState:	fmt.Sprintf("%s VM: is not present", global.Brandname),
		VmHintState:	"Click on 'Create Box' to create.",
		VmIconState:	IconWarning,

		ApiTitleState:	fmt.Sprintf("%s API: halted", global.Brandname),
		ApiHintState:	"API not running due to VM not existing.",
		ApiIconState:	IconWarning,

		Title:			fmt.Sprintf("%s VM creation", global.Brandname),
		Hint:			fmt.Sprintf("%s VM needs to be created.", global.Brandname),
	},

	VmStatePowerOff: {
		Name:			VmStatePowerOff,

		VmTitleState:	fmt.Sprintf("%s VM: halted", global.Brandname),
		VmHintState:	"VM is powered off.",
		VmIconState:	IconDown,

		ApiTitleState:	fmt.Sprintf("%s API: halted", global.Brandname),
		ApiHintState:	"API not running due to VM running.",
		ApiIconState:	IconDown,

		Title:			fmt.Sprintf("%s VM halted", global.Brandname),
		Hint:			fmt.Sprintf("%s VM is in a halted state.", global.Brandname),
	},

	VmStatePaused: {
		Name:			VmStatePaused,

		VmTitleState:	fmt.Sprintf("%s VM: paused", global.Brandname),
		VmHintState:	"VM is paused.",
		VmIconState:	IconDown,

		ApiTitleState:	fmt.Sprintf("%s API: halted", global.Brandname),
		ApiHintState:	"API not running due to VM running.",
		ApiIconState:	IconDown,

		Title:			fmt.Sprintf("%s VM paused", global.Brandname),
		Hint:			fmt.Sprintf("%s VM is in a paused state.", global.Brandname),
	},

	VmStateSaved: {
		Name:			VmStateSaved,

		VmTitleState:	fmt.Sprintf("%s VM: saved", global.Brandname),
		VmHintState:	"VM is in the saved state.",
		VmIconState:	IconDown,

		ApiTitleState:	fmt.Sprintf("%s API: halted", global.Brandname),
		ApiHintState:	"API not running due to VM running.",
		ApiIconState:	IconDown,

		Title:			fmt.Sprintf("%s VM saved", global.Brandname),
		Hint:			fmt.Sprintf("%s VM is in a saved state.", global.Brandname),
	},

	VmStateRunning: {
		Name:			VmStateRunning,

		VmTitleState:	fmt.Sprintf("%s VM: running", global.Brandname),
		VmHintState:	"VM is up and running.",
		VmIconState:	IconUp,

		ApiTitleState:	fmt.Sprintf("%s API: running", global.Brandname),
		ApiHintState:	"API is up and running.",
		ApiIconState:	IconUp,

		Title:			fmt.Sprintf("%s running", global.Brandname),
		Hint:			fmt.Sprintf("%s is running.", global.Brandname),
	},

	VmStateStarting: {
		Name:			VmStateStarting,

		VmTitleState:	fmt.Sprintf("%s VM: running", global.Brandname),
		VmHintState:	"VM is up and running.",
		VmIconState:	IconUp,

		ApiTitleState:	fmt.Sprintf("%s API: starting", global.Brandname),
		ApiHintState:	"API is starting up.",
		ApiIconState:	IconStarting,

		Title:			fmt.Sprintf("%s API starting", global.Brandname),
		Hint:			fmt.Sprintf("%s API is starting.", global.Brandname),
	},

	VmStateStopping: {
		Name:			VmStateStopping,

		VmTitleState:	fmt.Sprintf("%s VM: stopping", global.Brandname),
		VmHintState:	"VM is being shut down.",
		VmIconState:	IconStopping,

		ApiTitleState:	fmt.Sprintf("%s API: stopping", global.Brandname),
		ApiHintState:	"API is being shut down.",
		ApiIconState:	IconStopping,

		Title:			fmt.Sprintf("%s VM stopping", global.Brandname),
		Hint:			fmt.Sprintf("%s VM is stopping.", global.Brandname),
	},

	VmStateUnknown: {
		Name:			VmStateUnknown,

		VmTitleState:	fmt.Sprintf("%s VM: unknown", global.Brandname),
		VmHintState:	"VM is in an unknown state.",
		VmIconState:	IconWarning,

		ApiTitleState:	fmt.Sprintf("%s API: unknown", global.Brandname),
		ApiHintState:	"API is in an unknown state.",
		ApiIconState:	IconWarning,

		Title:			fmt.Sprintf("%s VM is unknown", global.Brandname),
		Hint:			fmt.Sprintf("%s VM is in an unknown state.", global.Brandname),
	},
}


var DecodeState = []VmFsmState{
	{	Name:		VmStateInit,		VmState:	VmStateInit,		VmWantState:	VmStateDontCare,	ApiState:		VmStateDontCare,	ApiWantState:	VmStateDontCare,	},

	{	Name:		VmStateNotPresent,	VmState:	VmStateNotPresent,	VmWantState:	VmStateDontCare,	ApiState:		VmStateDontCare,	ApiWantState:	VmStateDontCare,	},

	{	Name:		VmStatePowerOff,	VmState:	VmStatePowerOff,	VmWantState:	VmStateDontCare,	ApiState:		VmStateDontCare,	ApiWantState:	VmStateDontCare,	},

	{	Name:		VmStatePaused,		VmState:	VmStatePaused,		VmWantState:	VmStateDontCare,	ApiState:		VmStateDontCare,	ApiWantState:	VmStateDontCare,	},

	{	Name:		VmStateSaved,		VmState:	VmStateSaved,		VmWantState:	VmStateDontCare,	ApiState:		VmStateDontCare,	ApiWantState:	VmStateDontCare,	},

	{	Name:		VmStateRunning,		VmState:	VmStateRunning,		VmWantState:	VmStateRunning,		ApiState:		VmStateRunning,		ApiWantState:	VmStateRunning,		},

	{	Name:		VmStateStarting,	VmState:	VmStatePowerOff,	VmWantState:	VmStateRunning,		ApiState:		VmStateDontCare,	ApiWantState:	VmStateDontCare,	},
	{	Name:		VmStateStarting,	VmState:	VmStatePowerOff,	VmWantState:	VmStateRunning,		ApiState:		VmStatePowerOff,	ApiWantState:	VmStateRunning,		},
	{	Name:		VmStateStarting,	VmState:	VmStateRunning,		VmWantState:	VmStateRunning,		ApiState:		VmStatePowerOff,	ApiWantState:	VmStateRunning,		},
	{	Name:		VmStateStarting,	VmState:	VmStateRunning,		VmWantState:	VmStateRunning,		ApiState:		VmStateStarting,	ApiWantState:	VmStateRunning,		},

	{	Name:		VmStateStopping,	VmState:	VmStateRunning,		VmWantState:	VmStatePowerOff,	ApiState:		VmStateDontCare,	ApiWantState:	VmStateDontCare,	},
	{	Name:		VmStateStopping,	VmState:	VmStateRunning,		VmWantState:	VmStatePowerOff,	ApiState:		VmStateRunning,		ApiWantState:	VmStatePowerOff,	},
	{	Name:		VmStateStopping,	VmState:	VmStateRunning,		VmWantState:	VmStatePowerOff,	ApiState:		VmStateStopping,	ApiWantState:	VmStatePowerOff,	},

	{	Name:		VmStateUnknown,		VmState:	VmStateDontCare,	VmWantState:	VmStateDontCare,	ApiState:		VmStateDontCare,	ApiWantState:	VmStateDontCare,	},
}


// FSM handling.
func (state *BoxState) GetStateMeaning() (VmDisplayState) {

	var s VmFsmState
	//var i int
	found := false

	for _, s = range DecodeState {
		switch {
			case (s.VmState == VmStateDontCare) && (s.ApiState == state.API.CurrentState) && (s.VmWantState == VmStateDontCare) && (s.ApiWantState == VmStateDontCare):
				// Handle don't care states first.
				//fmt.Printf("1:")
				found = true
				break

			case (s.VmState == state.VM.CurrentState) && (s.ApiState == VmStateDontCare) && (s.VmWantState == VmStateDontCare) && (s.ApiWantState == VmStateDontCare):
				// Handle don't care states first.
				//fmt.Printf("2:")
				found = true
				break


			case (s.VmState == state.VM.CurrentState) && (s.ApiState == state.API.CurrentState) && (s.VmWantState == VmStateDontCare) && (s.ApiWantState == VmStateDontCare):
				// .
				//fmt.Printf("3:")
				found = true
				break

			case (s.VmState == VmStateDontCare) && (s.ApiState == VmStateDontCare) && (s.VmWantState == state.VM.WantState) && (s.VmState == state.VM.CurrentState):
				// Handle want states last.
				//fmt.Printf("4:")
				found = true
				break


			case (s.VmState == state.VM.CurrentState) && (s.ApiState == state.API.CurrentState) && (s.VmWantState == state.VM.WantState) && (s.VmState == state.VM.CurrentState):
				// Handle want states last.
				//fmt.Printf("4:")
				found = true
				break

			default:
				//fmt.Printf("D:")
		}
//		fmt.Printf("Name: %s(%d)   \tVmState:%v   \tVmWantState:%v   \tApiState:%v   \tApiWantState:%v\n",
//			s.Name, i,
//			state.VM.CurrentState, state.VM.WantState,
//			state.API.CurrentState, state.API.WantState,
//			)

		if found == true {
//			fmt.Printf("MOREF\n")
			break
		}
	}

	if found != true {
		s.Name = VmStateUnknown
	}

//	fmt.Printf("E:%v(%d) '%v' : '%v'\n", s.Name, i, state.VM.CurrentState, state.API.CurrentState)

	return DisplayState[s.Name]
}


/*
@TODO
VM states can be one of these possibilities:
VM		API		Description
UNKNOWN	X		No VM created.
DOWN	DOWN	VM shutdown and of course no API running.
DOWN	UP		INVALID STATE.
UP		DOWN	VM running, but API not yet running or not functioning.
UP		UP		Everything working OK.

VM		API		States
UNKNOWN	X		AbsentState
DOWN	DOWN	HaltedState | StoppedState | StoppingState
DOWN	UP		UnknownState
UP		DOWN	RunningState | StartedState | StartingState
UP		UP		RunningApiState


*/

/*
var StateMeaning = map[string]string{
	UnknownState: fmt.Sprintf("%s VM & Heartbeat in an unknown state", global.Brandname),
	HaltedState:  fmt.Sprintf("%s VM & Heartbeat halted", global.Brandname),
	RunningState: fmt.Sprintf("%s VM running, Heartbeat halted", global.Brandname),
	StartedState: fmt.Sprintf("%s VM running, Heartbeat halted", global.Brandname),
	NotOkState:   fmt.Sprintf("%s VM running, Heartbeat halted", global.Brandname),
	OkState:      fmt.Sprintf("%s VM running, Heartbeat running", global.Brandname),
}
*/

const (
	DefaultWaitDelay       = time.Second
	DefaultWaitRetries     = 90
	DefaultConsoleHost     = "127.0.0.1"
	DefaultConsolePort     = "2023"
	DefaultConsoleOkString = "Gearbox Heartbeat"
	DefaultShowConsole     = false
	DefaultConsoleReadWait = time.Second * 5
)