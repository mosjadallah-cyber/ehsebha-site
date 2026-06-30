import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://ehsebha.app",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://ehsebha.app/privacy",
            lastModified: new Date(),
        },
        {
            url: "https://ehsebha.app/terms",
            lastModified: new Date(),
        },
        {
            url: "https://ehsebha.app/references",
            lastModified: new Date(),
        },
    ];
}