import { useEffect } from 'react';

/**
 * Custom hook to set the document title for each page.
 * Helps with SEO by giving each page a unique, descriptive title.
 */
export default function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}
