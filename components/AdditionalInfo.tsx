const AdditionalInfo = ({ additional }:any) => (
    <div className="mt-0 space-y-4">
      {additional.map((item, index) => (
        <div key={index} className="p-4 bg-blue-900 bg-opacity-20 text-slate-300 rounded-lg shadow">
          <strong>{item.title}:</strong> {item.content}
        </div>
      ))}
    </div>
  );
  
  export default AdditionalInfo;
  