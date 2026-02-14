const shuffleArray =(array)=>{
    for (let i=array.length-1;i>0;i--   ){
        const randomElement = Math.floor(Math.random()*(i+1))
        [array[i],arary[randomElement]]=[array[randomElem],array[i]]
    }
    return array
}

module.exports=shuffleArray  