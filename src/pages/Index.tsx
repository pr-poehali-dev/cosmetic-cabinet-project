import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainContent from "@/components/MainContent";

const Index = () => {
  const [calculatorServices, setCalculatorServices] = useState<{[key: number]: {selected: boolean, sessions: number}}>({});

  const services = [
    {
      id: 1,
      title: "Лазерная биоревитализация",
      description: "Инновационная процедура омоложения без инъекций",
      price: "от 8 500 ₽",
      basePrice: 8500,
      duration: "60 мин",
      icon: "Sparkles"
    },
    {
      id: 2,
      title: "RF-лифтинг лица",
      description: "Подтяжка кожи радиочастотами без операции",
      price: "от 12 000 ₽",
      basePrice: 12000,
      duration: "90 мин",
      icon: "Zap"
    },
    {
      id: 3,
      title: "Ультразвуковая чистка",
      description: "Глубокое очищение пор ультразвуком",
      price: "от 5 500 ₽",
      basePrice: 5500,
      duration: "45 мин",
      icon: "Droplets"
    },
    {
      id: 4,
      title: "Микротоковая терапия",
      description: "Стимуляция мышц и улучшение тонуса кожи",
      price: "от 6 500 ₽",
      basePrice: 6500,
      duration: "50 мин",
      icon: "Activity"
    },
    {
      id: 5,
      title: "Криолиполиз",
      description: "Безоперационное удаление жировых отложений",
      price: "от 15 000 ₽",
      basePrice: 15000,
      duration: "120 мин",
      icon: "Snowflake"
    },
    {
      id: 6,
      title: "LED-терапия",
      description: "Светолечение для омоложения и лечения акне",
      price: "от 4 000 ₽",
      basePrice: 4000,
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
    }
  ];

  const results = [
    {
      id: 1,
      procedure: "RF-лифтинг",
      description: "Лифтинг овала лица",
      sessions: "4 процедуры",
      image: "https://cdn.poehali.dev/projects/cc1323fe-6110-4559-908b-c86b07001c63/files/ac38e3d3-3d64-4ee2-8c0c-c4ab39d91de2.jpg",
      result: "Подтяжка овала лица, уменьшение носогубных складок"
    },
    {
      id: 2,
      procedure: "Лазерная биоревитализация",
      description: "Улучшение текстуры кожи",
      sessions: "3 процедуры",
      image: "https://cdn.poehali.dev/projects/cc1323fe-6110-4559-908b-c86b07001c63/files/3b5e1c0e-df1e-4be8-901f-479fa958b560.jpg",
      result: "Сияние кожи, выравнивание тона, уменьшение морщин"
    },
    {
      id: 3,
      procedure: "Криолиполиз",
      description: "Коррекция области живота",
      sessions: "2 процедуры",
      image: "https://cdn.poehali.dev/projects/cc1323fe-6110-4559-908b-c86b07001c63/files/663f7f05-8be3-49c6-8500-9f338d2d8866.jpg",
      result: "Уменьшение объёмов на 4-6 см, подтянутый силуэт"
    },
    {
      id: 4,
      procedure: "LED-терапия",
      description: "Лечение акне",
      sessions: "6 процедур",
      image: "https://cdn.poehali.dev/projects/cc1323fe-6110-4559-908b-c86b07001c63/files/216daa08-97ad-43cf-9fab-247f81712742.jpg",
      result: "Чистая кожа, уменьшение воспалений на 80%"
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      <Header 
        services={services} 
        specialists={specialists} 
        timeSlots={timeSlots} 
      />
      <HeroSection 
        services={services} 
        specialists={specialists} 
        timeSlots={timeSlots} 
      />
      <MainContent 
        services={services}
        equipment={equipment}
        specialists={specialists}
        results={results}
        reviews={reviews}
      />
    </div>
  );
};

export default Index;
