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
    newTaskClear(state) {
        state.newTask = {
            title: '',
            status: false
        }
    },
    // updateTask(state, task) {
    // state.
    // },
    clearCompletedTask(state) {
        let tasks = state.tasks;
        let completed = state.tasks.filter(tasks => tasks.status == 1);
        console.log(completed);
        if (completed.length > 0) {
            for (var i = completed.length + 1; i >= 0; i--) {
                state.tasks.splice(completed[i], 1);
            }
        }

    }
}

let actions = {
    addTask({
        commit
    }, task) {
        axios.post('/api/task', task).then(res => {
            if (res.data === "success")
                console.log('added')
            commit('newTaskClear');
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
    updateTask({}, task) {
        axios.patch(`api/task/${task.id}`, {
                title: task.title
            })
            .then(res => {
                if (res.data == 'success') {
                    console.log('task updated')
                }
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
    },
    clearCompletedTask({
        commit
    }) {
        commit('clearCompletedTask');
        axios.get('/api/clear-completed')
            .then(res => {
                if (res.data == 'success')
                    console.log('Clear Completed Task')
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
