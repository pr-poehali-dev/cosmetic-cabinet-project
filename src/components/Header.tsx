import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import BookingDialog from "@/components/BookingDialog";

interface HeaderProps {
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

const Header = ({ services, specialists, timeSlots }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
            <Icon name="Sparkles" size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            COSMOS CLINIC
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
          <a href="#equipment" className="text-sm font-medium hover:text-primary transition-colors">Оборудование</a>
          <a href="#specialists" className="text-sm font-medium hover:text-primary transition-colors">Специалисты</a>
          <a href="#results" className="text-sm font-medium hover:text-primary transition-colors">Результаты</a>
          <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
          <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
        </nav>
        <BookingDialog 
          services={services} 
          specialists={specialists} 
          timeSlots={timeSlots}
          buttonText="Записаться"
        />
      </div>
    </header>
  );
};

export default Header;
