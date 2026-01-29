export default function RightSection({
  title,
  description,
  action,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className="flex items-center justify-between gap-20 mx-40 my-15">
      <div className="w-1/3 flex flex-col gap-7">
        <h1 className="text-2xl font-medium text-neutral-700">{title}</h1>

        <p className="text-neutral-600 whitespace-pre-line">{description}</p>

        <button className="text-blue-600 w-fit cursor-pointer hover:text-neutral-950">
          {action.text} <i className={action.icon}></i>
        </button>
      </div>

      <div className="w-2/3 pl-30">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  );
}
