<template>
    <button class="btn">
        <slot />
    </button>
</template>


<style scoped>
    .btn {
        padding: .4rem;
        background-color: var(--color-green);
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
    }
</style>
