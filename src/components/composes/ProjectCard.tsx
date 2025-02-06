import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  url?: string;
}

export default function ProjectCard({ title, description, imageSrc, tags, url }: ProjectCardProps) {
  const CardContent = () => (
    <div className="group bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-lg transition-all">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return url ? (
    <Link href={url} className="block">
      <CardContent />
    </Link>
  ) : (
    <CardContent />
  );
} 