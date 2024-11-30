const TextBlock = ({ title, description }) => (
  <div className="bg-white p-6">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-700 mt-2">{description}</p>
  </div>
);

export default TextBlock;
