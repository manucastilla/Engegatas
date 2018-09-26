document.addEventListener('DOMContentLoaded', function() {

	let db = connect('https://aula-10-a1ec0.firebaseio.com/')

	let params = extract()

	let url = '/' + params['topico'] + '/courses'


/*	console.log(url)
	console.log(url2)*/

	db.download(url, function(data) {
    	replace('body', {
    		'courses': data,
    	})


	let url2 = '/'+ params['topico'] + '/courses/' + params['projeto'] 

	/*db.download(url2,function(data){

			replace('body', {
				'nom': data['nome'],
				'curs': data['goals'],

			})
			console.log(data)*/
	
	})


/*
	db.download(url, function(data) {
		for(key in data){
			let nome = document.querySelector('.nome')
    		nome.innerHTML = tpNome.generate({'nome': data[key]['nome']})
    	}
    	*/
    	//let courses = document.querySelector('.goals')
    	//courses.innerHTML = tpCourses.generate({'goals': data['goals']})




		//for(key in data){

			/*replace('body', {
				'nome': data[key]['nome'],
				}
			)*/
			//console.log(data[key]['nome'])
		//} 
  	//})

