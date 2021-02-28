app.component('photo-view', {
    props: {
        focus: Array,
        photos: Array
    },
    template:
        /*้html*/
    `
    <div v-show="focus.show" class="mx-auto w-6/12 h-auto bg-black px-5 py-3 mt-3 rounded-md">
        <div class="flex flex-col">
            <div>
                <i class="material-icons text text-white flex justify-end cursor-pointer" v-on:click="close">disabled_by_default</i>
            </div> 
            <div class="flex justify-center">
                <img :src="photos[focus.index].image" class="w-8/12 border-solid border-white border-4 rounded-xl mb-4"> 
            </div> 
        </div>
    </div>
    ` ,
    methods: {
        close() {
            this.focus.show = false;
        }
    }
})
