import { ICONS, IMAGES } from "./theme";

export const restaurantData =
    [{ id: '1', name: 'Cobi’s', address: 'Sherman Oaks, CA', rating: 9.5, image: { uri: 'https://images.squarespace-cdn.com/content/v1/6345d6b0ba087b15ba22ca4c/4b80f0dc-3839-4473-a29d-a2397c34b15e/DB5A7647.jpg' } },
    { id: '2', name: 'Don Angie', address: 'West Hollywood, CA', rating: 9.2, image: { uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3f/2d/94/sushi-platter.jpg?w=600&h=-1&s=1' } },
    { id: '3', name: 'Sushi by S.', address: 'West Hollywood, CA', rating: 9.1, image: { uri: 'https://images.squarespace-cdn.com/content/v1/63f52cb70db2e54d5c3fa9c6/fd088cf1-c2d9-4f1d-b179-72286bba52b1/IMG_6093.jpg' } },
    { id: '4', name: 'Honor Bar', address: 'Sherman Oaks, CA', rating: 9.1, image: { uri: 'https://images.squarespace-cdn.com/content/v1/6345d6b0ba087b15ba22ca4c/4b80f0dc-3839-4473-a29d-a2397c34b15e/DB5A7647.jpg' } },
    { id: '5', name: 'Easy Street', address: 'Sherman Oaks, CA', rating: 9.1, image: { uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3f/2d/94/sushi-platter.jpg?w=600&h=-1&s=1' } },
    { id: '6', name: 'Osteria M.', address: 'Sherman Oaks, CA', rating: 8.8, image: { uri: 'https://images.squarespace-cdn.com/content/v1/63f52cb70db2e54d5c3fa9c6/fd088cf1-c2d9-4f1d-b179-72286bba52b1/IMG_6093.jpg' } },
    { id: '7', name: 'Chipotle', address: 'Sherman Oaks, CA', rating: 8.8, image: { uri: 'https://res.cloudinary.com/zenbusiness/q_auto,w_1200,h_630,c_auto,g_auto/v1/shared-assets/stk/blurry-woman-eating-salmon.jpg' } },
    { id: '8', name: 'Ospi Bren.', address: 'Sherman Oaks, CA', rating: 8.7, image: { uri: 'https://www.shutterstock.com/shutterstock/videos/1108361283/thumb/1.jpg?ip=x480' } },
    ];

export const LIST = [
    {
        "id": "1",
        "title": "best thai in LA",
        "description": "Exactly what it says dummy!",
        "restaurants": 3,
        "nearby": "1 nearby!",
        "likes": "No likes yet",
        "icon": require('../assets/icons/laflag.png')
    },
    {
        "id": "2",
        "title": "tendies",
        "description": "You already know I love me some basement chicken tendies",
        "restaurants": 5,
        "likes": "12 likes",
        "icon": require('../assets/icons/chickenHead.png')
    },
    {
        "id": "3",
        "title": "Favorite date spots",
        "description": "If we make it to one of these spots, we are vibin hard",
        "restaurants": 3,
        "likes": "27 likes",
        "icon": require('../assets/icons/heart.png')
    }
]

export const User_list = [
    {
        "id": "1",
        "avatar": IMAGES.avtar1,
        "title": "GourmetGuru",
        "address": "Loas Angeles CA"
       
    },
    {
        "id": "2",
        "avatar": IMAGES.avtar2,
        "title": "tenderlove",
        "address": "Loas Angeles CA"
       
    },
    {
        "id": "3",
        "avatar": IMAGES.avtar3,
        "title": "how.kev.eats",
        "address": "Loas Angeles CA"
    },
    {
        "id": "4",
        "avatar": IMAGES.avtar4,
        "title": "CaptainCrunch",
        "address": "Loas Angeles CA"
     
    }
]
