import { observable } from 'mobx';

export default class UserStore {
    @observable currentUsers = [];

    get users () {
        // do ajax shit here to load players from current room
        const users = [
            {
                id: 1,
                name: 'Milo',
                pic: 'https://source.unsplash.com/random/150x150',
            },
            {
                id: 2,
                name: 'Jake',
                pic: 'https://source.unsplash.com/random/150x150'
            },
            {
                id: 3,
                name: 'Dock Balls',
                pic: 'https://source.unsplash.com/random/150x150'
            },
                {
                    id: 4,
                    name: 'Milo',
                    pic: 'https://source.unsplash.com/random/150x150',
                },
                {
                    id: 5,
                    name: 'Jake',
                    pic: 'https://source.unsplash.com/random/150x150'
                },
                {
                    id: 6,
                    name: 'Dock Balls',
                    pic: 'https://source.unsplash.com/random/150x150'
                },
        ];
        return users;
    }
}
