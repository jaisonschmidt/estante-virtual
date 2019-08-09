<template>
    <div class="bannerFull">
        
        <div>
            <div class="bannerFull--title">
                {{ title || "Estante Virtual" }}
            </div>
            <div class="bannerFull--subtitle">
                {{ subtitle || "Compartilhe Conhecimento" }}
            </div>
        </div>        
        
    </div>
</template>

<script>
    /**
     * BannerFull
     * description: Full width banner, usade like page title
     */
    export default {
        name: 'BannerFull',
        props: {
            title: String, // page title
            subtitle: String // page subtitle
        }
    }
</script>

<style lang="scss" scoped>
    .bannerFull {
        background: url('../assets/img/green.png');

        -webkit-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.1);
        -moz-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.1);
        box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.1);

        padding: 40px 0;

        @include desktop {
            padding: 80px 0;
        }

        &--title {
            color: white;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
        }
        &--subtitle {
            color: white;
            text-align: center;
        }
    }
</style>