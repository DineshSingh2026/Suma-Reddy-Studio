import { Truck, Globe, RotateCcw, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Complimentary Shipping Across India' },
  { icon: Globe, text: 'Worldwide Express Delivery' },
  { icon: RotateCcw, text: 'Easy 7-Day Returns' },
  { icon: ShieldCheck, text: '100% Secure Payments' },
];

export function AnnouncementBar() {
  // Duplicated track for a seamless infinite marquee.
  const track = [...items, ...items, ...items, ...items];
  return (
    <div className="bg-brand-deep w-full overflow-hidden text-white">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap py-2.5">
        {track.map((item, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-white/80 sm:mx-9">
            <item.icon className="h-3.5 w-3.5 text-pink" />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
