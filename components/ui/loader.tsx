import TextSpinnerLoader from "./text-spinning-loader/text-spinning-loader";

export default function Loader({ isLoading, text }: { isLoading: boolean; text:string }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black transition-opacity duration-300">
      <TextSpinnerLoader text={text} />
    </div>
  );
}
