const { createStore } = require('./lib/redux.min')

/* constants */
const [ ADD, SUBTRACT ] = [ "ADD", "SUBTRACT" ]

/* initial state */
const initialState = { counter: 0 }

/* reducer*/
const counterReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD:
			console.log("\n\nADD 1");
			return {
				counter: state.counter + 1
			}
		case SUBTRACT:
			console.log("\n\SUBTRACT 1");
			return {
				counter: state.counter - 1
			}
		default:
			return state
	}
}

/* store */
const store = createStore(counterReducer)

/* action creators */
const addAction = () => ({type: ADD })
const subtractAction = () => ({type: SUBTRACT })


const logger = () => console.log("\n\nCURRENT STATE : \n",JSON.stringify(store.getState(),null,3))

logger()

/* subscribe to the store */
const unsubscribe = store.subscribe(logger)
// unsubscribe()

store.dispatch(addAction())
store.dispatch(subtractAction())
store.dispatch(addAction())
store.dispatch(addAction())
store.dispatch(addAction())
store.dispatch(addAction())
store.dispatch(subtractAction())
store.dispatch(subtractAction())
store.dispatch(addAction())


/*
=========
   OUTPUT
=========


CURRENT STATE : 
 {
   "counter": 0
}


ADD 1


CURRENT STATE : 
 {
   "counter": 1
}

SUBTRACT 1


CURRENT STATE : 
 {
   "counter": 0
}


ADD 1


CURRENT STATE : 
 {
   "counter": 1
}


ADD 1


CURRENT STATE : 
 {
   "counter": 2
}


ADD 1


CURRENT STATE : 
 {
   "counter": 3
}


ADD 1


CURRENT STATE : 
 {
   "counter": 4
}

SUBTRACT 1


CURRENT STATE : 
 {
   "counter": 3
}

SUBTRACT 1


CURRENT STATE : 
 {
   "counter": 2
}


ADD 1


CURRENT STATE : 
 {
   "counter": 3
}

*/