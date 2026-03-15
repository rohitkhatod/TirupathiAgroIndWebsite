const months = [
  ['Jan-Feb', 'Root strengthening, micronutrient correction'],
  ['Mar-Apr', 'Transition feeding and soil conditioner program'],
  ['May-Jun', 'Heat stress biostimulant cycle and wetting strategy'],
  ['Jul-Aug', 'Disease pressure monitoring and foliar nutrition'],
  ['Sep-Oct', 'Recovery + density optimization for play season'],
  ['Nov-Dec', 'Organic matter balancing and winter prep']
];

export function TurfCalendar() {
  return (
    <div className="rounded-2xl border border-forest/10 p-6">
      <h3 className="text-xl font-semibold text-forest">Interactive Turf Calendar</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {months.map(([window, strategy]) => (
          <div key={window} className="rounded-xl bg-earth/40 p-4 text-sm">
            <p className="font-semibold text-forest">{window}</p>
            <p className="mt-1 text-slate/80">{strategy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
