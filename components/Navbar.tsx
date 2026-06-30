import Image from "next/image";

export default function Navbar() {
    return (
        <header className="shrink-0 border-b border-orange-100 bg-white/90">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
                <a
                    href="#download"
                    className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white transition hover:scale-105 hover:bg-orange-600"
                >
                    حمّل التطبيق
                </a>

                <div className="flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="احسبها"
                        width={36}
                        height={36}
                        priority
                    />

                    <span className="text-2xl font-black text-orange-500">
                        احسبها
                    </span>
                </div>
            </div>
        </header>
    );
}