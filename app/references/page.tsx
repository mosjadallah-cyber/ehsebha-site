export default function ReferencesPage() {
    const sources = [
        ["USDA FoodData Central", "https://fdc.nal.usda.gov/"],
        ["Nutritionix", "https://www.nutritionix.com/"],
        ["Mayo Clinic", "https://www.mayoclinic.org/"],
        ["Cleveland Clinic", "https://my.clevelandclinic.org/"],
        ["NHS", "https://www.nhs.uk/"],
        ["World Health Organization (WHO)", "https://www.who.int/"],
    ];

    return (
        <main
            dir="rtl"
            className="mx-auto max-w-4xl px-6 py-12"
        >
            <div className="mb-6">
                <a
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-orange-200 px-4 py-2 text-sm font-bold text-orange-600 transition hover:bg-orange-50"
                >
                    ← العودة للرئيسية
                </a>
            </div>
            <h1 className="mb-4 text-center text-4xl font-black">
                المصادر والمراجع
            </h1>

            <p className="mb-8 text-center text-gray-600">
                يعتمد تطبيق <strong>احسبها</strong> على قواعد بيانات غذائية ومراجع علمية
                موثوقة، ويتم تحديث المعلومات بشكل دوري.
            </p>

            <div className="space-y-3">
                {sources.map(([name, link]) => (
                    <a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg border border-orange-200 px-5 py-3 transition hover:bg-orange-50"
                    >
                        <span className="font-semibold">{name}</span>
                        <span className="text-sm text-orange-600">فتح ↗</span>
                    </a>
                ))}
            </div>
        </main>
    );
}