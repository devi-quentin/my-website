import React from "react"
import CardType from "./cardType"

const Card = ({ data: { title, description, image, tags, href } }: CardType) => {
  return (
    <article className="card">
      {/* IMAGE */}
      <figure className="card__figure">
        <img src={image} alt={title} />
      </figure>

      {/* TITRE */}
      <h1 className="card__title">{title}</h1>

      {/* DESCRIPTION */}
      <p className="card__description">{description}</p>

      {/* FOOTER */}
      <footer className="card__footer">
        {/* TAGS */}
        <ul className="card__footer__tags">
          {tags.map((tag, index) => <li className="card__footer__tags__item">{tag}</li>)}
        </ul>

        {/* LIEN URL */}
        <a href={href} className="card__btn">-</a>
      </footer>
    </article>
  )
}

export default Card
