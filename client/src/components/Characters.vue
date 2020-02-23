<template>
    <v-layout column>
        <v-flex>
            <panel title="Characters">
                <div 
                    v-for="character in characters" 
                    :key="character.name">
                    {{character.name}}
                    {{character.image}}
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>

import Panel from '@/components/Panel'
export default {
    components: {
        Panel
    },
    data () {
        return {
            characters: [
                {
                    name: 'Mario',
                    image: 'Test.jpeg'
                }
            ]
        }
    }
}
</script>

<!-- -->
<style scoped>
</style>
