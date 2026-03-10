const Careers = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Talent & Employment Development
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed mb-8">
        Building infrastructure capacity within Bihar is central to our mission.
        We are developing a local team of engineers and professionals and actively
        seek to work with graduates from IIT Patna and other local & regional
        institutions who want to build meaningful careers close to home.
      </p>

      <hr className="my-10 border-gray-300" />

      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Build Where It Matters
      </h2>

      <p className="text-gray-700 mb-6">
        We are looking for engineers, analysts, and project professionals from
        Bihar who want to:
      </p>

      {/* List */}
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
        <li>Work on real infrastructure projects</li>
        <li>Learn global standards of engineering and finance</li>
        <li>Build long-term careers without leaving the state</li>
      </ul>

      {/* Closing Text */}
      <p className="text-gray-700 leading-relaxed">
        If you want to help shape Bihar’s infrastructure future, we would like
        to hear from you.
      </p>

    </div>
  );
};

export default Careers;