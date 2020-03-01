<template>
    <v-layout column>
        <v-row no-gutters>
            <template title="Characters">
                <v-col
                    class="font-weight-bold"
                    outlined
                    tile
                    v-for="(character, index) in characters"
                    :key="index">
                    <br>
                    {{character.name}}
                    <br><br>

                    <v-row align="center" justify="center">
                        <v-img
                            :src="character.characterImageUrl"
                            contain
                            aspect-ratio="1"
                            max-width="500"
                            max-height="300"/>
                    </v-row>

                    <br><br>
                    <button
                        dark
                        class="red"
                        @click="removeItem(index)">
                        Remove
                    </button>
                </v-col>
            </template>
        </v-row>
    </v-layout>
</template>

<script>

</script>

<!-- MODIFIER ROUTE -->

<style scoped>
</style>
