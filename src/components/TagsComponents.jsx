import React from 'react';
import ReactJS from '@/components/icons/ReactJS.astro';
import ReactNative from '@/components/icons/ReactNative.astro';
import NodeJS from '@/components/icons/NodeJS.astro';
import Express from '@/components/icons/Express.astro';
import NextJS from '@/components/icons/NextJS.astro';
import Tailwind from '@/components/icons/Tailwind.astro';

const TAGS = {
  REACT: {
    name: "React",
    class: "bg-slate-900 text-white",
    icon: ReactJS,
  },
  REACT_NATIVE: {
    name: "React Native",
    class: "bg-slate-900 text-white",
    icon: ReactNative,
  },
  NODEJS: {
    name: "Node.js",
    class: "bg-zinc-50 text-black",
    icon: NodeJS,
  },
  EXPRESS: {
    name: "Express",
    class: "bg-zinc-50 text-black",
    icon: Express,
  },
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
};

const TagsComponent = ({ tags }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tagKey, index) => {
        const tag = TAGS[tagKey];
        if (!tag) return null;
        
        const Icon = tag.icon;
        return (
          <li key={index} className={`flex items-center gap-2 rounded-full py-1 px-3 text-xs ${tag.class}`}>
            <Icon className="w-4 h-4" />
            <span>{tag.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TagsComponent;
