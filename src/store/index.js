import {createStore} from 'vuex'

export default createStore({
    state: {
        list: {
            lineOne: {
                nameListHouse: 'Дела по дому',
                jobList: {
                    room: {
                        mainRoom: {
                            nameRoom: 'Зал',
                            work: [
                                {id: 1, name: 'Помыть окна'},
                                {id: 2, name: 'Помыть окна'}
                            ]
                        },
                        hole: {
                            nameRoom: 'Холл',
                            work: [
                                {id: 1, name: 'Помыть окна'},
                                {id: 2, name: 'Помыть окна'}
                            ]
                        },
                        kitchen: {
                            nameRoom: 'Кухня',
                            work: [
                                {id: 1, name: 'Помыть посуду'},
                                {id: 2, name: 'Помыть посуду'},
                                {id: 3, name: 'Помыть посуду'},
                                {id: 4, name: 'Помыть посуду'},
                                {id: 5, name: 'Помыть посуду'}
                            ]
                        }
                    }
                }
            },
            lineTwo: {
                nameListHouse: 'Огород',
                jobList: {
                    room: {
                        mainRoom: {
                            nameRoom: 'Зал',
                            work: [
                                {id: 1, name: 'Помыть окна'},
                                {id: 2, name: 'Помыть окна'}
                            ]
                        },
                        hole: {
                            nameRoom: 'Холл',
                            work: [
                                {id: 1, name: 'Помыть окна'},
                                {id: 2, name: 'Помыть окна'}
                            ]
                        },
                        kitchen: {
                            nameRoom: 'Кухня',
                            work: [
                                {id: 1, name: 'Помыть посуду'},
                                {id: 2, name: 'Помыть посуду'},
                                {id: 3, name: 'Помыть посуду'},
                                {id: 4, name: 'Помыть посуду'},
                                {id: 5, name: 'Помыть посуду'}
                            ]
                        }
                    }
                }
            }
        }
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
