export default function Footer() {
    return (
        <footer className="shrink-0 border-t border-orange-100 bg-white py-2">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-6">
                <h3 className="text-xl font-black text-orange-500">احسبها</h3>

                <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-gray-600">
                    <a href="/privacy">سياسة الخصوصية</a>

                    <a href="/terms">شروط الاستخدام</a>

                    <a href="/references">المصادر والمراجع</a>

                    <a href="/contact">
                        تواصل معنا
                    </a>
                </div>

                <p className="text-center text-xs text-gray-400">
                    © 2026 Ehsebha. جميع الحقوق محفوظة.
                </p>
            </div>
        </footer>
    );
}