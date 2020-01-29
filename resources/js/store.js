import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let state = {
    tasks: [],
    remove: null,
    newTask: {
        title: '',
        status: false
    }
}

let getters = {
    newTask: state => {
        return state.newTask
    },
    tasks: state => {
        return state.tasks
    },
    remove: state => {
        return state.remove
    }
}

let mutations = {
    addTask(state, task) {
        state.tasks.unshift(task)
    },
    removeTask(state, task) {
        state.toRemove = task;
    },
    getTasks(state, tasks) {
        state.tasks = tasks
    },
    deleteTask(state, task) {
        state.tasks.splice(state.tasks.indexOf(task), 1)
        state.toRemove = null;
    },
}

let actions = {
    addTask({
        commit
    }, task) {
        axios.post('/api/task', task).then(res => {
            if (res.data === "success")
                console.log('added')
        }).catch(err => {
            console.log(err)
        })
    },
    deleteTask({
        commit
    }, task) {
        axios.delete(`/api/task/${task.id}`)
            .then(res => {
                if (res.data === 'success')
                    console.log('deleted')
            }).catch(err => {
                console.log(err)
            })
    },
    getTasks({
        commit
    }) {
        axios.get('/api/task')
            .then(res => {
                console.log(res.data)
                commit('getTasks', res.data)
            }).catch(err => {
                console.log(err)
            })
    },
    completeTask({}, task) {
        axios.get(`/api/complete/${task.id}`)
            .then(res => {
                if (res.data == 'success')
                    console.log('completed')
            }).catch(err => {
                console.log(err)
            })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
