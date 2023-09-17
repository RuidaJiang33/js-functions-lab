fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {

    const completedNum = json.filter( todo => {
        return todo.completed === true
    }).reduce( (total) => {
        return total + 1
    }, 0)
   console.log(completedNum)

})
.catch(function(err) { 
  console.log(err);
});