let app = new Vue({
    el: "#app",
    data: {
        cps: 0,
        maxCps: 0
    },
    methods: {
        onClick() {
            this.cps += 1;
        },
        clear() {
            this.maxCps = this.cps;
            this.cps = 0;
        }
    },
    created() {
        setInterval(this.clear, 1000);
    }
})
