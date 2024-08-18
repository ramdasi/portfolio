const SkillList = ({ skills }:any) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill:any, index:any) => (
        <div key={index} className="p-4 bg-blue-900 bg-opacity-20 text-slate-300 rounded shadow">
          <strong>{skill.title}:</strong> {skill.details}
        </div>
      ))}
    </div>
  );
  export default SkillList;
  