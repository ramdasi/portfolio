const Education = ({ education }) => (
    <div className="mt-0 space-y-4">
      {education.map((item, index) => (
        <div key={index} className="p-4 bg-blue-900 bg-opacity-20 text-slate-300 rounded-lg shadow">
          <h3 className="text-xl font-bold">{item.degree}</h3>
          <p className="text-gray-400">{item.institution} | {item.year}</p>
          <p className="mt-2">CGPA: {item.cgpa || 'N/A'} | Percentage: {item.percentage || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
  
  export default Education;
  