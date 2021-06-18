var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Dien thoai Samsung',
        value: ''
    },
    methods: {
        say: function(text) {
            return 'Hello '+ text + ' this is Methods'
        },
        // thay đổi value theo realtime khi ngườI nhập vào input
        changeValue: function(event) {
            this.value = event.target.value;
        }
    }
})
// Hệ thống phản ứng Reactivity
console.log(vueInstance)

setTimeout(() => {
    vueInstance.title = 'Dien thoai Apple'
}, 3000);