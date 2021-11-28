<template>
   <base-card>
        <form class="form" @submit.prevent="submitHandler">
            <form-group 
                :field="title.label" 
                :labelName="title.label">
                <input 
                    type="text" 
                    v-model.trim="title.val"
                    id="title" 
                />
            </form-group>

            <form-group 
                :field="mount.label" 
                :labelName="mount.label">
                <input 
                    type="number" 
                    v-model.number="mount.val" 
                    id="mount"
                />
            </form-group>

            <form-group
                :field="type.label"
                :labelName="type.label"
            >
                <div class="form-checkbox">
                    <input 
                        type="radio" 
                        id="exp" 
                        v-model="type.val" 
                        value="exp" 
                    />
                    <label for="exp" data-test="exp">Expense</label>
                </div>

                <div class="form-checkbox">
                    <input 
                        type="radio" 
                        id="inc" 
                        v-model="type.val" 
                        value="inc" 
                    />
                    <label for="inc" data-test="inc">Income</label>
                </div>
            </form-group>

            <p v-if="formInValid" class="error-message">Please check your input</p>
            
            <base-button data-test="btn">CREATE</base-button>
        </form>
   </base-card>
</template>

<script>
import FormGroup from './../../../molecules/FormGroup';
import BaseButton from './../../../atoms/BaseButton';
import BaseCard from './../../../atoms/BaseCard';
export default {
    emits: ['save-data'],
    components: {
        FormGroup,
        BaseButton,
        BaseCard
    },

    data(){
        return {
            title: {
                label: 'Title',
                val: ''
            },
            mount: {
                label: 'Mount',
                val: ''
            },
            type: {
                label: 'Type',
                val: ''
            },
            formInValid: false
        }
    },

    methods: {
        submitHandler(){
            if( this.title.val === "" || this.mount.val === "" || this.type.val === "") {
                this.formInValid = true;
                return false;
            }

            this.formInValid = false;

            const payload = {
                title: this.title.val,
                total: +this.mount.val,
                type: this.type.val
            }
            
            this.$emit('save-data', payload);

            this.clearFormValue();

            this.$router.replace({
                name: 'MoneyTrackerTransactionList'
            })
        },

        clearFormValue(){
            this.title.val = '';
            this.mount.val = '';
            this.type.val = '';
            this.formInValid = false;
        }

    }
}
</script>

<style scoped>
    form {
        margin-top: 1rem;
    }
    input {
        /* width: 100%; */
        border: 1px solid #ddd;
        outline: none;
        padding: .6rem .9rem; 
        font-size: 1rem;
        border-radius: .3rem;
    }

    .form-checkbox:not(:last-child) {
        margin-bottom: 1rem;
    }

    .error-message {
        margin: 1rem 0;
        color: var(--color-red);
    }
</style>
