  document.addEventListener('DOMContentLoaded', function() {
  let db = new DB('https://aula-10-a1ec0.firebaseio.com/')

  let tpName = new TP('template-name')

  let tpGoals = new TP('template-goals')

  let params = new URLSearchParams(window.location.search)

  let url = '/' + params.get('category') + '/courses/' + params.get('course') + '/'

  db.download(url, function(data) {
    // let name = document.querySelector('.name')
    // name.innerHTML = tpName.generate({'name': data['name']})

<<<<<<< HEAD
    let goals = document.querySelector('.goals')
    goals.innerHTML = tpGoals.generate({'goals': data['goals']})

})
})



//   let materias = {"Projeto Final de Modelagem e Simulação": 'category'='topico3'}

//   let laterais = document.querySelectorAll('.lateral')

//   for(let lateral of laterais)
//     {lateral.innerHTML=materias[lateral.innerHTML]}
// 
=======
    // let goals = document.querySelector('.goals')
    // goals.innerHTML = tpGoals.generate({'goals': data['goals']})

})
})
>>>>>>> 6e6831e29234c38e721a9a1a40b10aa1a12b33d2
