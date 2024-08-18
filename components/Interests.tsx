const Interests = ({ interests }) => (
    <div className="mt-0 space-y-4">
      {interests.map((interest, index) => (
        <div key={index} className="p-4 bg-blue-900 bg-opacity-20 text-slate-300 rounded-lg shadow">
          <p>{interest}</p>
        </div>
      ))}
    </div>
  );
  
  export default Interests;
  