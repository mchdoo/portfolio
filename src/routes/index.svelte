<style lang="scss">
    @import "../static/styles.scss";
</style>

<script lang="ts">
    import { each } from 'svelte/internal';
    import { fade } from 'svelte/transition'
    
        let y: number;
    
        const langs = [
            "cplusplus", 
            "kotlin",
            "c", 
            "python", 
            "typescript", 
            "java",
            "html5",
            "javascript", 
            "css3",
            "csharp",
            "sass",
        ]

        const techs = [
            "nextjs-line ",
            "vuejs",
            "react",
            "svelte",
            "electron-original ",
            "flutter",
            "nodejs",
            "mysql",
        ]

        const tools = [
            "vscode",
            "androidstudio",
            "github",
            "visualstudio",
            "jetbrains",
        ]
    
</script>

<!-- HTML -->

<section class="section main">
    <h1 class="title title-main">Pedro <br> Machado</h1>
    {#if y < 400}
        <p transition:fade="{{duration: 1000}}" id="scrolltext">Scroll down</p>
    {/if}
</section>

<section class="section tech-stack">
    <h2 class="title">Lenguajes</h2>
    <div class="langs">
        {#each langs as lang, index}
            {#if y > 300}
                <i transition:fade="{{delay: 100 * index}}" 
                    class="devicon-{lang}-plain lang-item"/>
                    {/if}
        {/each}
    </div>
    
    <hr>
    
    <h2 class="title">Tecnologías</h2>
    <div class="langs">
        {#each techs as tech, index}
            {#if y > 500}
            <i transition:fade="{{delay: 100 +200 * index}}" 
            class="devicon-{tech}-plain lang-item"/>
            {/if}
        {/each}
    </div>
    
    <hr>
    
    <h2 class="title">Herramientas</h2>
    <div class="langs">
        {#each tools as tool, index}
            {#if y > 700}
                <i transition:fade="{{delay: 100 + (500 * index)}}" 
                    class="devicon-{tool}-plain lang-item"/>
            {/if}
        {/each}
    </div>
</section>

<section class="section">
    <h2 class="title">Sobre mí</h2>
    <p>Nací en Buenos Aires, Argentina en julio de 2006, y desde los 14 años (aprox) le agarré el gusto a la programación.
    <em>Todo lo que aprendí fué por mi cuenta,</em> utilizando las herramientas que me brinda el internet y formandome con mi propia experiencia y proyectos personales. Además de programar, diseño y animo en 3D.</p>
</section>

<svelte:window  bind:scrollY={y} />