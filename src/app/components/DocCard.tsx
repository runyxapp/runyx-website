import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface DocCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description?: string;
  bulletPoints?: string[];
  note?: string;
}

export function DocCard({ id, icon: Icon, title, description, bulletPoints, note }: DocCardProps) {
  return (
    <section id={id} className="mb-12">
      <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-8">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-[#9100ff] to-[#c03060] p-3 rounded-lg shrink-0">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-normal mb-6 text-white">
              {title}
            </h3>
            {description && (
              <p className="text-[#eaeaea]/80 font-light text-lg mb-4 leading-relaxed">
                {description}
              </p>
            )}
            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="space-y-3 text-[#eaeaea]/80 font-light text-sm">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-[#9100ff] shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {note && (
              <div className="mt-6 bg-[#1f1f1f] border-l-4 border-l-[#9100ff] p-4 rounded">
                <p className="text-[#eaeaea]/70 text-sm font-light">
                  <span className="font-normal text-[#eaeaea]">Note:</span> {note}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}