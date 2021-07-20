const publicKey = 'cbc6725b62b1eb615e6c3ecb19f506e0';
const privateKey = 'cfd7761f5e78e7c8f0fe1f219cb5ebfacb543fe8';
const keyPrefix = Date.now()
const hash = MD5(keyPrefix + privateKey + publicKey);


//get hero information

const getHero = async (name) => {
    const base = 'https://gateway.marvel.com:443/v1/public/characters';
    const query = `?name=${name}&apikey=${publicKey}&hash=${hash}`

    const response = await fetch(base + query);

    const data = await response.json();

    return data; 
}






