interface GridCardProps {
    id: string
    title: string
}

function GridCard({id, title}: GridCardProps) {

    const abrirTarjeta= (event: any) => {
        document.querySelectorAll(".grid-card").forEach((card) => {
            if (card.id !== event?.target.id) {
                card.classList.remove("opened");
            }
        });
        event?.target.classList.toggle("opened");
    }

    return ( 
        <div
            className="grid-card"
            id={id}
            onClick={abrirTarjeta}
        >
            <h3>{title}</h3>
        </div>  
     );
}

export default GridCard;