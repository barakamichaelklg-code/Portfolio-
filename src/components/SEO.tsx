import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

export const SEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | Baraka Michael KLG`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
};
