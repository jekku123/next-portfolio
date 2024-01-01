import { TypographyH1 } from '@/components/typography/h1';

export default function About() {
  return (
    <>
      <TypographyH1>About</TypographyH1>
      <p className="max-w-4xl mx-auto mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates, voluptatum,
        quas, voluptate quos quod doloribus repudiandae, quibusdam quia ipsam dolorum. Quisquam,
        quae. Quisquam voluptatem, quae natus voluptates voluptatibus, quibusdam, quia voluptatum
      </p>

      <p className="max-w-4xl mx-auto mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates, voluptatum,
        quas, voluptate quos quod doloribus repudiandae, quibusdam quia ipsam dolorum. Quisquam,
        quae. Quisquam voluptatem, quae natus voluptates voluptatibus, quibusdam, quia voluptatum
      </p>

      <p className="max-w-4xl mx-auto mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates, voluptatum,
        quas, voluptate quos quod doloribus repudiandae, quibusdam quia ipsam dolorum. Quisquam,
        quae. Quisquam voluptatem, quae natus voluptates voluptatibus, quibusdam, quia voluptatum
      </p>
      <div className="flex flex-col min-h-screen bg-slate-600">
        <h1>keke</h1>
        <div className="grow bg-orange-600 flex">
          <div className="grow bg-green-600">keke</div>
        </div>
        <h2>keke</h2>
      </div>
    </>
  );
}
