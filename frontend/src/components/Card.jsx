function Card({ title, description, image, action }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden w-80">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>

        <p className="text-gray-600 mt-2">
          {description}
        </p>

        {action && (
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            {action}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;