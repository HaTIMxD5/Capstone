import "../App.css";

export default function Article({
  h1element,
  image,
  alternative,
  imgClass,
  paragraph,
  articleClass,
}) {
  return (
    <article className={articleClass}>
      <h1>{h1element}</h1>
      <p>
        {paragraph || (
          <>
            Lorem ipsum dolor sit amet consectetur adi,pisicing elit.
            <br /> Accusamus velit tempora commodi? Perspiciatis
            <br /> accusantium nihil dignissimos temporibus aliquid
            <br /> tenetur itaque dolore eveniet veritatis assumenda,
            <br /> voluptate eaque officia totam magnam ea?
          </>
        )}
      </p>
      <div className="imgWrapper">
        <img src={image} alt={alternative} className={imgClass} />
        <div className="overlay"></div>
      </div>
    </article>
  );
}
