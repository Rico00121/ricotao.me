import { IconType } from 'react-icons';
import Image from 'next/image';

interface SkillIconProps {
  icon?: IconType;
  imageSrc?: string;
  name: string;
  color?: string;
}

export default function SkillIcon({ icon: Icon, imageSrc, name, color }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16 flex items-center justify-center">
        {Icon ? (
          <Icon size={48} className={color} />
        ) : (
          <Image 
            src={imageSrc!} 
            alt={name}
            width={48} 
            height={48}
          />
        )}
      </div>
      <span className="text-gray-600 dark:text-gray-300">{name}</span>
    </div>
  );
} 