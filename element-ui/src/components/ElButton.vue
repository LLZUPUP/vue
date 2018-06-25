<template>
    <button class="el-button" :class="[
    type?'el-button--'+type : '',{'is-disabled':buttonDisabled,'isloading':loading}
    ]" :disabled="buttonDisabled" >
        <i class="el-icon-loading" v-if="loading"></i>
        <i v-if="icon&&!loading" :class="icon"></i>
        <slot></slot>
    </button>
</template>
<style>

</style>

<script>
export default {
    name: 'ElButton',
    props: {
        disabled: Boolean,
        type: {
            type: String,
            default: 'default'
        },
        loading: Boolean,
        icon: {
            type:String,
            default: ''
        }
    },
    computed: {
        buttonDisabled() {
            return this.disabled;
        }
    }
}
</script>
