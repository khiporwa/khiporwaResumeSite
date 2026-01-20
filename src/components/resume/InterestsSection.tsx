import { Interest } from "@/data/resumeData";
import { Gamepad2, TrendingUp, Globe, Film, Trophy, Music, Book, Camera, Palette, Heart } from "lucide-react";

interface InterestsSectionProps {
  interests: Interest[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  gamepad: Gamepad2,
  "trending-up": TrendingUp,
  globe: Globe,
  film: Film,
  trophy: Trophy,
  music: Music,
  book: Book,
  camera: Camera,
  palette: Palette,
  heart: Heart,
};

const InterestsSection = ({ interests }: InterestsSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="resume-section-title">Interests</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {interests.map((interest) => {
          const IconComponent = iconMap[interest.icon] || Heart;
          
          return (
            <div key={interest.id} className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <IconComponent className="w-5 h-5" style={{ color: 'hsl(var(--resume-heading))' }} />
              </div>
              <div>
                <h3 className="font-semibold text-sm" style={{ color: 'hsl(var(--resume-heading))' }}>
                  {interest.title}
                </h3>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InterestsSection;
