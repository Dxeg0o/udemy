export default function Title({ name }: { name: string }) {
  return (
    <div className="my-4 pb-4 border-b">
      <h1 className="font-bold text-6xl capitalize">{name}</h1>
    </div>
  );
}
