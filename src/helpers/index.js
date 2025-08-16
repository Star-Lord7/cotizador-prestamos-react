const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor);
}

const calcuarTotalPagar = (cantidad, plazo) => {
    let total;

    // Minetras mayor es la cantidad solicitada, menor es el interes
    if(cantidad < 5000){
        total = cantidad * 1.5; // 50% de interes
    }else if(cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.4; // 40% de interes
    }else if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3; // 30% de interes
    }else{
        total = cantidad * 1.2; // 20% de interes
    }

    // Mientras mayor es el plazo, mayor es el interes
    if(plazo === 6){
        total *= 1.1; // 10% de interes
    }else if(plazo === 12){
        total *= 1.2; // 20% de interes
    }else{
        total *= 1.3; // 30% de interes
    }

    return total;
}

export { 
    formatearDinero, 
    calcuarTotalPagar 
};