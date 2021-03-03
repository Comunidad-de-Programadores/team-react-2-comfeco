import React from 'react';
import { talleres } from '../data/dataTalleres';


export const getTallerByFrameWork = (framework) => {
    
    const validFrameWork = ['angular', 'react', 'vue', 'svelte'];

    if(! validFrameWork.includes(framework)){
        throw new Error(`Publisher "${ framework }" no es correcto`);
    }
    return talleres.filter( taller => taller.framework === framework) ;

}
