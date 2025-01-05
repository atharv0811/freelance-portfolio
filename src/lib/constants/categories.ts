export const CATEGORIES = [
    'Technology',
    'Design',
    'Development',
    'Business',
    'Marketing',
    'Tutorial',
    'News',
    'Other'
] as const;

export type Category = typeof CATEGORIES[number];