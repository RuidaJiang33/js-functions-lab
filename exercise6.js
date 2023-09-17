fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {

    const completedTodosPerUser = json.reduce( (accumulator, todo) => {
        if (todo.completed) {
            if (accumulator[todo.userId]){
                accumulator[todo.userId]++;
            } else{
                accumulator[todo.userId] = 1;
            }
          }
        return accumulator
    },{})

    console.log(completedTodosPerUser)

})
.catch(function(err) { 
  console.log(err);
});
