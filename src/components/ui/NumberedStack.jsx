export default function NumberedStack({ items = [] }) {
  return (
    <ol className="space-y-1 list-none p-0 m-0">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-8 py-6 border-l-4 hover:bg-white/5 transition-colors duration-300 rounded-r-xl"
          style={{ borderColor: item.color || '#6237A0' }}
        >
          <div
            className="absolute left-0 top-6 -translate-x-1/2 w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color || '#6237A0' }}
            aria-hidden="true"
          />
          <h3 className="text-xl font-heading font-semibold text-white mb-2">{item.title}</h3>
          {item.description && (
            <p className="text-brand-lavender text-base font-body font-light leading-relaxed">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  )
}
