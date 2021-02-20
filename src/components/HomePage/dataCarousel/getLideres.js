import React from 'react';
import { lideres } from './data';


export const getLideres = (team) => {
    
    const validTeams = ['angular', 'react', 'vue', 'svelte'];

    if(! validTeams.includes(team)){
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    return lideres.filter(lider => lider.team === team);



}
