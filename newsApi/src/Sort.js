export default function sortNews(a, b){

    if(a.publishedAt < b.publishedAt) return 1;
    if(a.publishedAt > b.publishedAt) return -1;

    return 0;
}