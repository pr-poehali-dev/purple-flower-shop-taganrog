import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Доставка цветов",
    description:
      "Быстрая доставка свежих букетов по всему Таганрогу и области. Работаем круглосуточно.",
    icon: "Truck",
    features: [
      "Доставка в течение 2 часов",
      "Бережная упаковка",
      "Курьер в форме",
    ],
  },
  {
    title: "Свадебные букеты",
    description:
      "Создаем уникальные свадебные композиции и оформляем торжества под ваш стиль.",
    icon: "Heart",
    features: [
      "Индивидуальный дизайн",
      "Консультация флориста",
      "Полное оформление",
    ],
  },
  {
    title: "Корпоративное озеленение",
    description:
      "Оформляем офисы живыми растениями, создаем уютную рабочую атмосферу.",
    icon: "Building",
    features: [
      "Подбор растений",
      "Регулярный уход",
      "Замена при необходимости",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-purple-darker mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр флористических услуг для частных лиц и
            компаний
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-purple-100 hover:shadow-lg transition-shadow group"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-purple-darker">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-primary mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
