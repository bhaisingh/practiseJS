const todos = [ {
    text: 'Order cat food',
    completed: true
}, 
{ text: 'Clean kitchen',
  completed: false
},
{ text: 'Buy food',
  completed: true
},
{ text: 'Do work',
  completed: false
},
{
    text: 'Exercise',
    completed: true
}
]

const deleteToDo = function(todos, todoText) {
    const index = todos.findIndex(function(todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteToDo(todos, 'buy food')
console.log(todos)

const getThingsToDo = function(todos) {
    return todos.filter(function(todo) {
        return !todo.completed
    })
}

console.log(getThingsToDo(todos))

const sortTodos = function(todos) {
    return todos.sort(function(a, b) {
        if (a.completed === false && b.completed === true) {
            return -1
        } else if (b.completed === false && a.completed === true) {
            return 1
        } else {
            return 0
        }
    })
}

console.log(sortTodos(todos))