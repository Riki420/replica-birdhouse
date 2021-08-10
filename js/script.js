console.log(Vue);

const root = new Vue ({
    el: '#root',
    data: {
        decksList: [
            {
                name: 'Logo Hummingbird Deck 8.25',
                price: '$66',
                pic: 'https://cdn.shopify.com/s/files/1/1128/8094/products/15-01-0176-LogoHummingbirdDeck8.25-shopify_large.png?v=1627312836'
            },
            {
                name: 'Walker Dad Deck 8.38',
                price: '$69',
                pic: 'https://cdn.shopify.com/s/files/1/1128/8094/products/15-01-0175-CWDadDeck8.38-shopify_large.png?v=1627312875'
            },
            {
                name: 'Sloan Reaper Deck 8.5',
                price: '$69',
                pic: 'https://cdn.shopify.com/s/files/1/1128/8094/products/15-01-0174-ESReaperDeck8.5-shopify_large.png?v=1627312862'
            },
            {
                name: 'Hale Skull Deck 8.0',
                price: '$69',
                pic: 'https://cdn.shopify.com/s/files/1/1128/8094/products/15-01-0173-SHSkullDeck8.63-shopify_large.png?v=1627312792'
            }
            
        ]
    },
    methods: {}
})