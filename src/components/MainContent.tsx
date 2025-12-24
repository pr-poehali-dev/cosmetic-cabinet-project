import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface MainContentProps {
  services: Array<{
    id: number;
    title: string;
    description: string;
    price: string;
    basePrice: number;
    duration: string;
    icon: string;
  }>;
  equipment: Array<{
    name: string;
    description: string;
    technology: string;
  }>;
  specialists: Array<{
    id: number;
    name: string;
    position: string;
    experience: string;
    education: string;
    specialization: string;
  }>;
  results: Array<{
    id: number;
    procedure: string;
    description: string;
    sessions: string;
    image: string;
    result: string;
  }>;
  reviews: Array<{
    id: number;
    name: string;
    rating: number;
    date: string;
    text: string;
  }>;
}

const MainContent = ({ services, equipment, specialists, results, reviews }: MainContentProps) => {
  return (
    <>
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
            <Badge variant="outline" className="mb-4">Наш специалист</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Опытный врач-косметолог
            </h2>
            <p className="text-lg text-muted-foreground">
              Врач высшей категории с международными сертификатами
            </p>
          </div>
          <div className="flex justify-center">
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
          <div className="grid md:grid-cols-2 gap-8">
            {results.map((result) => (
              <Card key={result.id} className="overflow-hidden hover-scale group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={result.image} 
                    alt={result.procedure}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="gradient-bg text-white border-0">
                      {result.sessions}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{result.procedure}</CardTitle>
                  <CardDescription className="text-base">{result.description}</CardDescription>
                  <div className="flex items-start gap-2 mt-3 pt-3 border-t">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium text-foreground">{result.result}</p>
                  </div>
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
    </>
  );
};

export default MainContent;