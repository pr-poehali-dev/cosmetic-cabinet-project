import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import BookingDialog from "@/components/BookingDialog";

interface HeroSectionProps {
  services: Array<{
    id: number;
    title: string;
    description: string;
    price: string;
    basePrice: number;
    duration: string;
    icon: string;
  }>;
  specialists: Array<{
    id: number;
    name: string;
    position: string;
    experience: string;
    education: string;
    specialization: string;
  }>;
  timeSlots: string[];
}

const HeroSection = ({ services, specialists, timeSlots }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="gradient-bg text-white border-0 px-4 py-1">
            Без хирургического вмешательства
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Космологический кабинет будущего
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современное оборудование и инновационные технологии для вашей красоты и молодости
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <BookingDialog 
              services={services}
              specialists={specialists}
              timeSlots={timeSlots}
              trigger={
                <Button size="lg" className="gradient-bg text-white">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на консультацию
                </Button>
              }
            />
            <Button size="lg" variant="outline">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-12 max-w-xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground mt-1">довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground mt-1">процедур</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
