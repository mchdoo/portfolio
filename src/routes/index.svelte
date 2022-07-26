<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    @font-face {
        font-family: 'Creato Display';
        src: url('../static/creatoDisplay.woff');
    }

    $off_black: rgb(0, 30, 50);
    $shadow: 0 10px 40px rgba($off_black, 0.2);

    :global(body) {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
    }

    .title {
        font-family: 'Creato Display', sans-serif;
        color: $off_black;
        line-height: 90%;
        user-select: none;
        word-wrap: break-word;
        margin-top: 15px;
        font-size: max(2vw, 30px);

        &-main {
            font-size: max(8vw, 60px);
            padding: 50px;
            box-shadow: $shadow inset;

            transition: all 500ms ease-out;

            &:hover {
                box-shadow: 0 10px 40px rgba($off_black, 0.4) inset;
            }
        }
    }

    .section {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        p {
            width: min(400px, 80vw);
            margin: 0;
        }

        &.main {
            box-shadow: $shadow;

            #scrolltext {
                position: absolute;
                bottom: 50px;
                opacity: 0.5;
                text-align: center;
                animation: bounce 2s ease-in-out infinite;
                user-select: none;
            }
        }

        &.tech-stack {
            background-color: rgba($off_black, 0.1);
        }

        &.sobre-mi {
            background: rgba($off_black, 0.6);
            color: rgba(white, 0.5);

            .title {
                color: white;
                opacity: 0.8;
            }
        }

        &.contacto {

            position: relative;

            background: radial-gradient(circle at 0 100%, rgba($off_black, 0.3), white);
            ;

            .input {
                padding: 10px 15px;
                border-radius: 10px;
                font-weight: 400;
                font-size: medium;
                border: none;
                outline: none;
                outline: 0px solid rgba($off_black, 0.2);
                background-color: rgba($off_black, 0.05);

                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                transition: 80ms ease-out;

                &:focus {
                    color: $off_black;
                    outline: 3px solid rgba($off_black, 0.2);
                }

                &.textarea {
                    min-height: 10vh;
                    min-width: min(400px, 80vw);
                    resize: vertical;
                }

            }

            label {
                margin-bottom: 10px;
                color: $off_black;

                p {
                    font-size: small;
                    opacity: 0.5;
                }
            }

            form {
                display: flex;
                justify-content: left;
                flex-direction: column;
            }

            button {
                margin-top: 20px;
                border: none;
                padding: 10px;
                font-family: inherit;
                border-radius: 10px;
                background-color: $off_black;
                color: white;
                font-weight: 500;
                font-size: medium;

                transition: 200ms ease-in-out;

                cursor: pointer;

                &:hover {
                    filter: saturate(3);
                    box-shadow: rgba($off_black, 0.3) 0 8px 20px;
                    transform: translateY(-5px);
                }

                &:disabled {
                    background-color: $off_black;
                    opacity: 0.3;

                    &:hover {
                        transform: rotate(-1deg);
                        box-shadow: none;
                        background-color: red;
                    }
                }

            }

            #socials {
                margin-top: 20px;
                position: absolute;
                bottom: 10px;

                display: flex;

                a {
                    text-decoration: none;
                    font-size: 30px;
                    color: rgba($off_black, 0.5);
                }
            }
        }
    }

    .langs {

        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        overflow-x: auto;

        .lang-item {
            margin: 0 10px;
            font-size: 10vh;
            color: rgba($off_black, 0.6);
        }
    }

    hr {
        background: rgba($off_black, 0.2);
        border: none;
        width: 50%;
        height: 1px;
        margin: 20px 0;
    }


    @keyframes bounce {
        0% {
            transform: translateY(0)
        }

        50% {
            transform: translateY(20px)
        }

        100% {
            transform: translateY(0)
        }
    }

    @media only screen and (max-width: 600px) {
        .langs {
            flex-wrap: wrap;

            .lang-item {
                font-size: 50px;
                margin: 5px;
            }
        }
    }
</style>

<script lang="ts">
    
    import { fade, slide } from 'svelte/transition'
    import {langs, techs, tools} from '../../static/data'

    let y: number;

</script>

<!-- HTML -->

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
    <script src="https://kit.fontawesome.com/6218fb5311.js" crossorigin="anonymous"></script>
    <link rel="preload" as="style" href="style.css">
</svelte:head>

<section class="section main">
    <h1 class="title title-main">Pedro <br> Machado</h1>
    {#if y < 400}
        <p transition:fade="{{duration: 1000}}" id="scrolltext">Scroll down</p>
    {/if}
</section>

<section class="section tech-stack">
    {#if y > 300}
        <h2 transition:slide="{{duration: 1000, delay: 300}}" class="title">Lenguajes</h2>
        <div class="langs">
            {#each langs as lang, index}
                <i transition:fade="{{delay: 100 * index}}" 
                    class="devicon-{lang}-plain lang-item"/>
            {/each}
        </div>
    {/if}
        
    <hr>
    
    {#if y > 500}
        <h2 transition:slide="{{duration: 1000, delay: 500}}" class="title">Tecnologías</h2>
        <div class="langs">
            {#each techs as tech, index}
                <i transition:fade="{{delay: 100 +200 * index}}" 
                    class="devicon-{tech}-plain lang-item"/>
            {/each}
        </div>
    {/if}
    
    <hr>
    
    {#if y > 700}
        <h2 transition:slide="{{duration: 1000, delay: 700}}" class="title">Herramientas</h2>
        <div class="langs">
            {#each tools as tool, index}
                <i transition:fade="{{delay: 100 + (500 * index)}}" 
                    class="devicon-{tool}-plain lang-item"/>
            {/each}
        </div>
    {/if}
</section>

<section class="section sobre-mi">
    <h2 class="title">Sobre mí</h2>
    <p>Nací en Buenos Aires, Argentina en julio de 2006, y más o menos desde los 14 años programo.
    <em>Todo lo que aprendí fué por mi cuenta,</em> utilizando las herramientas que me brinda el internet y formandome con mi propia experiencia y proyectos personales. Además de programar, diseño y animo en 3D.</p>
</section>

<section class="section contacto">
    <h2 class="title">Contactame</h2>
    <form action="https://formsubmit.co/e5339b86193f3957a656b2a7da7a735d" method="POST" >
        <label for="input">
            Tu nombre
            <p>Si querés agregá tu apellido.</p>
        </label>
        <input required name="Name" class="input" placeholder="Jane Doe">
        <label style="margin-top: 15px;" for="input">
            Tu e-mail
        </label>
        <input required name="Email" class="input" type="email" placeholder="janedoe@example.com">
        <label style="margin-top: 15px;" for="textarea">
            Tu mensaje
        </label>
        <textarea required name="Message" class="input textarea" type="text" placeholder="Lorem ipsum"/>
        <button type="submit">Enviar <i class="fa-solid fa-paper-plane"></i> </button>
    </form>

    <div id="socials">
        <a target="_blank" href="https://github.com/mchdoo"><i class="devicon-github-plain"></i></a>
        <a target="_blank" href="https://github.com/mchdoo"><img src="/youtube.svg" alt=""></a>
    </div>
</section>

<svelte:window  bind:scrollY={y} />