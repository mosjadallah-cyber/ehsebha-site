export default function ContactPage() {
    return (
        <main dir="rtl" className="mx-auto max-w-3xl px-6 py-12">

            <a
                href="/"
                className="mb-8 inline-flex items-center rounded-full bg-orange-500 px-5 py-2 font-bold text-white hover:bg-orange-600"
            >
                ← العودة للرئيسية
            </a>

            <h1 className="mb-3 text-center text-4xl font-black">
                تواصل معنا
            </h1>

            <p className="mb-10 text-center text-gray-600">
                إذا كان لديك أي استفسار أو اقتراح أو واجهت أي مشكلة في التطبيق،
                يسعدنا التواصل معك.
            </p>

            <div className="rounded-2xl border border-orange-100 bg-white p-8 shadow-sm">

                <div className="mb-6">
                    <h2 className="text-lg font-bold text-orange-500">
                        البريد الإلكتروني
                    </h2>

                    <a
                        href="mailto:mos.jadallah@gmail.com"
                        className="mt-2 block text-lg text-gray-700 hover:text-orange-500"
                    >
                        support@ehsebha.app
                    </a>
                </div>

                <div>
                    <h2 className="text-lg font-bold text-orange-500">
                        الرد على الرسائل
                    </h2>

                    <p className="mt-2 text-gray-600">
                        نسعى للرد على جميع الاستفسارات خلال 24 إلى 48 ساعة.
                    </p>
                </div>

            </div>

        </main>
    );
}