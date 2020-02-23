<template>
    <div class="white elevation-2">
        <v-toolbar flat dense class="red" dark>
            <v-toolbar-title align="center" justify="center">{{title}}</v-toolbar-title>
        </v-toolbar>
        
        <div>
            <slot>
                No slot content defined.
            </slot>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        'title'
    ]
}
</script>

<!-- -->
<style scoped>
</style>
