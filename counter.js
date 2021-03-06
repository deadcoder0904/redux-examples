const { createStore } = require('./lib/redux.min')

/* constants */
const [ ADD, SUBTRACT ] = [ "ADD", "SUBTRACT" ]

/* initial state */
const initialState = { counter: 0 }

/* reducer*/
const counterReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD:
			console.log("\n\nADD ", action.payload);
			return {
				counter: state.counter + action.payload
			}
		case SUBTRACT:
			console.log("\n\SUBTRACT ", action.payload);
			return {
				counter: state.counter - action.payload
			}
		default:
			return state
	}
}

/* store */
const store = createStore(counterReducer)

/* action creators */
const addAction = payload => ({type: ADD, payload })
const subtractAction = payload => ({type: SUBTRACT, payload })


const logger = () => console.log("\n\nCURRENT STATE : \n",JSON.stringify(store.getState(),null,3))

logger()

/* subscribe to the store */
const unsubscribe = store.subscribe(logger)
// unsubscribe()

store.dispatch(addAction(5))
store.dispatch(subtractAction(51))
store.dispatch(addAction(12))
store.dispatch(subtractAction(341))
store.dispatch(addAction(512))


/*
=========
   OUTPUT
=========



CURRENT STATE : 
 {
   "counter": 0
}


ADD  5


CURRENT STATE : 
 {
   "counter": 5
}

SUBTRACT  51


CURRENT STATE : 
 {
   "counter": -46
}


ADD  12


CURRENT STATE : 
 {
   "counter": -34
}

SUBTRACT  341


CURRENT STATE : 
 {
   "counter": -375
}


ADD  512


CURRENT STATE : 
 {
   "counter": 137
}

*/