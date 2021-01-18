const movies=[
    { //새로운 타입의 객체를 설정
        id:0, 
        name:"yongbeom",
        age:26,
        gender:"male"
    },
    {
        id:1,
        name:"GuBBa",
        age:26,
        gender:"male"
    },
    { 
        id:2,
        name:"Nicolas",
        age:26,
        gender:"male"
    },
    ];

    const getById = id => {
        const filteredMovie=movies.filter(movie=>id===movie.id); //id값이 일치하는 값을 찾아 낸 후 
        return filteredMovie[0]; //리턴 
    };

    const deleteMovie = id => {
        const cleanedMovies=movies.filter(movie=>id!==movie.id);
        if(movies.length>cleanedMovies.length)
        {
            movies=cleanedMovies;
            return true;
        }
        else
        {
            return false
        }
    };
    
    const addMovie =(name,gender) =>{
        const newMovie = {
            id: movies.length,
            name,
            gender
        };
        movies.push(newMovie);
        return newMovie;

    }
    module.exports={
        movies:movies,
        getById:getById,
        addMovie:addMovie,
        deleteMovie:deleteMovie
    };

    