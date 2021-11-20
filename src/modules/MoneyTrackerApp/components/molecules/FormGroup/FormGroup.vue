<template>
    <div class="form-group">
        <label :for="field">{{ labelName }}</label>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        field: {
            required: true,
            type: String
        },
        labelName: {
            required: true,
            type: String
        }
    }
}
</script>

<style scoped>
    .form-group:not(:last-child){
        margin-bottom: 2rem;
    }
    label {
        display: block;
        margin-bottom: .5rem;
    }
</style>