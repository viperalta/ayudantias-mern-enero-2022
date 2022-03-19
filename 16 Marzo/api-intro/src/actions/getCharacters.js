const getCharacters = async(url) => {
    try{
        const apiResponse = await fetch(url).then((response)=>response.json());
        return apiResponse;
    }catch(error){
        return {error:"se ha producido un error"+error}
    }
}

export default getCharacters;