import './Card.css'

export default function Card({ card, handleChoice, flipped, disabled }) {

    const handleClick = (card) => {
        if (!disabled)
            handleChoice(card);
    }

    return (
        <div>
            <div className="card">
                <div className={flipped ? "flipped" : ""}>
                    <img src={card.src} className="front" alt="card front" />
                    <img src="/img/cover.png" onClick={() => handleClick(card)} className="back" alt="card back" />
                </div>
            </div>
        </div>
    )
}
