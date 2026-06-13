export default function Card() {
  return (
    <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <div className="relative h-96 md:h-full bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden group shadow-2xl">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src="https://image.cnbcfm.com/api/v1/image/104300870-steve_jobs.jpg?v=1532563905"
          alt="Steve Jobs"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute top-6 right-6 bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
          Legend
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center">
        {/* Role */}
        <p className="text-orange-500 font-semibold text-sm mb-2 uppercase tracking-wider">
          Co-founder & Visionary
        </p>

        {/* Title */}
        <h5 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
          Steven Paul Jobs
        </h5>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 italic">
          "The intersection of technology and humanity"
        </p>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-base mb-6 leading-relaxed">
          Visionary entrepreneur who revolutionized multiple industries.
          Co-founder of Apple Computer, inventor of the graphical user
          interface, and pioneer of personal computing. Changed how we interact
          with technology.
        </p>

        {/* Achievements */}
        <div className="bg-orange-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Key Achievements
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>✓ Founded Apple Computer Company (1976)</li>
            <li>✓ Revolutionized with Macintosh & iPhone</li>
            <li>✓ Created Pixar Animation Studios</li>
            <li>✓ Visionary design philosophy: Simplicity</li>
          </ul>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-200 dark:border-gray-700">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
              Born
            </p>
            <p className="font-bold text-gray-900 dark:text-white">1955</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
              Companies
            </p>
            <p className="font-bold text-gray-900 dark:text-white">3 Iconic</p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
              Impact
            </p>
            <p className="font-bold text-gray-900 dark:text-white">Global</p>
          </div>
        </div>

        {/* Legacy */}
        <div>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Legacy
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Inspired billions to think different. His design philosophy,
            innovation mindset, and commitment to excellence continue to
            influence technology and design worldwide.
          </p>
        </div>

        {/* Button */}
        <a
          href="/"
          className="w-full mt-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:shadow-xl active:scale-95 text-center text-lg"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
