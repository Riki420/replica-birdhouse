console.log(Vue);


//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                    *COMPLETES                                        //
//                                                                                      //
//--------------------------------------------------------------------------------------//

const onlyCompletes = new Vue({
    el: "#onlyCompletes",
    data: {
        completesList:[
            {
                name:'Birdhouse Beginner Grade Complete Skateboard Flying Falcon 7.5"',
                price:'$109.99',
                pic:'https://cdn.shopify.com/s/files/1/1128/8094/products/BIR_Complete_Holiday-_Flying_Falcon_large.jpg?v=1477609124'
            },
            {
                name:'Birdhouse Beginner Grade Tony Hawk Complete Skateboard Falcon 3 7.75"',
                price:'$119.99',
                pic:'https://cdn.shopify.com/s/files/1/1128/8094/products/BIR_Complete_Falcon_3_Blue_Main_large.jpg?v=1489179386'
            },
            {
                name:'Lizzie Armanto Purple Complete 7.75"',
                price:'$119.99',
                pic:'https://cdn.shopify.com/s/files/1/1128/8094/products/15-10-0036_LA_Favorites_PUR_Complete_7.75_large.png?v=1538693031'
            },
            {
                name:'Tony Hawk Full Skull Complete 8"',
                price:'$119.99',
                pic:'https://cdn.shopify.com/s/files/1/1128/8094/products/15-10-0038-TH_Full_Skull_Complete_7.5_large.png?v=1538695159'
            },
            {
                name:'Triple Stack Complete 8.0"',
                price:'$119.99',
                pic:'https://cdn.shopify.com/s/files/1/1128/8094/products/15-10-0010-Triple-Stack-Black-8.0_large.png?v=1538700051'
            },
            {
                name:'LA Favorites GREEN Complete 7.75',
                price:'$119.99',
                pic:'https://cdn.shopify.com/s/files/1/1128/8094/products/15-10-0029-bh-la-complete-favorites-green_large.png?v=1617141799'
            },
            
        ],
    },
    methods: {}
})




//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                        *DECKS                                        //
//                                                                                      //
//--------------------------------------------------------------------------------------//

const onlyDeck = new Vue ({
    el: '#onlyDeck',
    data: {
        decksList: [
            {
                name: 'Logo Hummingbird Deck 8.25',
                price: '$66.00',
                pic: 'https://cdn.shopify.com/s/files/1/1128/8094/products/15-01-0176-LogoHummingbirdDeck8.25-shopify_large.png?v=1627312836"'
            },
            {
                name: 'Walker Dad Deck 8.38',
                price: '$69.00',
                pic: 'https://cdn.shopify.com/s/files/1/1128/8094/products/15-01-0175-CWDadDeck8.38-shopify_large.png?v=1627312875'
            },
            {
                name: 'Sloan Reaper Deck 8.5',
                price: '$69.00',
                pic: 'https://cdn.shopify.com/s/files/1/1128/8094/products/15-01-0174-ESReaperDeck8.5-shopify_large.png?v=1627312862'
            },
            {
                name: 'Hale Skull Deck 8.0',
                price: '$69.00',
                pic: 'https://cdn.shopify.com/s/files/1/1128/8094/products/15-01-0173-SHSkullDeck8.63-shopify_large.png?v=1627312792'
            },
            {
                name: 'Jaws Skull Deck 8.25',
                price: '$66.00',
                pic: 'https://cdn.shopify.com/s/files/1/1128/8094/products/15-01-0172-JawsSkullDeck8.25-shopify_large.png?v=1627312820'
            },
            {
                name: 'Loy Skull Deck 8.38',
                price: '$69.00',
                pic: 'https://cdn.shopify.com/s/files/1/1128/8094/products/15-01-0171-DLSkullDeck8.38-shopify_large.png?v=1627312852'
            },
            {
                name: 'Dixon Skull Deck 8.5',
                price: '$69.00',
                pic: 'https://cdn.shopify.com/s/files/1/1128/8094/products/15-01-0170-CDSkullDeck8.5-shopify_large.png?v=1627312774'
            }
            
        ]
        
    },
    methods: {
       
    }
})




//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                         TEAM                                         //
//                                                                                      //
//--------------------------------------------------------------------------------------//


const teamSection = new Vue ({
    el: '#teamSection',
    data: {
            teamList: [
            {
            name: 'Tony Hawk',
            pic:'https://cdn.shopify.com/s/files/1/1128/8094/files/TONY_HAWK_SQUARE.jpg?13713130580116827742'
        },
        {
            name: 'Aaron Homoki',
            pic:'https://cdn.shopify.com/s/files/1/1128/8094/files/AARON_HOMOKI_TEAM_SQUARE.jpg?14833368862589446963'
        },
        {
            name: 'Ben Raybourn',
            pic:'https://cdn.shopify.com/s/files/1/1128/8094/files/BEN_RAYBOURN_TEAM_SQUARE.jpg?16257660216669323072'
        },
        {
            pic: 'https://cdn.shopify.com/s/files/1/1128/8094/files/CLINT_WALKER_TEAM_SQUARE.jpg?17632313048585677746'
        },
        {
            pic: 'https://cdn.shopify.com/s/files/1/1128/8094/files/DAVID_LOY_SQUARE.jpg?9672033928588162704'
        },
        {
            pic: 'https://cdn.shopify.com/s/files/1/1128/8094/files/LIZZY_ARMANTO_TEAM_SQUARE_dda5d064-e24f-451f-85b9-10dd881d5598_large.jpg?v=1473290449'
        },
        {
            pic: 'https://cdn.shopify.com/s/files/1/1128/8094/files/CLIVE_DIXON_SQUARE?8624182090466570555'
        },
        {
            pic:'https://cdn.shopify.com/s/files/1/1128/8094/files/SHAWN_HALE_SQUARE_1119ee5a-b349-4821-9317-ce2ea25bc9ec?17476185367590731856'
        },
        {
            pic:'https://cdn.shopify.com/s/files/1/1128/8094/files/ELLIOT_SLOAN_SQUARE.jpg?11906405139316731422'
        }
    ]
    }
})