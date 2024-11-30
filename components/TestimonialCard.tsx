const TestimonialCard = ({ stars, title, author, content }) => (
  <div className="bg-white p-6 shadow-md rounded-md">
    <div className="flex items-center">
      <span className="text-green-500 font-bold text-lg">{stars}</span>
    </div>
    <h4 className="font-bold mt-2">{title}</h4>
    <p className="text-sm text-gray-500">{author}</p>
    <p className="text-gray-700 mt-2">{content}</p>
  </div>
);

export default TestimonialCard;
