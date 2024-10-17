import React from 'react';
import ReactJS from './icons/ReactJS';
import ReactNative from './icons/ReactNative';
import NodeJS from './icons/NodeJS';
import Express from './icons/Express';
import NextJS from './icons/NextJS';
import Tailwind from './icons/Tailwind';

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

const TagsComponent = ({ tags, max = 0 }) => {
  // Limit the number of tags if `max` is greater than zero
  const visibleTags = max > 0 ? tags.slice(0, max) : tags;

  return (
    <ul className="flex flex-wrap gap-2">
      {visibleTags.map((tagKey, index) => {
        const tag = TAGS[tagKey];
        if (!tag) return null;
        
        const Icon = tag.icon;
        return (
          <li key={index} style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} className={`flex items-center gap-2 rounded-full py-1 px-3 text-xs ${tag.class}`}>
            <Icon className="w-6 h-4" /> 
            <span>{tag.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TagsComponent;
