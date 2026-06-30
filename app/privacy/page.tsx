export default function PrivacyPage() {
    return (
        <main dir="rtl" className="mx-auto max-w-4xl px-6 py-12">

            <a
                href="/"
                className="mb-8 inline-flex items-center rounded-full bg-orange-500 px-5 py-2 font-bold text-white hover:bg-orange-600"
            >
                ← العودة للرئيسية
            </a>

            <h1 className="mb-2 text-center text-4xl font-black">
                سياسة الخصوصية
            </h1>

            <p className="mb-10 text-center text-gray-500">
                آخر تحديث: يونيو 2026
            </p>

            <div className="space-y-10 leading-8 text-gray-700">

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        المعلومات التي نجمعها
                    </h2>

                    <p>
                        قد يجمع تطبيق <strong>احسبها</strong> بعض البيانات الضرورية لتقديم
                        خدماته وتحسين تجربة الاستخدام، مثل:
                    </p>

                    <ul className="mt-3 list-disc space-y-2 pr-6">
                        <li>السجل الغذائي والوجبات التي يقوم المستخدم بإضافتها.</li>
                        <li>بيانات الاستخدام الأساسية لتحسين أداء التطبيق.</li>
                        <li>الملاحظات أو الاقتراحات التي يرسلها المستخدم.</li>
                        <li>بيانات الاشتراك التي تتم معالجتها عبر App Store و Google Play.</li>
                    </ul>

                    <p className="mt-4">
                        لا يقوم التطبيق بجمع كلمات المرور أو بيانات البطاقات البنكية بشكل مباشر.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        استخدام البيانات
                    </h2>

                    <p>
                        تُستخدم البيانات من أجل:
                    </p>

                    <ul className="mt-3 list-disc space-y-2 pr-6">
                        <li>حفظ سجل الوجبات اليومية.</li>
                        <li>تحسين تجربة المستخدم.</li>
                        <li>تطوير ميزات التطبيق.</li>
                        <li>تحليل الأداء ومعالجة الأخطاء التقنية.</li>
                        <li>تقديم خدمات الاشتراك والميزات المدفوعة.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        حماية البيانات
                    </h2>

                    <p>
                        يتم تخزين بعض البيانات محليًا على جهاز المستخدم، بينما تتم معالجة بعض
                        البيانات باستخدام خدمات موثوقة مثل Firebase وGoogle Play وApple App Store.
                        ويتم اتخاذ إجراءات تقنية مناسبة لحماية البيانات من الوصول غير المصرح به.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        مشاركة البيانات
                    </h2>

                    <p>
                        لا يقوم تطبيق احسبها ببيع بيانات المستخدمين أو مشاركتها مع أي جهة
                        خارجية لأغراض تسويقية أو تجارية.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        حذف البيانات
                    </h2>

                    <p>
                        يمكن للمستخدم طلب حذف بياناته في أي وقت عبر البريد الإلكتروني:
                    </p>

                    <p className="mt-3 font-bold text-orange-600">
                        mos.jadallah@gmail.com
                    </p>

                    <p className="mt-3">
                        سيتم تنفيذ طلب الحذف خلال مدة لا تتجاوز 30 يومًا، ما لم يكن الاحتفاظ
                        ببعض البيانات مطلوبًا بموجب القانون.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        خدمات الطرف الثالث
                    </h2>

                    <ul className="list-disc space-y-2 pr-6">
                        <li>Firebase</li>
                        <li>Google Play Services</li>
                        <li>Google Play Billing</li>
                        <li>Apple App Store</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        خصوصية الأطفال
                    </h2>

                    <p>
                        التطبيق غير مخصص للأطفال دون سن 13 عامًا، ولا نجمع بيانات شخصية منهم
                        عن قصد.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        تحديثات السياسة
                    </h2>

                    <p>
                        قد نقوم بتحديث سياسة الخصوصية عند الحاجة، وسيتم نشر أي تعديل على هذه الصفحة.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-2xl font-bold text-orange-500">
                        التواصل معنا
                    </h2>

                    <p>
                        لأي استفسار يتعلق بالخصوصية أو حذف البيانات، يمكن التواصل معنا عبر:
                    </p>

                    <p className="mt-3 font-bold text-orange-600">
                        mos.jadallah@gmail.com
                    </p>
                </section>

            </div>

        </main>
    );
}