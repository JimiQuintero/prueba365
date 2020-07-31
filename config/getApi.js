const axios = require('axios');

const getPeople = async(pepole) => {

    const instance = axios.create({
        baseURL: 'https://swapi.dev/api/people/'
    });

    const resp = await instance.get();
    if (resp.data.results.length === 0) {
        throw new Error(`No se encuentra resultados para ${pepole}`);
    }

    const data = resp.data.results[pepole];
    const Nombre = data.name;
    const Genero = data.gender;
    const Color_de_Cabello = data.hair_color;
    const Color_de_Piel = data.skin_color;
    const Color_de_ojos = data.eye_color;
    const Estatura = data.height;
    const Nombre_del_planeta_proveniente = data.homeworld;
    const Especie = data.species;



    return {
        Nombre,
        Genero,
        Color_de_Cabello,
        Color_de_Piel,
        Color_de_ojos,
        Estatura,
        Nombre_del_planeta_proveniente,
        Especie
    }

}

const getPlanets = async(planets) => {

    const instance = axios.create({
        baseURL: 'https://swapi.dev/api/planets'
    });

    const resp = await instance.get();
    if (resp.data.results.length === 0) {
        throw new Error(`No se encuentra resultados para ${planets}`);
    }

    const data = resp.data.results[planets];
    const Nombre = data.name;
    const Terreno = data.terrain;
    const Gravedad = data.gravity;
    const Diametro = data.diameter;
    const Poblacion = data.population;

    return {
        Nombre,
        Terreno,
        Gravedad,
        Diametro,
        Poblacion,
    }

}

const getNaves = async(naves) => {

    const instance = axios.create({
        baseURL: 'https://swapi.dev/api/starships'
    });

    const resp = await instance.get();
    if (resp.data.results.length === 0) {
        throw new Error(`No se encuentra resultados para ${naves}`);
    }

    const data = resp.data.results[naves];
    const Nombre = data.name;
    const Modelo = data.model;
    const Fabricante = data.manufacturer;
    const Numero_de_Pasajeros = data.passengers;

    return {
        Nombre,
        Modelo,
        Fabricante,
        Numero_de_Pasajeros
    }
}



module.exports = {
    getPeople,
    getPlanets,
    getNaves
}