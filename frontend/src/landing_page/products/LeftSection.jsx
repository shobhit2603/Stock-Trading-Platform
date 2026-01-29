export default function LeftSection({
  imageSrc,
  imageAlt,
  title,
  description,
  primaryAction,
  secondaryAction,
  storeImages,
}) {
  return (
    <section className="flex items-center justify-between gap-20 mx-40 my-15">
      <div className="w-2/3 pl-15">
        <img src={imageSrc} alt={imageAlt} />
      </div>

      <div className="w-1/3 flex flex-col gap-7">
        <h1 className="text-2xl font-medium text-neutral-700">{title}</h1>

        <p className="text-neutral-600 whitespace-pre-line">{description}</p>

        <div className="flex gap-15">
          <button className="text-blue-600 cursor-pointer hover:text-neutral-950">
            {primaryAction.text} <i className={primaryAction.icon}></i>
          </button>

          <button className="text-blue-600 cursor-pointer hover:text-neutral-950">
            {secondaryAction.text} <i className={secondaryAction.icon}></i>
          </button>
        </div>

        <div className="flex gap-5">
          {storeImages.map((store, index) => (
            <img key={index} src={store.src} alt={store.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
