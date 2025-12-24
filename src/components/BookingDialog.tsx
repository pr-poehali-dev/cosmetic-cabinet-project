import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

interface BookingDialogProps {
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
  trigger?: React.ReactNode;
  buttonText?: string;
}

const BookingDialog = ({ services, specialists, timeSlots, trigger, buttonText = "Записаться" }: BookingDialogProps) => {
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedSpecialist, setSelectedSpecialist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    if (!selectedService || !selectedSpecialist || !selectedDate || !selectedTime) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }
    toast.success("Запись успешно создана! Мы свяжемся с вами для подтверждения");
    setBookingStep(1);
    setSelectedService("");
    setSelectedSpecialist("");
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="gradient-bg text-white">
            <Icon name="Calendar" size={18} className="mr-2" />
            {buttonText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Онлайн-запись на процедуру</DialogTitle>
          <DialogDescription>
            Выберите услугу, специалиста и удобное время
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          {bookingStep >= 1 && (
            <div className="space-y-2">
              <Label>Выберите услугу</Label>
              <Select value={selectedService} onValueChange={(val) => { setSelectedService(val); setBookingStep(2); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.title}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          {bookingStep >= 2 && (
            <div className="space-y-2">
              <Label>Выберите специалиста</Label>
              <Select value={selectedSpecialist} onValueChange={(val) => { setSelectedSpecialist(val); setBookingStep(3); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите специалиста" />
                </SelectTrigger>
                <SelectContent>
                  {specialists.map((specialist) => (
                    <SelectItem key={specialist.id} value={specialist.name}>
                      {specialist.name} - {specialist.position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {bookingStep >= 3 && (
            <div className="space-y-2">
              <Label>Дата</Label>
              <Input 
                type="date" 
                value={selectedDate}
                onChange={(e) => { setSelectedDate(e.target.value); setBookingStep(4); }}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          )}

          {bookingStep >= 4 && (
            <div className="space-y-2">
              <Label>Время</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите время" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {bookingStep >= 4 && (
            <>
              <div className="space-y-2">
                <Label>Ваше имя</Label>
                <Input placeholder="Введите ваше имя" />
              </div>
              <div className="space-y-2">
                <Label>Телефон</Label>
                <Input type="tel" placeholder="+7 (___) ___-__-__" />
              </div>
              <div className="space-y-2">
                <Label>Комментарий (опционально)</Label>
                <Textarea placeholder="Дополнительная информация" />
              </div>
              <Button onClick={handleBooking} className="w-full gradient-bg text-white">
                Подтвердить запись
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
