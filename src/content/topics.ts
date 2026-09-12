// Optional display overrides for topic slugs. A topic doesn't need an entry
// here to exist — tagging any blog post's frontmatter with a new slug in
// `topics: [...]` is enough to generate its page. Add an entry only when the
// auto-generated title (slug words, title-cased) isn't quite right, or when
// you want a short blurb to show at the top of that topic's page.
export const TOPIC_LABELS: Record<string, { title?: string; description?: string }> = {
	'high-performance-apis': {
		title: 'High Performance APIs',
	},
	'software-systems-primer': {
		title: 'Software Systems Primer',
		description: 'Breaking down the elements that make up a software system.',
	},
	'data-modeling': {
		title: 'Data Modeling',
	},
};

export function getTopicTitle(slug: string): string {
	return (
		TOPIC_LABELS[slug]?.title ??
		slug
			.split('-')
			.map((word) => word[0].toUpperCase() + word.slice(1))
			.join(' ')
	);
}

export function getTopicDescription(slug: string): string | undefined {
	return TOPIC_LABELS[slug]?.description;
}
