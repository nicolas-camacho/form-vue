const app = new Vue({
    el: '#app',
    data: {
        users: [],
        newUser: {
            code: '',
            name: '',
            lastName: '',
            mobile: '',
            phone: '',
            address: '',
            country: '',
            state: '',
            city: '',
        }
    },
    methods: {
        addUser() {
            this.users.push({
                code: this.newUser.code,
                name: this.newUser.name,
                lastName: this.newUser.lastName,
                mobile: this.newUser.mobile,
                phone: this.newUser.phone,
                address: this.newUser.address,
                country: this.newUser.country,
                state: this.newUser.state,
                city: this.newUser.city,
            })
            this.newUser.code = '';
            this.newUser.name = '';
            this.newUser.lastName = '';
            this.newUser.mobile = '';
            this.newUser.phone = '';
            this.newUser.address = '';
            this.newUser.country = '';
            this.newUser.state = '';
            this.newUser.city = '';
            localStorage.setItem('users-vue', JSON.stringify(this.users));
        },
        deleteUser(index) {
            this.users.splice(index, 1);
            localStorage.setItem('users-vue', JSON.stringify(this.users));
        }
    },
    created() {
        let datosBD = JSON.parse(localStorage.getItem('users-vue'));
        if (datosBD === null) {
            this.users = [];
        } else {
            this.users = datosBD;
        }
    }
})