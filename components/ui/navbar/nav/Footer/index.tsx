import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex f justify-center gap-5 p-5 bg-transparent">
      <Link
        href="https://instagram.com"
        target="_blank"
        className="text-white flex items-center gap-2 hover:underline"
      >
        <span className="inline">Instagram</span>
      </Link>
      <Link
        href="https://facebook.com"
        target="_blank"
        className="text-white flex items-center gap-2 hover:underline"
      >
        <span className="inline">Facebook</span>
      </Link>
      <Link
        href="https://youtube.com"
        target="_blank"
        className="text-white flex items-center gap-2 hover:underline"
      >
        <span className="inline">YouTube</span>
      </Link>
      <Link
        href="https://tiktok.com"
        target="_blank"
        className="text-white flex items-center gap-2 hover:underline"
      >
        <span className="inline">TikTok</span>
      </Link>
    </div>
  );
}
