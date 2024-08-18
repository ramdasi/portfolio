const Experience = ({ experience }) => (
    <div className="mt-0 space-y-4">
      {experience.map((item, index) => (
        <div key={index} className="p-4 bg-blue-900 bg-opacity-20 text-slate-300 rounded-lg shadow">
          <h3 className="text-xl font-bold">{item.position}</h3>
          <p className="text-gray-400">{item.company} | {item.duration}</p>
          <ul className="list-disc pl-5 mt-2">
            {item.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
  export default Experience;
  