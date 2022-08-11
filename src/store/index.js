import {createStore} from 'vuex'

export default createStore({
    state: {
        list:{
            key: '1',
            name: 'ланг',
            children: [
                {
                    key: '2.1',
                    name: 'ланг',
                    children: [
                        {
                            key: '3.2.1',
                            name: 'ланг',
                        },{
                            key: '3.2.2',
                            name: 'ланг',
                        },{
                            key: '3.2.3',
                            name: 'ланг',
                        },{
                            key: '3.2.4',
                            name: 'ланг',
                        },
                    ],
                },
                {
                    key: '2.2',
                    name: 'ланг',
                },
            ],
        },
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
