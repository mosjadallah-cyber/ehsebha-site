import Image from "next/image";
import PhoneSlideshow from "@/components/PhoneSlideshow";

export default function Hero() {
    return (
        <section className="mx-auto grid w-full max-w-7xl items-center gap-6 px-6 py-2 md:grid-cols-2">
            <div className="flex justify-center">
                <PhoneSlideshow />
            </div>

            <div className="flex flex-col items-center text-center">
                <span className="mb-3 rounded-full bg-orange-100 px-4 py-2 text-xs font-bold text-orange-600">
                    تطبيق عربي لحساب السعرات
                </span>

                <h1 className="text-center text-3xl font-black leading-tight md:text-4xl">
                    احسب <span className="text-orange-500">أكلك العربي</span> بكل سهولة
                </h1>

                <p className="mt-3 max-w-xl text-center text-base leading-7 text-gray-600">
                    حلّل وجبتك بالتصوير، وتابع السعرات والماكروز والفيتامينات،
                    <br />
                    وسجّل أكلك اليومي في مكان واحد.
                </p>
                <div
                    id="download"
                    className="mt-4 flex flex-wrap items-center justify-center gap-3"
                >
                    <a
                        href="https://apps.apple.com/app/id6767859232"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-36 items-center justify-center"
                    >
                        <img
                            src="/images/apple.svg"
                            alt="Download on the App Store"
                            className="h-full w-full object-contain"
                        />
                    </a>

                    <a
                        href="https://play.google.com/store/apps/details?id=com.musab.ehsebhaapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-36 items-center justify-center"
                    >
                        <img
                            src="/images/google.png"
                            alt="Get it on Google Play"
                            className="h-full w-full object-contain"
                        />
                    </a>
                </div>

                <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs font-bold text-gray-700">
                    <span className="rounded-full bg-orange-50 px-3 py-1.5">
                        ✓ تحليل بالتصوير
                    </span>
                    <span className="rounded-full bg-orange-50 px-3 py-1.5">
                        ✓ ماكروز وفيتامينات
                    </span>
                    <span className="rounded-full bg-orange-50 px-3 py-1.5">
                        ✓ سجل يومي
                    </span>
                </div>
            </div>
        </section>
    );
}