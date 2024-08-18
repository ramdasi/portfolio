const Projects = ({ projects }) => (
    <div className="mt-0 space-y-4">
      {projects.map((project, index) => (
        <div key={index} className="p-4 bg-blue-900 bg-opacity-20 text-slate-300 rounded-lg shadow">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="text-gray-400 italic">{project.description}</p>
          <ul className="list-disc pl-5 mt-2">
            {project.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
  
  export default Projects;
  