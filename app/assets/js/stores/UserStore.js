import { observable } from 'mobx';

export default class UserStore {
    @observable currentUsers = [];

    get users () {
        // do ajax shit here to load players from current room
        const users = [
            {
                id: 1,
                name: 'Milo',
                pic: 'https://images.unsplash.com/photo-1485468935663-831e33cf812d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=150&h=150&fit=crop&s=cd76de1452e0e2e8ecd083e9e35de9b3',
            },
            {
                id: 2,
                name: 'Jake',
                pic: 'https://images.unsplash.com/photo-1484229449629-0b35883aaeed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=150&h=150&fit=crop&s=93360939d325b8517d8269a651311948'
            },
            {
                id: 3,
                name: 'Daniel',
                pic: 'https://images.unsplash.com/photo-1470165344182-24727c18c317?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=150&h=150&fit=crop&s=82be0f8716342d3c9186d23d14e02580'
            },
            {
                id: 4,
                name: 'Jacob',
                pic: 'https://images.unsplash.com/photo-1491332069880-905992a4c051?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=150&h=150&fit=crop&s=1dbfd2c0e198599495ebf115b7f1a390',
            },
        ];
        return users;
    }
}
