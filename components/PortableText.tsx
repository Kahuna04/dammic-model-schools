import { PortableText as PT, type PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-semibold mt-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-5">{children}</h2>,
    normal: ({ children }) => <p className="mt-3 leading-relaxed text-gray-800">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-1 mt-3">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 space-y-1 mt-3">{children}</ol>,
  },
};

export default function PortableText({ value }: { value: any }) {
  return <PT value={value} components={components} />;
}
