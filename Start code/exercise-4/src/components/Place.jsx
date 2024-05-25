export default function Place(items) {
  const {key, title, image} = items;
  console.log(image);
  return (
    <li key={key} className="place-item">
      <button>
        <img src={image.src} alt={image.alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
