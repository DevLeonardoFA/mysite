import start from '/img/start.webp';

export function Wellcome(){
    return (
        <section className="start" id="start">
            <div className="conteudo">
                <h1>Hi! I'm Leo </h1>
                <h3>Here I'll share all my ideas and my current projects, <br />
                if you want to see them and send me a message I'll be glad</h3>
            </div>
            <img src={start} alt="start"/>
        </section>
    );
}