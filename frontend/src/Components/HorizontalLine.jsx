export default function ({ TopPadding = true, BottomPadding = true }) {
  return (
    <div
      className={`border-t border-slate-300 mx-5 ${
        TopPadding && "mt-16 lg:mt-24"
      } ${BottomPadding && "mb-16 lg:mb-32"}`}
    />
  );
}
