const Get = async (url) => {
    try{
        const response = await fetch(url);
        const res = await response.json();
        return res;

    }catch(error){
        return error;
    }
} 

export default Get;