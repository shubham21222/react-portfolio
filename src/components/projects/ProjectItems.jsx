import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

const categorySlug = (cat) =>
  cat ? cat.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "default";

const monogram = (title) => {
  const words = title.replace(/[^A-Za-z0-9 ]/g, " ").trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const ProjectItems = ({ item }) => {
  const slug = categorySlug(item.category);

  return (
    <article className="project__card">
      <div className={`project__cover project__cover--${slug}`}>
        {item.image ? (
          <img
            className="project__img"
            src={item.image}
            alt={item.title}
            loading="lazy"
          />
        ) : (
          <span className="project__monogram" aria-hidden="true">
            {monogram(item.title)}
          </span>
        )}
        <span className="project__badge">{item.category}</span>
      </div>

      <div className="project__body">
        <h3 className="project__title">{item.title}</h3>
        <p className="project__description">{item.description}</p>

        {item.tags && (
          <ul className="project__tags">
            {item.tags.map((tag, i) => (
              <li className="project__tag" key={i}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="project__actions">
          {item.link ? (
            <a
              href={item.link}
              className="project__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
              <HiOutlineArrowSmRight className="project__button-icon" />
            </a>
          ) : (
            <span className="project__button project__button--muted">
              <FiExternalLink className="project__button-icon" />
              Private / client work
            </span>
          )}
          {item.year && <span className="project__year">{item.year}</span>}
        </div>
      </div>
    </article>
  );
};

export default ProjectItems;
