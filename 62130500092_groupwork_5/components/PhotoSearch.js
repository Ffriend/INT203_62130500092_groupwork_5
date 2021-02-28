app.component('photo-search', {
    data() {
        return {
            input: ''
        }
    },

    props: {
        focus: Array,
        photos: Array
    },

    template:
        /*้html*/

        `
    <i class="cursor-pointer text-4xl material-icons px-96 ml-96" v-show="searchButton" @click="clickSearch" @keyup="searchPhotos">
            search
        </i>
        <div class="mx-32 pl-96 pt-2 text-gray-600" v-show="searchBox">
            <input class="font-mono border-2 border-gray-300 bg-white h-10 w-1/2 px-5 pr-16 rounded-lg text-sm focus:outline-none" v-model="searchInput" type="search" name="search" placeholder="Please enter text for searching photos">
            <button class="font-mono mx-2 p-2 my-2 bg-blue-400 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2" @click="clickSearch">
                Cancel
            </button>
        </div>
    <div class="mx-32 pl-96 pt-2 text-gray-600">
            <input type="text" placeholder="Please enter text for searching photos" v-model="input" @keyup="search" class="font-mono border-2 border-gray-300 bg-white h-10 w-96 px-5 pr-16 rounded-lg text-sm focus:outline-none"><button class="font-mono mx-2 p-2 my-2 bg-blue-400 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-200 ring-offset-2" v-on:click="show">cancel</button>
        </div>
    ` ,

    methods: {
        search() {
            for (i = 0; i < this.photos.length; i++) {
                if (this.photos[i].name.toUpperCase().search(this.input.toUpperCase()) < 0) this.photos[i].show = false;
                else this.photos[i].show = true;
            }
        },
        show() {
            this.focus.show = false;
            this.input = '';
            for (i = 0; i < this.photos.length; i++) {
                this.photos[i].show = true;
            }
        }
    }
})
