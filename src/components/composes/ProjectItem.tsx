import Image from "next/image";

interface ProjectItemProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  url?: string;
  isReversed?: boolean;
}

export default function ProjectItem({
  title,
  description,
  imageSrc,
  tags,
  url,
  isReversed = false,
}: ProjectItemProps) {
  return (
    <div 
      className={`flex flex-col md:flex-row items-start gap-12 ${
        isReversed ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* 图片部分 */}
      <div className="w-full md:w-1/2">
        <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="aspect-[16/10]">
            <Image
              src={imageSrc}
              alt={title}
              width={1200}
              height={750}
              className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
              priority={!isReversed}
            />
          </div>
        </div>
      </div>

      {/* 内容部分 */}
      <div className="w-full md:w-1/2 space-y-4">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-800 dark:text-gray-200 text-lg">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-300"
          >
            View Project
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
} 