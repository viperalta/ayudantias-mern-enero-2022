export async function simpleGet (url) {
    try{
        console.log("llegue")
        const apiResponse= await fetch(url).then((response)=>response.json());
        return apiResponse
    }catch(error){
        return {error:"se ha producido un error:"+error}
    }
}