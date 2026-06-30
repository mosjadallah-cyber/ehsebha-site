export default function TermsPage() {
    return (
        <main dir="rtl" className="mx-auto max-w-4xl px-6 py-12">

            <a
                href="/"
                className="mb-8 inline-flex items-center rounded-full bg-orange-500 px-5 py-2 font-bold text-white hover:bg-orange-600"
            >
                ← العودة للرئيسية
            </a>

            <h1 className="mb-2 text-center text-4xl font-black">
                شروط الاستخدام
            </h1>

            <p className="mb-10 text-center text-gray-500">
                آخر تحديث: يونيو 2026
            </p>

            <div className="space-y-8 leading-8 text-gray-700">

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        استخدام التطبيق
                    </h2>

                    <p>
                        باستخدام تطبيق <strong>احسبها</strong> فإنك توافق على الالتزام بهذه
                        الشروط واستخدام التطبيق بطريقة قانونية ومسؤولة.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        الاشتراكات
                    </h2>

                    <p>
                        يتم إدارة جميع الاشتراكات وعمليات الدفع من خلال
                        Apple App Store أو Google Play Store،
                        وتخضع لسياسات وشروط كل متجر.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        دقة المعلومات
                    </h2>

                    <p>
                        يوفر التطبيق تقديرات غذائية مبنية على مصادر موثوقة، لكنها قد تختلف
                        باختلاف طريقة التحضير أو المكونات، لذلك لا ينبغي اعتبارها بديلاً عن
                        الاستشارة الطبية أو الغذائية المتخصصة.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        الملكية الفكرية
                    </h2>

                    <p>
                        جميع حقوق تطبيق احسبها، بما في ذلك التصميم والمحتوى والبرمجيات،
                        محفوظة لأصحاب التطبيق، ولا يجوز نسخ أو إعادة استخدام أي جزء منه دون
                        إذن مسبق.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        تعديل الشروط
                    </h2>

                    <p>
                        نحتفظ بحق تعديل شروط الاستخدام في أي وقت، وسيتم نشر أي تحديث على هذه
                        الصفحة.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        التواصل معنا
                    </h2>

                    <p>
                        لأي استفسار يتعلق بشروط الاستخدام يمكن التواصل معنا عبر:
                    </p>

                    <p className="mt-3 font-bold text-orange-600">
                        mos.jadallah@gmail.com
                    </p>
                </section>

            </div>

        </main>
    );
}