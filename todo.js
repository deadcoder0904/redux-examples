const { createStore } = require('./redux.min')

const todos = [
	{id: 0, name: 'HELLO WWE', completed: false},
	{id: 1, name: 'Play Games', completed: false}
]

/* constants */
const [ CREATE_TODO, UPDATE_TODO, DELETE_TODO, SEARCH_TODO, TOGGLE_TODO] = [ "CREATE_TODO", "UPDATE_TODO", "DELETE_TODO", "SEARCH_TODO", "TOGGLE_TODO" ]

/* initial state */
const initialState = {
	nextId: todos.length,
	todos
}

/* reducer*/
const todoReducer = (state = initialState, action) => {
	switch(action.type) {
		case CREATE_TODO: {
			console.log("\n\nCREATE_TODO: ",action.payload)
			const todos = [
				...state.todos,
				{
					id: state.nextId,
					name: action.payload,
					completed: false
				}
			] 
			return {
				nextId: 	state.nextId + 1,
				todos
			}
		}
		case UPDATE_TODO: {
			console.log("\n\nUPDATE_TODO: ",action.id)
			const todos = state.todos.map(todo => {
				if (todo.id === action.id)
					todo.name = action.payload
				return todo
			})
			return Object.assign({},state,{ todos })
		}
		case DELETE_TODO: {
			console.log("\n\nDELETE_TODO: ",action.id)
			const todos = state.todos.filter(todo => todo.id !== action.id)
			return Object.assign({},state,{ todos })
		}
		case SEARCH_TODO: {
			console.log("\n\nSEARCH_TODO: ",action.name)
			const filteredTodos = state.todos.filter(todo => todo.name.toLowerCase().trim().includes(action.name.toLowerCase().trim()))
			return Object.assign({},state,{ filteredTodos })
		}
		case TOGGLE_TODO: {
			console.log("\n\TOGGLE_TODO: ",action.id)
			const todos = state.todos.map(todo => {
				if(todo.id == action.id)
					todo.completed = !todo.completed
				return todo
			})
			return Object.assign({},state,{ todos })
		}
		default:
			return state
	}
}

/* store */
const store = createStore(todoReducer)

/* action creator */
const addTodoAction = payload => ({
	type: CREATE_TODO,
	payload
})

const updateTodoAction = (id,payload) => ({
	type: UPDATE_TODO,
	id,
	payload
})

const removeTodoAction = id => ({
	type: DELETE_TODO,
	id
})

const searchTodoAction = name => ({
	type: SEARCH_TODO,
	name
})

const toggleTodoAction = id => ({
	type: TOGGLE_TODO,
	id
})

/* log current state */
const logger = () => {
	console.log("\n\nCurrent State:\n ",JSON.stringify(store.getState(),null,3))
}

logger()

/* subscribe to the store */
const unsubscribe = store.subscribe(logger)
// unsubscribe()

store.dispatch(addTodoAction("WTF WTF WTF !!!"))
store.dispatch(addTodoAction("YOYOYOYOYO !!!"))
store.dispatch(removeTodoAction(3))
store.dispatch(updateTodoAction(2,"HELLO FRIEND!!"))
store.dispatch(removeTodoAction(1))
store.dispatch(toggleTodoAction(2))
store.dispatch(toggleTodoAction(0))
store.dispatch(searchTodoAction("HElLo "))
