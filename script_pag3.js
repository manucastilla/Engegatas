document.addEventListener('DOMContentLoaded', function() {
  let db = new DB('https://aula-10-a1ec0.firebaseio.com/')

  let tpName = new TP('template-name')

  let tpGoals = new TP('template-goals')

  let params = new URLSearchParams(window.location.search)

  let url = '/' + params.get('category') + '/courses/' + params.get('course') + '/'

  db.download(url, function(data) {
    let name = document.querySelector('.name')
    name.innerHTML = tpName.generate({'name': data['name']})

    let goals = document.querySelector('.goals')
    goals.innerHTML = tpGoals.generate({'goals': data['goals']})
<<<<<<< HEAD

})
})
=======


//   let materias = {"Projeto Final de Modelagem e Simulação": 'category'='topico3'}

//   let laterais = document.querySelectorAll('.lateral')

//   for(let lateral of laterais)
//     {lateral.innerHTML=materias[lateral.innerHTML]}
// 

})})


>>>>>>> 2359ed58d91014d3da873a2c0c12c59a125ea69c
