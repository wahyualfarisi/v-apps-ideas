<template>
    <li 
        v-if="page === 'left'"
        @click="$emit('onPageChange', currentPage - 1)"
        >
       &#8592;
    </li>
     <li 
        v-else-if="page === 'right'"
        @click="$emit('onPageChange', currentPage + 1)"
        >
        &#8594;
    </li>
     <li 
        v-else
        :class="{ active: page === currentPage }"
        @click="$emit('onPageChange', page)"
        >
        {{ page }}
    </li>
    

</template>

<script>
export default {
    emits: ['onPageChange'],
    props: {
        page: {
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
li {
    padding: .4rem .8rem;
    border-radius: 50%;
    font-size: .8rem;
    font-weight: 800;
}

li.active {
    background-color: #DFD8CA;
    box-shadow: 2px 2px 6px rgba(223, 216, 202, 25%);
}

li:hover {
    cursor: pointer;
}

li:not(:last-child){
    margin-right: 1rem;
}
</style>