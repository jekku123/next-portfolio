import RevealInView from "../reveal-in-view";

export default function SectionContainer({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <RevealInView>
      <section
        id={id}
        className="mx-auto flex h-full w-full max-w-5xl scroll-m-20 flex-col justify-center px-12 py-4 md:px-6"
      >
        {children}
      </section>
    </RevealInView>
  );
}
