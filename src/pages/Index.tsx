import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Index = () => {
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedSpecialist, setSelectedSpecialist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    {
      id: 1,
      title: "Лазерная биоревитализация",
      description: "Инновационная процедура омоложения без инъекций",
      price: "от 8 500 ₽",
      duration: "60 мин",
      icon: "Sparkles"
    },
    {
      id: 2,
      title: "RF-лифтинг лица",
      description: "Подтяжка кожи радиочастотами без операции",
      price: "от 12 000 ₽",
      duration: "90 мин",
      icon: "Zap"
    },
    {
      id: 3,
      title: "Ультразвуковая чистка",
      description: "Глубокое очищение пор ультразвуком",
      price: "от 5 500 ₽",
      duration: "45 мин",
      icon: "Droplets"
    },
    {
      id: 4,
      title: "Микротоковая терапия",
      description: "Стимуляция мышц и улучшение тонуса кожи",
      price: "от 6 500 ₽",
      duration: "50 мин",
      icon: "Activity"
    },
    {
      id: 5,
      title: "Криолиполиз",
      description: "Безоперационное удаление жировых отложений",
      price: "от 15 000 ₽",
      duration: "120 мин",
      icon: "Snowflake"
    },
    {
      id: 6,
      title: "LED-терапия",
      description: "Светолечение для омоложения и лечения акне",
      price: "от 4 000 ₽",
      duration: "30 мин",
      icon: "Sun"
    }
  ];

  const equipment = [
    {
      name: "ENDYMED 3DEEP",
      description: "Радиочастотный аппарат для RF-лифтинга и омоложения",
      technology: "3D RF-технология"
    },
    {
      name: "FOTONA DYNAMIS PRO",
      description: "Лазерная система для омоложения и лечения",
      technology: "Nd:YAG + Er:YAG лазер"
    },
    {
      name: "CLATUU ALPHA",
      description: "Система криолиполиза для коррекции фигуры",
      technology: "360° охлаждение"
    },
    {
      name: "ULTRAFORMER III",
      description: "HIFU-лифтинг для безоперационной подтяжки",
      technology: "Микрофокусированный ультразвук"
    }
  ];

  const specialists = [
    {
      id: 1,
      name: "Екатерина Волкова",
      position: "Главный врач-косметолог",
      experience: "15 лет",
      education: "РНИМУ им. Н.И. Пирогова",
      specialization: "Аппаратная косметология"
    },
    {
      id: 2,
      name: "Анна Петрова",
      position: "Врач-дерматолог",
      experience: "10 лет",
      education: "Первый МГМУ им. И.М. Сеченова",
      specialization: "Лазерные технологии"
    },
    {
      id: 3,
      name: "Мария Соколова",
      position: "Врач-косметолог",
      experience: "8 лет",
      education: "РУДН",
      specialization: "Омолаживающие процедуры"
    }
  ];

  const results = [
    {
      id: 1,
      procedure: "RF-лифтинг",
      description: "Лифтинг овала лица",
      sessions: "4 процедуры"
    },
    {
      id: 2,
      procedure: "Лазерная биоревитализация",
      description: "Улучшение текстуры кожи",
      sessions: "3 процедуры"
    },
    {
      id: 3,
      procedure: "Криолиполиз",
      description: "Коррекция области живота",
      sessions: "2 процедуры"
    },
    {
      id: 4,
      procedure: "LED-терапия",
      description: "Лечение акне",
      sessions: "6 процедур"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Ольга М.",
      rating: 5,
      date: "15.12.2024",
      text: "Потрясающий результат после RF-лифтинга! Кожа подтянулась, морщины разгладились. Специалисты профессиональные, оборудование самое современное. Рекомендую!"
    },
    {
      id: 2,
      name: "Елена К.",
      rating: 5,
      date: "10.12.2024",
      text: "Делала лазерную биоревитализацию у Екатерины Волковой. Процедура абсолютно безболезненная, результат виден после первого сеанса. Очень довольна!"
    },
    {
      id: 3,
      name: "Ирина П.",
      rating: 5,
      date: "05.12.2024",
      text: "Криолиполиз превзошел все ожидания! Минус 4 см в талии за 2 процедуры. Персонал внимательный, все объясняют подробно. Спасибо!"
    }
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

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
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      {/* Header */}
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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gradient-bg text-white">
                <Icon name="Calendar" size={18} className="mr-2" />
                Записаться
              </Button>
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
        </div>
      </header>

      {/* Hero Section */}
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="gradient-bg text-white">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на консультацию
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Онлайн-запись на процедуру</DialogTitle>
                    <DialogDescription>
                      Выберите услугу, специалиста и удобное время
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label>Выберите услугу</Label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
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
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">5000+</div>
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Современные процедуры красоты
            </h2>
            <p className="text-lg text-muted-foreground">
              Только безопасные и эффективные методы на новейшем оборудовании
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover-scale border-2 hover:border-primary transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Badge variant="secondary">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {service.duration}
                    </Badge>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" variant="outline">
                        Записаться
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Запись на {service.title}</DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Оборудование</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Технологии мирового уровня
            </h2>
            <p className="text-lg text-muted-foreground">
              В нашей клинике установлено самое современное оборудование от ведущих мировых производителей
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {equipment.map((item, index) => (
              <Card key={index} className="border-2 hover:border-secondary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{item.name}</CardTitle>
                    <Badge className="gradient-bg text-white border-0">Premium</Badge>
                  </div>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Icon name="Cpu" size={18} />
                    {item.technology}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Наша команда</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Опытные специалисты
            </h2>
            <p className="text-lg text-muted-foreground">
              Врачи высшей категории с международными сертификатами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {specialists.map((specialist) => (
              <Card key={specialist.id} className="text-center hover-scale">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{specialist.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {specialist.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Icon name="Award" size={16} className="text-muted-foreground" />
                    <span>Опыт: {specialist.experience}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Icon name="GraduationCap" size={16} className="text-muted-foreground" />
                    <span>{specialist.education}</span>
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {specialist.specialization}
                  </Badge>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4" variant="outline">
                        Записаться к врачу
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Запись к {specialist.name}</DialogTitle>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Результаты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              До и после процедур
            </h2>
            <p className="text-lg text-muted-foreground">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result) => (
              <Card key={result.id} className="overflow-hidden hover-scale">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-muted-foreground" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{result.procedure}</CardTitle>
                  <CardDescription>{result.description}</CardDescription>
                  <Badge variant="outline" className="mt-2 w-fit">
                    {result.sessions}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-lg text-muted-foreground">
              Более 500 положительных отзывов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <Badge variant="secondary">{review.date}</Badge>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Свяжитесь с нами
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Наши контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-sm text-muted-foreground">г. Москва, ул. Тверская, 15</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">info@cosmosclinic.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Режим работы</div>
                      <div className="text-sm text-muted-foreground">Пн-Вс: 9:00 - 21:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Быстрая связь</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input placeholder="Ваше имя" />
                    <Input type="tel" placeholder="Телефон" />
                    <Textarea placeholder="Ваш вопрос" />
                    <Button className="w-full gradient-bg text-white">
                      Отправить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <span className="text-lg font-bold">COSMOS CLINIC</span>
              </div>
              <p className="text-sm text-muted">
                Современная косметология без хирургического вмешательства
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>Лазерная биоревитализация</li>
                <li>RF-лифтинг</li>
                <li>Криолиполиз</li>
                <li>LED-терапия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>О клинике</li>
                <li>Специалисты</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-muted/20 mt-8 pt-8 text-center text-sm text-muted">
            © 2024 COSMOS CLINIC. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
