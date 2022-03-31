import allburguer from '../Components/Images/allburguer.jpg'
import chickenburguer from '../Components/Images/chickenburguer.jpg'
import meetcheeseburguer from '../Components/Images/meetcheeseburguer.jpg'
import milanga from '../Components/Images/milanga.jpg'
import nuggetsa from '../Components/Images/nuggetsa.jpg'
import onionburguer from '../Components/Images/onionburguer.jpg'
import bestiaburguer from '../Components/Images/bestiaburguer.jpg'
import burguerbirra from '../Components/Images/burguerbirra.jpg'
import cheeseburguer from '../Components/Images/cheeseburguer.jpg'
import papas from '../Components/Images/papas.jpg'
import slowVegan from '../Components/Images/slowVegan.jpg'
import superburguer from '../Components/Images/superburguer.jpg'
import birras from '../Components/Images/birras.jpg'

import tapas from '../Components/Images/tapas.jpg'


const products = [
    {
        id: '1', 
        title: 'AllBurguer',
        description: 'Medallón de carne vacuna, queso cheddar, panceta, huevo, cebolla caramelizada, barbacoa.', 
        image: allburguer, 
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '2', 
        title: 'Chicken Burguer', 
        description: '2 Medallones de Pollo, doble queso cheddar, doble panceta, huevo, cebolla caramelizada, barbacoa.',
        image: chickenburguer,
        type: 'hamburguesas',
        featured: true
    },
    {
        id: '3', 
        title: 'CrazyBurguer', 
        description: 'Hamburguesa triple carne, triple danbo, jamón, lluvia de mac & cheese + bacon + lluvia de verdeo.',
        image: meetcheeseburguer, 
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '4', 
        title: 'MasQueMilanga',
        description: 'Milanesa de ternera / pechuga de pollo, cheddar, papas fritas + cheddar, bacon, huevos y verdeo', 
        image: milanga, 
        type: 'milanesas',
        featured: false
    },
    {
        id: '5', 
        title: 'OnlyChicken ', 
        description: 'Nuggets y mas Nuggets.',
        image: nuggetsa , 
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '6', 
        title: 'OnionBurguer',
        description: 'Hamburguesa con triple carne, triple cheddar y triple bacon, y cebolla morada.', 
        image: onionburguer, 
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '7', 
        title: 'BestiaBurguer', 
        description: 'Doble carne, doble cheddar, bacon, salsa especial.',
        image: bestiaburguer, 
        type: 'hamburguesas',
        featured: true
    },
    {
        id: '8', 
        title: 'BurguerBirra', 
        description: 'Cervezas artesanales, ideales para arrancar a tomar tranqui + 2 hamburguesas ideales.',
        image: burguerbirra, 
        type: 'hebidas',
        featured: true
    },
    {
        id: '9', 
        title: 'CheeseBurguer', 
        description: 'Doble carne +  cheddar doble, bacon, huevos y verdeo.',
        image: cheeseburguer, 
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '10', 
        title: 'Papas', 
        description: 'Papas, bacon y huevo frito y alioli.',
        image: papas, 
        type: 'papas',
        featured: false
    },
    {
        id: '11', 
        title: 'SlowVegan', 
        description: 'Combo mega burger y mega papas.',
        image: slowVegan, 
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '12', 
        title: 'TripleXburguer', 
        description: 'Triple carne, triple cheddar, bacon y cebolla frita + alioli.',
        image: superburguer, 
        type: 'hamburguesas',
        featured: false
    },
    {
        id: '13', 
        title: 'Cerveza Artesanal', 
        description: 'Birras y más Birras',
        image: birras, 
        type: 'bebidas',
        featured: false
    },
    {
        id: '14', 
        title: 'Tapeo ', 
        description: 'La imagen habla por si sola, nuggets, salsas, que mas podes pedir.',
        image: tapas , 
        type: 'parapicar',
        featured: true
    }
]

export const getProducts = new Promise(res=>{
    res(products)
})