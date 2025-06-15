export interface NewsItem {
    id: string;
    title: string;
    urlThumbnail: string | null;
    spoilerArticle?: string;
    content?: string;
    datePublished: Date;
}
