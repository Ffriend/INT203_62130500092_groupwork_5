const app = Vue.createApp({
    data() {
        return {
            photos: [
                {
                    id: 0,
                    image: 'images/1.jpg',
                    name: 'Shahmirzad, Iran',
                    done: false,
                    show: true,
                    zoom: false
                },
                {
                    id: 1,
                    image: 'images/2.jpg',
                    name: 'Merveilles, France',
                    done: false,
                    show: true,
                    zoom: false
                },
                {
                    id: 2,
                    image: 'images/3.jpg',
                    name: 'Moena, Italy',
                    done: false,
                    show: true,
                    zoom: false
                },
                {
                    id: 3,
                    image: 'images/4.jpg',
                    name: 'Rye, United States',
                    done: false,
                    show: true,
                    zoom: false
                },
                {
                    id: 4,
                    image: 'images/5.jpg',
                    name: 'Big Sur, United States',
                    done: false,
                    show: true,
                    zoom: false
                },
                {
                    id: 5,
                    image: 'images/6.jpg',
                    name: 'Silver, United States',
                    done: false,
                    show: true,
                    zoom: false
                }
            ],
            focus: {
                show: false,
                index: 0
            }
        }
    },
    computed: {
        countPic() {
            return this.photos.filter(t => !t.false).length
        }
    }
})