const MovieDB = require('../DB');
const movies=MovieDB.movies;


const resolvers={ //Query를 해곃하는 즉, 해당 Query를 받으면 동작할 Callback 함수 같은 느낌 
  Query:{ //Query이고 
      movies: () => movies,
      movie: (_,{id}) => MovieDB.getById(id) //Movie으로 요청 시 그 argument인 id를 받아 getById에 넘겨준다 
  },
  Mutation:{ //Mutation 추가  
    addMovie:(_,{name,gender}) => MovieDB.addMovie(name,gender)  //name과 gender를 입력받음
  }
};



module.exports={
    resolvers:resolvers
};

