app.component('photo-view', {
    props: {
        focus: Array,
        photos: Array
    },
    template:
        /*้html*/
        `
    <div v-show="focus.show" class="bg-black w-full ">
         <div class="flex flex-col">
            <div>
                <span class="material-icons text text-white flex justify-end cursor-pointer" v-on:click="close">disabled_by_default</span>
            </div> 
            <div class="flex justify-center">
            <img :src="photos[focus.index].image" class="object-cover object-center w-2/6 h-64 rounded-lg lg:h-auto group-hover:opacity-70 "> 
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
