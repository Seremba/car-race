import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            results: [
                {
                    id: 'r1',
                    title: 'p1'
                },
                {
                    id: 'r2',
                    title: '+25'
                },
                {
                    id: 'r3',
                    title: 'Lap  42'
                },
                {
                    id: 'r4',
                    title: 'IN 3'
                },
                {
                    id: 'r4',
                    title: '888888'
                }
            ]
        }
    },

    mutations: {
        addResult(state, resultData){
            const newResult = {
                id: new Date().toISOString(),
                title: resultData.title 
            }

            state.results.unshift(newResult)
        }
    },

    actions: {
        addResult(context, resultData) {
            context.commit('addResult', resultData)
        }
    },
    getters: {
        results(state){
            return state.results
        },
        result(state){
            return(resultId) => {
                return state.results.find((result) => result.id === resultId)
            }
        }
    }
});

export default store;