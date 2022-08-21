import start from '../assets/img/start.webp';

export function About(){
    return (
        <section className="start" id="start">
            <div className="conteudo">
                <h1>Hi! I'm Leo</h1>
                <h2>Here I'll share all my ideas and my current projects, <br />
                if you want to see them and send me a message I'll be glad</h2>
            </div>
            <img src={start} alt="start"/>
        </section>
    );
}