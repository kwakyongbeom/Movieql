const yongbeom={ //새로운 타입의 객체를 설정 
    name:"yongbeom",
    age:26,
    gender:"male"
};

const resolvers={ //Query를 해곃하는 즉, 해당 Query를 받으면 동작할 Callback 함수 같은 느낌 
  Query:{ //Query이고 
      person: () => yongbeom //person이란 키가 왔을 때 yongbeom 객체를  리턴 한다 
  }
};



module.exports={
    resolvers:resolvers
};
