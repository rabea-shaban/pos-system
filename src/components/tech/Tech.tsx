const Tech = () => {
  return (
    <>


      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Project Architecture & Tech Stack
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          This POS system is built using a modular and scalable architecture,
          ensuring clean code separation, maintainability, and high performance.
          The project leverages modern frontend tools and best practices.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Structure */}
          <div className="bg-black text-green-400 p-6 rounded-xl text-sm overflow-x-auto">
            <pre>
              {`src/
├── api/          # API calls & Axios config
├── assets/       # Images & static files
├── components/   # Reusable UI components
├── pages/        # Application pages
├── redux/        # Global state management
├── router/       # Routing configuration
├── styles/       # Global styles
├── types/        # TypeScript types
├── validation/   # Zod schemas
│   └── auth.schema.ts
`}
            </pre>
          </div>

          {/* Tech Stack */}
          <div className="grid grid-cols-2 gap-4">
            {[
              "React.js",
              "TypeScript",
              "Tailwind CSS",
              "Redux Toolkit",
              "React Query",
              "React Router DOM",
              "Axios",
              "React Hook Form",
              "Zod Validation",
              "Headless UI",
              "Lucide Icons",
              "JWT Decode",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-gray-100 p-3 rounded-lg text-center font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tech;
