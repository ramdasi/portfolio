const Section = ({ title,id, children }:any) => (
    <section id={id} className="my-8 duration-700 ">
      <h2 className="mt-16 text-2xl font-semibold pb-1 text-blue-100 border-b-2 border-blue-700">{title}</h2>
      <div className="mt-4 shadow shadow-blue-900 p-3 rounded-lg">{children}</div>
    </section>
  );
  export default Section;
  