
import { createStore } from 'vuex'
const store = createStore({
    state: {
        count: 1
    },
    mutations: {
        getCount(state,newParam) {
            state.count = newParam + 1
        }
    },
    actions: {
        setCount(context, value) {
            context.commit('getCount',value)
        }
    }
})
export default store